import { LitElement, css, customElement } from "lit-element";
import { TemplateResult, html } from "lit-html";
import "../fonts/roboto-v27.css"


@customElement("wizard-card")
export class WizardCard extends LitElement {

	render(): TemplateResult {
		return html`
			<form class="container">
				<slot name="header" class="header"></slot>
				<slot class="content"></slot>
				<slot name="footer"></slot>
            </form>
		`
	}

    static styles = css`
        :host {
            font-family: "Roboto";

        }
        .container {
            display: grid;
            grid-template-rows: auto 1fr auto;
            gap: 1rem;
            height: 100%;
        }

        .header {
            font-family: "Roboto";
            border: red thin solid;
        }
        .content{
            text-overflow: ellipsis;
            overflow: auto;
            display: block;
        }
    
    
    `
}