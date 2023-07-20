import"./datype-creator-wizard-151e9785.js";import{L as w,h,a as y,s as f,p as i}from"./mwc-list-53c239a8.js";import"./mwc-button-f23ee5f1.js";import{x}from"./lit-element-2f716b0f.js";import"./material-icons-outlined-508babe6.js";import"./wizard-select-6dca642e.js";import"./mwc-line-ripple-directive-6ae2e907.js";import"./mwc-icon-12825248.js";import"./wizard-textfield-3d5471cf.js";var b=Object.defineProperty,N=Object.getOwnPropertyDescriptor,p=(r,t,a,o)=>{for(var e=o>1?void 0:o?N(t,a):t,n=r.length-1,c;n>=0;n--)(c=r[n])&&(e=(o?c(t,a,e):c(e))||e);return o&&e&&b(t,a,e),e};async function P(){const t=new URL(import.meta.url).origin,a=new URL("/templates.scd",t),e=await(await fetch(a)).text();return new DOMParser().parseFromString(e,"application/xml")}const l=class l extends w{constructor(){super(...arguments),this.tagName="",this.templates=new Document}render(){return h`
			<form>
				<oscd-datype-wizard 
					.templates=${this.templates} 
					.tagName=${this.tagName}
					.element=${this.element}
					.parent=${this.parent}
				>
				</oscd-datype-wizard>
			</form>
		`}async connectedCallback(){super.connectedCallback(),this.templates=await P()}static canInspect(t){return!0}static canCreate(t){return!0}};l.styles=y`
		:host {
			color: blue;
		}
	`;let s=l;p([i()],s.prototype,"tagName",2);p([i()],s.prototype,"element",2);p([i()],s.prototype,"parent",2);p([f()],s.prototype,"templates",2);const R={title:"Template Wizard",tags:["autodocs"],render:r=>{window.customElements.get("oscd-template-wizard")||window.customElements.define("oscd-template-wizard",s);const t=new DOMParser().parseFromString(r.parent,"text/html").body.firstChild,a=new DOMParser().parseFromString(r.element,"text/html").body.firstChild;return x`
        <oscd-template-wizard 
            .tagName=${r.tagName} 
            .parent=${t}
            .element=${a}
        >
        </oscd-template-wizard>
        `},argTypes:{tagName:{control:"text"},parent:{control:"text"},backgroundColor:{control:"color"},onClick:{action:"onClick"},size:{control:{type:"select"},options:["small","medium","large"]}}},m={args:{primary:!0,label:"Template Wizard"}};var d,u,g;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Template Wizard'
  }
}`,...(g=(u=m.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const U=["Primary"];export{m as Primary,U as __namedExportsOrder,R as default};
//# sourceMappingURL=oscd-template-wizard.stories-04f0a5f2.js.map
