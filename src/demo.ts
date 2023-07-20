// import { LitElement, css } from 'lit'
// import { customElement, property } from 'lit/decorators.js'
import {
    customElement,
    html,
    property,
    LitElement,
    css,
} from 'lit-element';
import { OSCDTemplateWizard } from "../lib/oscd-template-wizard.js";


/**
* An example element.
*
* @slot - This element has a slot
* @csspart button - The button
*/
@customElement('my-demo')
export class Demo extends LitElement {
    
    constructor() {
        super()
    }
    
    connectedCallback(): void {
        super.connectedCallback()
        window.customElements.define('oscd-template-wizard', OSCDTemplateWizard);
    }
    
    render() {
        return html`
        <form class="container">
            <form class="fake-dialog">
                <oscd-template-wizard></oscd-template-wizard>
            </form>
        </form>
        `
    }
    
    static styles = css`
        .container {
            width: 100vw;
            height: 100vh;
            display: grid;
            place-items: center;
        }

        .fake-dialog {
            width: 300px;
            display: inline-block
        }
    `
}

declare global {
    interface HTMLElementTagNameMap {
        'my-demo': Demo
    }
}
