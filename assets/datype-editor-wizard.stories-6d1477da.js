import{w as D}from"./decorator-441ecd30.js";import{p as u,c as A}from"./mwc-list-53c239a8.js";import{i as f,s as g,x as c}from"./lit-element-2f716b0f.js";import{p as d}from"./material-icons-outlined-508babe6.js";import"./wizard-select-6dca642e.js";import"./wizard-textfield-3d5471cf.js";import"./mwc-button-f23ee5f1.js";import"./chunk-AY7I2SME-f06e2be0.js";import"./index-d475d2ea.js";import"./mwc-line-ripple-directive-6ae2e907.js";import"./mwc-icon-12825248.js";var b=Object.defineProperty,x=Object.getOwnPropertyDescriptor,p=(e,t,a,i)=>{for(var r=i>1?void 0:i?x(t,a):t,n=e.length-1,l;n>=0;n--)(l=e[n])&&(r=(i?l(t,a,r):l(r))||r);return i&&r&&b(t,a,r),r};const v="oscd-datype-editor-wizard",E=["LNodeType","DOType","DAType","EnumType"];function C(e,t,a){const i=e.createElementNS(e.documentElement.namespaceURI,t);return Object.entries(a).filter(([r,n])=>n!==null).forEach(([r,n])=>i.setAttribute(r,n)),i}let s=class extends g{constructor(){super(...arguments),this.tagName="",this.newId="",this.newDesc="",this.newValueTemplate=""}render(){return c`
            <wizard-card>
                <h2 slot="header">Add DAType</h2>
                <div class="form">
                    <wizard-select
                        label="values"
                        name="values"
                        .maybeValue=${""}
                        required
                        icon="playlist_add_check"
                        maxlength="255"
                        minlength="1"
                        fixedMenuPosition
                        pattern="${d.nmToken}"
                        @change=${m(this,"newValueTemplate")}
                    >
                        ${this.renderValueListItems()}
                    </wizard-select>

                    <wizard-textfield
                        label="id"
                        name="id"
                        helper="${"scl.id"}"
                        required
                        maxlength="127"
                        minlength="1"
                        pattern="${d.nmToken}"
                        dialogInitialFocus
                        @input=${m(this,"newId")}
                    ></wizard-textfield>
                    
                    <wizard-textfield
                        label="desc"
                        name="desc"
                        helper="${"scl.desc"}"
                        nullable
                        pattern="${d.normalizedString}"
                        @input=${m(this,"newDesc")}
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
            
            `}renderValueListItems(){return Array.from(this.templates.querySelectorAll("DAType")).map(this.renderValueItem)}renderValueItem(e){var t;return c`
            <mwc-list-item
                graphic="icon"
                hasMeta
                value="${e.getAttribute("id")??""}"
            >
                <span>
                    ${(t=e.getAttribute("id"))==null?void 0:t.replace("OpenSCD_","")}
                </span>
                <span slot="meta">
                    ${e.querySelectorAll("BDA").length}
                </span>
            </mwc-list-item>
        `}emitDATypeCreation(){console.log({level:"dev",message:"prepping event",newId:this.newId,newDesc:this.newDesc,newValueTemplate:this.newValueTemplate});const e=this.makeDATypeCreationEvent(this.newId,this.newDesc,this.newValueTemplate);this.dispatchEvent(e)}makeDATypeCreationEvent(e,t,a){if(!this.parent)throw new Error("parent is required");if(this.tagName==="")throw new Error("tagName is required");if(!e)throw new Error("id is required");if(Array.from(this.templates.querySelectorAll(E.join(","))).some(w=>w.getAttribute("id")===e))throw new Error(`id '${e}' already exists`);let r=null,n=C(this.parent.ownerDocument,"DAType",{});a&&(r=this.templates.querySelector(`DAType[id="${a}"]`)),r&&(n=r.cloneNode(!0)),n.setAttribute("id",e),n.setAttribute("desc",t);const l={parent:this.parent,node:n};return new CustomEvent("oscd-edit",{detail:l,bubbles:!0,composed:!0})}handleOnClickCancel(){this.signalFinished()}handleOnClickAdd(){this.emitDATypeCreation(),this.signalFinished()}signalFinished(){const e=new CustomEvent("oscd-wizard-finished",{bubbles:!0,composed:!0});this.dispatchEvent(e)}};s.styles=f`
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

	`;p([u({type:Document})],s.prototype,"templates",2);p([u({type:String})],s.prototype,"tagName",2);p([u({type:Element})],s.prototype,"parent",2);s=p([A(v)],s);function m(e,t){return function(a){const i=a.target;e[t]=i.value}}const k={title:"Sub Wziards / Data Attribute Type Editor",tags:["autodocs"],render:e=>{const t=O(),a=new DOMParser().parseFromString(e.parent,"text/html").body.firstChild;return c`
            <oscd-datype-editor-wizard 
                .templates=${t} 
                .tagName=${e.tagName}
                .parent=${a}
            >
            </oscd-datype-editor-wizard>
        `},argTypes:{tagName:{control:"text"},parent:{control:"text"}},parameters:{actions:{handles:["oscd-edit","oscd-wizard-finished"]}},decorators:[D]},o={args:{tagName:"DAType",parent:"<DataTypeTemplates></DataTypeTemplates>"}};function O(){const e=`
    <SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B" release="4">
      <Header id="OpenSCD_DataTypeTemplates"/>
      <DataTypeTemplates>
        <DAType id="OpenSCD_Cell2D">
          <BDA name="xStart" bType="FLOAT32"/>
          <BDA name="xEnd" bType="FLOAT32"/>
          <BDA name="yStart" bType="FLOAT32"/>
          <BDA name="yEnd" bType="FLOAT32"/>
        </DAType>
        <DAType id="OpenSCD_Cell1D">
          <BDA name="xStart" bType="FLOAT32"/>
          <BDA name="xEnd" bType="FLOAT32"/>
        </DAType>
      </DataTypeTemplates>
    </SCL>	
    `;return new DOMParser().parseFromString(e,"application/xml")}var h,y,T;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    tagName: "DAType",
    parent: "<DataTypeTemplates></DataTypeTemplates>"
  }
}`,...(T=(y=o.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};const M=["Primary"];export{o as Primary,M as __namedExportsOrder,k as default};
//# sourceMappingURL=datype-editor-wizard.stories-6d1477da.js.map
