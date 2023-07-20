import{p,c as h}from"./mwc-list-53c239a8.js";import{i as f,s as w,x as m}from"./lit-element-2f716b0f.js";import{p as d}from"./material-icons-outlined-508babe6.js";import"./wizard-select-6dca642e.js";import"./wizard-textfield-3d5471cf.js";import"./mwc-button-f23ee5f1.js";var y=Object.defineProperty,g=Object.getOwnPropertyDescriptor,o=(e,r,i,a)=>{for(var t=a>1?void 0:a?g(r,i):r,n=e.length-1,l;n>=0;n--)(l=e[n])&&(t=(a?l(r,i,t):l(t))||t);return a&&t&&y(r,i,t),t};const A="oscd-datype-creator-wizard",b=["LNodeType","DOType","DAType","EnumType"];function v(e,r,i){const a=e.createElementNS(e.documentElement.namespaceURI,r);return Object.entries(i).filter(([t,n])=>n!==null).forEach(([t,n])=>a.setAttribute(t,n)),a}let s=class extends w{constructor(){super(...arguments),this.tagName="",this.newId="",this.newDesc="",this.newValueTemplate=""}render(){return m`
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
                        @change=${c(this,"newValueTemplate")}
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
                        @input=${c(this,"newId")}
                    ></wizard-textfield>
                    
                    <wizard-textfield
                        label="desc"
                        name="desc"
                        helper="${"scl.desc"}"
                        nullable
                        pattern="${d.normalizedString}"
                        @input=${c(this,"newDesc")}
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
            
            `}renderValueListItems(){return Array.from(this.templates.querySelectorAll("DAType")).map(this.renderValueItem)}renderValueItem(e){var r;return m`
            <mwc-list-item
                graphic="icon"
                hasMeta
                value="${e.getAttribute("id")??""}"
            >
                <span>
                    ${(r=e.getAttribute("id"))==null?void 0:r.replace("OpenSCD_","")}
                </span>
                <span slot="meta">
                    ${e.querySelectorAll("BDA").length}
                </span>
            </mwc-list-item>
        `}emitDATypeCreation(){const e=this.makeDATypeCreationEvent(this.newId,this.newDesc,this.newValueTemplate);this.dispatchEvent(e)}makeDATypeCreationEvent(e,r,i){if(!this.parent)throw new Error("parent is required");if(this.tagName==="")throw new Error("tagName is required");if(!e)throw new Error("id is required");if(Array.from(this.templates.querySelectorAll(b.join(","))).some(u=>u.getAttribute("id")===e))throw new Error(`id '${e}' already exists`);let t=null,n=v(this.parent.ownerDocument,"DAType",{});i&&(t=this.templates.querySelector(`DAType[id="${i}"]`)),t&&(n=t.cloneNode(!0)),n.setAttribute("id",e),n.setAttribute("desc",r);const l={parent:this.parent,node:n};return new CustomEvent("oscd-edit",{detail:l,bubbles:!0,composed:!0})}handleOnClickCancel(){this.signalFinished()}handleOnClickAdd(){this.emitDATypeCreation(),this.signalFinished()}signalFinished(){const e=new CustomEvent("oscd-wizard-finished",{bubbles:!0,composed:!0});this.dispatchEvent(e)}};s.styles=f`
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

	`;o([p({type:Document})],s.prototype,"templates",2);o([p({type:String})],s.prototype,"tagName",2);o([p({type:Element})],s.prototype,"parent",2);s=o([h(A)],s);function c(e,r){return function(i){const a=i.target;e[r]=a.value}}
//# sourceMappingURL=datype-creator-wizard-151e9785.js.map
