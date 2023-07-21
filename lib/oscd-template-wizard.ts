import "./sub-wizards/datype-creator-wizard"
import {
	html,
	property,
	LitElement,
	css,
	state,
  } from 'lit-element';
import "./fonts/roboto-v27.css"
// import "./fonts/roboto-mono-v13.css"
// import "./icons/material-icons-outlined.css"
// import "./styles.css"

async function fetchTemplate(): Promise<Document>{
	const sourceURL = new URL(import.meta.url);
	console.log({level:"dev", url:import.meta.url, urlstr: String(sourceURL)} )
	const sourceOrigin = sourceURL.origin;
	
	const url = new URL("/templates.scd", sourceOrigin);
	const response = await fetch(url)
	const text = await response.text()
	const templates = new DOMParser().parseFromString(text, 'application/xml');
	

	return templates
}


export class OSCDTemplateWizard extends LitElement {

	
	@property() public tagName: string = "";
	@property() public element: Element | undefined
	@property() public parent: Element | undefined


	@state() private templates: Document = new Document();


	render() {
		return html`
			<form>
				<oscd-datype-creator-wizard 
					.templates=${this.templates} 
					.tagName=${this.tagName}
					.element=${this.element}
					.parent=${this.parent}
				>
				</oscd-datype-creator-wizard>
			</form>
		`;
	}

	async connectedCallback() {
		super.connectedCallback();
		this.templates = await fetchTemplate();
	}


	private static supportedTagNames = ["DAType", "DOType", "LNodeType", "EnumType"]
	public static canInspect(tagName: string): boolean {

		const isSupported = this.supportedTagNames.includes(tagName);
		return isSupported;
	}

	public static canCreate(tagName: string): boolean {
		const isSupported = this.supportedTagNames.includes(tagName);
		return isSupported
	}

	static styles = css`
		:host {
			color: blue;
		}
	`;
 
}

