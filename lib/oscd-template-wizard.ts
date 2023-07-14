import {LitElement, css, html} from 'lit';
import "./sub-wizards/datype-wizard"
import { state } from 'lit/decorators.js';

async function fetchTemplate(): Promise<Document>{
	const sourceURL = new URL(import.meta.url);
	const sourceOrigin = sourceURL.origin;
	console.log({level:"dev", msg:"template wizard::fetchTemplate", sourceOrigin})
	
	const url = new URL("/templates.scd", sourceOrigin);
	const response = await fetch(url)
	const text = await response.text()
	const templates = new DOMParser().parseFromString(text, 'application/xml');
	
	console.log({level:"dev", msg:"template wizard::fetchTemplate", url, templates})

	return templates
}


export class OSCDTemplateWizard extends LitElement {

	@state()
	private templates: Document = new Document();

	render() {
		console.log({level:"dev", msg:"template wizard::render", url: import.meta.url})
		return html`
			<div>
				<oscd-datype-wizard .templates=${this.templates}></oscd-datype-wizard>
			</div>
		`;
	}

	async connectedCallback() {
		super.connectedCallback();
		this.templates = await fetchTemplate();
	}


	public static canInspect(tagName: string): boolean {
		console.log({level:"dev", msg:"template wizard::can inspect",  tagName})

		return true;
	}

	public static canCreate(tagName: string): boolean {
		console.log({level:"dev", msg:"template wizard::can create",  tagName})

		return true;
	}

	static styles = css`
		:host {
			color: blue;
		}
	`;
 
}

