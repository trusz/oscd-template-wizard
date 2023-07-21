import {
	property,
    state,
    customElement,
} from 'lit-element';
  
import { css, html, LitElement, TemplateResult } from 'lit';
  
import "@material/mwc-button";
import "@material/mwc-list";
  
import "../components/wizard-select";
import "../components/wizard-textfield";
import "../components/wizard-card";
import "../icons/material-icons-outlined.css"
import { patterns } from "./patterns"
import { Optional } from "../x/type-helper"
import { bindTargetValue } from "../x/value-binder"
import { identity } from '../x/foundation';


const TAG_NAME = "oscd-datype-editor-wizard"
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
export class DATypeEditorWizard extends LitElement {
    
    @property({ type: Document}) templates?: Document
    @property({ type: Document}) set element(element?: Document){
        this._element = element
    }
    get element(): Optional<Document>{ 
        return this._element
    }

    
    @state() private _element?: Document

    public newId = "";
    public newDesc = "";
    public newValueTemplate = "";
    
    render() {
        
        const id = this._element?.documentElement.getAttribute("id") ?? ""
        const desc = this._element?.documentElement.getAttribute("desc") ?? ""
        const bdas = Array.from(this._element?.documentElement.querySelectorAll("BDA") ?? [])
        
        return html`
            <wizard-card>
                <h2 slot="header">Edit DAType</h2>
                <div class="form">
                    <wizard-textfield
                        label="id"
                        name="id"
                        maybeValue=${id}
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
                        maybeValue=${desc}
                        helper="${translate('scl.desc')}"
                        nullable
                        pattern="${patterns.normalizedString}"
                        @input=${ bindTargetValue(this, "newDesc") }
                    ></wizard-textfield>

                    <mwc-list>
                        ${ bdas.map(bda => this.renderBDA(bda)) }
                    </mwc-list>

                    
                </div>

                <footer slot="footer">
                    <!-- 
                        TODO: needs the correct color --mdc-theme-error, 
                        but it is not yet available here for some reason
                    -->
                    <mwc-button @click=${this.handleOnClickCancel} style="--mdc-theme-primary: red">
                        CLOSE
                    </mwc-button>

                    <mwc-button @click=${this.handleOnClickAdd}>
                        Save
                    </mwc-button>
                </footer>
            </wizard-card>
            
            `
    }


    private renderBDA(bda: Element): TemplateResult { 

        const value = identity(bda)
        const name = bda.getAttribute('name')
        const bType = bda.getAttribute('bType')
        const type = bda.getAttribute("type")
        
        let displayedType = bType
        if(this.isEnumOrStruct(bType)){
            displayedType = `#${type}`
        }

        // ${bda.getAttribute('bType') === 'Enum' || bda.getAttribute('bType') === 'Struct'
        // ? '#' + bda.getAttribute('type')
        // : bda.getAttribute('bType')}

        return html`
            <mwc-list-item twoline tabindex="0" value="${value}">
                <span>
                    ${name}
                </span>
                <span slot="secondary">
                    ${displayedType}
                </span>
            </mwc-list-item>
        `
    }

    private isEnumOrStruct(bType: string | null): boolean {
        return bType === 'Enum' || bType === 'Struct'
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

    private emitDATypeChange() {

        const event = this.makeDATypeChangeEvent(this.newId, this.newDesc, this.newValueTemplate)
        this.dispatchEvent(event)
    }

    private makeDATypeChangeEvent(
        id: string, 
        desc: string, 
        templateId: string,
    ) {

        if(!id){ throw new Error('id is required') }
        const element = <Element>this._element?.documentElement.cloneNode(true)

        element.setAttribute('id', id);
        element.setAttribute('desc', desc);

        const eventDetails = {
            element
        }

        const event = new CustomEvent("oscd-edit", {detail: eventDetails, bubbles: true, composed: true})

        return event
    }

    private handleOnClickCancel(){
        this.signalFinished()
    }

    private handleOnClickAdd(){
        this.emitDATypeChange()
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
        [TAG_NAME]: DATypeEditorWizard;
    }
}


