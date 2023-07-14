import { LitElement, TemplateResult, css, html } from "lit";
import { property, customElement } from "lit/decorators.js";
import { patterns } from "./patterns"
import "@material/web/button/text-button.js"
import "@material/web/icon/icon.js";

const TAG_NAME = "oscd-datype-wizard"

@customElement(TAG_NAME)
export class DATypeWizard extends LitElement {
    
    @property({ type: Document})
    templates: Document = new Document();
    
render() {
    return html`
        <form @submit=${this.handleSubmit}>
            <h2>Add DAType</h2>
            <mwc-select
                name="values"
                fixedMenuPosition
                outlined
                icon="playlist_add_check"
                label="values"
                helper="Default enumerations"
            >
                ${ this.renderValueListItems() }
            </mwc-select>

            <wizard-textfield
                name="id"
                label="id"
                helper="${translate('scl.id')}"
                .maybeValue=${''}
                required
                maxlength="255"
                minlength="1"
                pattern="${patterns.nmToken}"
                dialogInitialFocus
            >
            </wizard-textfield> 
            
            <wizard-textfield
                name="desc"
                label="desc"
                helper="${translate('scl.desc')}"
                .maybeValue=${null}
                nullable
                pattern="${patterns.normalizedString}"
            >
            </wizard-textfield>

            <footer>
                <md-text-button @click=${this.handleOnClickCancel}>
                    Cancel
                </md-text-button>
                <md-text-button trailing-icon type="submit" @click=${this.handleOnClickAdd}>
                    Add
                    <md-icon slot="icon" aria-hidden="true">add</md-icon>
                </md-text-button>
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

	`;

    private handleSubmit(event: FormDataEvent) {
        event.preventDefault()
        const form = event.target as HTMLFormElement
        const formData = new FormData(form)
        const values = formData.getAll('values')
        const id = formData.get('id') as string
        const desc = formData.get('desc') as string
        console.log({level:"dev", msg:"datype wizard::handleSubmit", values, id, desc})
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
    