import {
	// html,
	property,
	// LitElement,
    customElement,
    // TemplateResult,
    // css,
	state,
  } from 'lit-element';

import { css, html, LitElement, TemplateResult } from 'lit';
import { patterns } from "./patterns"

import "../components/wizard-select";
import "../components/wizard-textfield";
import "../components/wizard-card";
import "../icons/material-icons-outlined.css"
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
    
    @property({ type: Document}) templates: Document | undefined
    @property({ type: String }) tagName: string = "";
    @property({ type: Element }) parent: Element | undefined;

    public newId = "";
    public newDesc = "";
    public newValueTemplate = "";
    
    render() {
        return html`
            <wizard-card>
                <h2 slot="header">Add DAType</h2>
                <div class="form">
                    <wizard-select
                        label="values"
                        name="values"
                        .maybeValue=${''}
                        required
                        icon="playlist_add_check"
                        maxlength="255"
                        minlength="1"
                        fixedMenuPosition
                        pattern="${patterns.nmToken}"
                        @change=${ bindTargetValue(this, "newValueTemplate") }
                    >
                        ${ this.renderValueListItems() }
                    </wizard-select>

                    <wizard-textfield
                        label="id"
                        name="id"
                        helper="${translate('scl.id')}"
                        required
                        maxlength="127"
                        minlength="1"
                        pattern="${patterns.nmToken}"
                        dialogInitialFocus
                        @input=${ bindTargetValue(this, "newId") }
                    ></wizard-textfield>
                    
                    <wizard-textfield
                        label="desc"
                        name="desc"
                        helper="${translate('scl.desc')}"
                        nullable
                        pattern="${patterns.normalizedString}"
                        @input=${ bindTargetValue(this, "newDesc") }
                    ></wizard-textfield>

                    
                </div>

                <footer slot="footer">
                    <mwc-button @click=${this.handleOnClickCancel}>
                        Cancel
                    </mwc-button>

                    <mwc-button trailingIcon icon="add" @click=${this.handleOnClickAdd}>
                        Add
                    </mwc-button>
                </footer>
            </wizard-card>
            
            `
    }

    private renderValueListItems(): TemplateResult[] {
        return Array
            .from(this.templates.querySelectorAll('DAType'))
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
		.form {
			display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
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

    private emitDATypeCreation() {

        console.log({level:"dev", message: "prepping event", newId: this.newId, newDesc: this.newDesc, newValueTemplate: this.newValueTemplate})

        const event = this.makeDATypeCreationEvent(this.newId, this.newDesc, this.newValueTemplate)
        this.dispatchEvent(event)
    }

    private makeDATypeCreationEvent(
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

        const eventDetails = {
            parent: this.parent,
            node: element
        }

        const event = new CustomEvent("oscd-edit", {detail: eventDetails, bubbles: true, composed: true})

        // TODO: there was more here, check original
        return event
    }

    private handleOnClickCancel(){
        this.signalFinished()
    }

    private handleOnClickAdd(){
        this.emitDATypeCreation()
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