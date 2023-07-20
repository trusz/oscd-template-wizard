import {
	html,
	property,
	LitElement,
    customElement,
    TemplateResult,
    css,
	state,
  } from 'lit-element';
import { patterns } from "./patterns"

// import "@material/web/button/text-button.js"
// import "@material/web/icon/icon.js";
import "../components/wizard-select.js";
import "../components/wizard-textfield";
import "@material/mwc-button";

const TAG_NAME = "oscd-datype-wizard"
const allDataTypeSelector = ["LNodeType", "DOType", "DAType", "EnumType"];

// Should be in a shared package somewhere
export function createElement(
    doc: Document,
    tag: string,
    attrs: Record<string, string | null>
): Element {
    const element = doc.createElementNS(doc.documentElement.namespaceURI, tag);
    Object.entries(attrs)
        .filter(([_, value]) => value !== null)
        .forEach(([name, value]) => element.setAttribute(name, value!));
    return element;
}

@customElement(TAG_NAME)
export class DATypeWizard extends LitElement {
    
    @property({ type: Document}) templates: Document = new Document();
    @property({ type: String }) tagName: string = "";
    @property({ type: Element }) parent: Element | undefined;

    public newId: string = "";
    
render() {


    return html`
        <form @submit=${this.handleSubmit}>
            <h2>Add DAType</h2>
            <!-- <label>
                <span>Values</span>
                <select name="values">
                    ${ this.renderValueListItems() }
                </select>
            </label> -->

           
            
            <wizard-select
                label="id"
                helper="${translate('scl.id')}"
                required
                maxlength="127"
                minlength="1"
                pattern="${patterns.nmToken}"
                dialogInitialFocus
                @input=${ bindTargetValue(this, "newId") }
            ></wizard-select>
            
            <wizard-select
                label="desc"
                helper="${translate('scl.desc')}"
                nullable
                pattern="${patterns.normalizedString}"
            ></wizard-select>

            <wizard-select
                label="values"
                helper="${translate('scl.id')}"
                .maybeValue=${''}
                required
                maxlength="255"
                minlength="1"
                pattern="${patterns.nmToken}"
                dialogInitialFocus
            >
                ${ this.renderValueListItems() }
            </wizard-select>

            <footer>
                <mwc-button
                    label="cancel"
                    @click=${() => {}}
                >
                </mwc-button>

                <mwc-button
                    icon="add"
                    label="Add"
                    @click=${() => {}}
                >
                </mwc-button>

                <!-- <md-text-button @click=${this.handleOnClickCancel}>
                    Cancel
                </md-text-button>
                <md-text-button trailing-icon type="submit" @click=${this.handleOnClickAdd}>
                    Add
                    <md-icon slot="icon" aria-hidden="true">add</md-icon>
                </md-text-button> -->
            </footer>
        </form>
        
        `
    }

    private renderValueListItems(): TemplateResult[] {
        return Array.from(this.templates.querySelectorAll('DAType'))
        .map(this.renderValueItem)
    }

    private renderValueItem(datype: Element): TemplateResult {
        return html`
            <mwc-list-item
                graphic="icon"
                hasMeta
                value="${datype.getAttribute('id') ?? ''}"
            >
                <span>
                    ${datype.getAttribute('id')?.replace('OpenSCD_', '')}
                </span>
                <span slot="meta">
                    ${datype.querySelectorAll('BDA').length}
                </span>
            </mwc-list-item>
        `
    }

   

    static styles = css`
		form {
			display: flex;
            flex-direction: column;
            gap: 1rem
		}

        footer{
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            gap: 1rem;
        }

        label{
            display: flex;
            flex-direction: column;
        }

	`;

    private handleSubmit(event: FormDataEvent) {
        event.preventDefault()
        const form = event.target as HTMLFormElement
        const formData = new FormData(form)
        const templateId = formData.get('values') as string
        const id = formData.get('id') as string
        const desc = formData.get('desc') as string

        console.log({level:"dev", message: "prepping event", valuesTemplateId: templateId, id, desc, parent: this.parent, tagName: this.tagName})

        this.createDAType(id, desc, templateId)
    }

    private createDAType(
        id: string, 
        desc: string, 
        templateId: string,
    ) {
        // const id = getValue(inputs.find(i => i.label === 'id')!);

        if(!this.parent){ throw new Error('parent is required') }
        if(this.tagName === ''){ throw new Error('tagName is required') }
        if(!id){ throw new Error('id is required') }

        const idExists = Array
            .from(this.templates.querySelectorAll(allDataTypeSelector.join(",")))
            .some(type => type.getAttribute('id') === id)

        if (idExists){ throw new Error(`id '${id}' already exists`) }

        // const desc = getValue(inputs.find(i => i.label === 'desc')!);
        // const values = <Select>inputs.find(i => i.label === 'values');

        let selectedTemplate: Element | null = null;
        let element = createElement(this.parent.ownerDocument, 'DAType', {});
        if(templateId){
            selectedTemplate = this.templates.querySelector(`DAType[id="${templateId}"]`)
        }

        if(selectedTemplate){
            element = <Element>selectedTemplate.cloneNode(true)
        }


        element.setAttribute('id', id);
        element.setAttribute('desc', desc);
        // const selectedElement = values.selected
        //   ? this.templates.querySelector(`DAType[id="${valuesTemplateId}"]`)
        //   : null;



        // const element = values.selected
        //   ? <Element>selectedElement!.cloneNode(true)
        //   : createElement(parent.ownerDocument, 'DAType', {});


        // const actions: Create[] = [];

        // if (selectedElement)
        //   addReferencedDataTypes(selectedElement, parent).forEach(action =>
        //     actions.push(action)
        //   );

        const eventDetails = {
            parent: this.parent,
            node:element
        }

        const event = new CustomEvent("oscd-edit", {detail: eventDetails, bubbles: true, composed: true})
        this.dispatchEvent(event)

        // actions.push({
        //   new: {
        //     parent,
        //     element,
        //   },
        // });
    }

    private handleOnClickCancel(){
        this.signalFinished()
    }

    private handleOnClickAdd(){
        this.signalFinished()
    }

    private signalFinished() {

        const event = new CustomEvent('oscd-wizard-finished', {
            bubbles: true,
            composed: true,
        })
        this.dispatchEvent(event)
    }

}
    
    
function translate(key: string): string {
    return key
}


declare global {
    interface HTMLElementTagNameMap {
        [TAG_NAME]: DATypeWizard;
    }
}


function bindTargetValue<T>(obj: T, key: keyof T){
    return function( event: Event){
        const target = event.target as HTMLInputElement
        // @ts-ignore
        obj[key] = target.value
    }
}