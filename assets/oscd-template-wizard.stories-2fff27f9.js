import"./datype-creator-wizard-6758dba3.js";import{L as g,h as y,c as f,s as h,p as i}from"./mwc-list-002e6a0a.js";import"./mwc-button-0b9834cc.js";import{x}from"./lit-element-2f716b0f.js";import"./wizard-select-010cea3d.js";import"./mwc-line-ripple-directive-d5eeeeed.js";import"./mwc-icon-e38663fe.js";import"./wizard-textfield-e3da734d.js";var P=Object.defineProperty,N=Object.getOwnPropertyDescriptor,c=(o,t,a,s)=>{for(var e=s>1?void 0:s?N(t,a):t,p=o.length-1,m;p>=0;p--)(m=o[p])&&(e=(s?m(t,a,e):m(e))||e);return s&&e&&P(t,a,e),e};async function _(){const t=new URL(import.meta.url).origin,a=new URL("/templates.scd",t),e=await(await fetch(a)).text();return new DOMParser().parseFromString(e,"application/xml")}const l=class l extends g{constructor(){super(...arguments),this.tagName="",this.templates=new Document}render(){return y`
			<form>
				<oscd-datype-creator-wizard 
					.templates=${this.templates} 
					.tagName=${this.tagName}
					.element=${this.element}
					.parent=${this.parent}
				>
				</oscd-datype-creator-wizard>
			</form>
		`}async connectedCallback(){super.connectedCallback(),this.templates=await _()}static canInspect(t){return!0}static canCreate(t){return!0}};l.styles=f`
		:host {
			color: blue;
		}
	`;let r=l;c([i()],r.prototype,"tagName",2);c([i()],r.prototype,"element",2);c([i()],r.prototype,"parent",2);c([h()],r.prototype,"templates",2);const E={title:"Template Wizard",tags:["autodocs"],render:o=>{window.customElements.get("oscd-template-wizard")||window.customElements.define("oscd-template-wizard",r);const t=new DOMParser().parseFromString("<DataTypeTemplates></DataTypeTemplates>","text/html").body.firstChild;return x`
        <oscd-template-wizard 
            tagName="DAType"
            .parent=${t}
        >
        </oscd-template-wizard>
        `},argTypes:{}},n={args:{}};var d,u,w;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {}
}`,...(w=(u=n.parameters)==null?void 0:u.docs)==null?void 0:w.source}}};const R=["Primary"];export{n as Primary,R as __namedExportsOrder,E as default};
//# sourceMappingURL=oscd-template-wizard.stories-2fff27f9.js.map
