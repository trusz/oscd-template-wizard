import{p,a as f}from"./mwc-list-002e6a0a.js";import{i as w,s as y,x as u}from"./lit-element-2f716b0f.js";import"./wizard-select-010cea3d.js";import"./wizard-textfield-e3da734d.js";import"./mwc-button-0b9834cc.js";const A="[:_A-Za-z]|[À-Ö]|[Ø-ö]|[ø-˿]|[Ͱ-ͽ]|[Ϳ-῿]|[‌-‍]|[⁰-↏]|[Ⰰ-⿯]|[、-퟿]|[豈-﷏]|[ﷰ-�]",g=A+"|[.0-9\\-]|·|[̀-ͯ]|[‿-⁀]",c="("+g+")+",d={string:`([	-
]|[\r]|[ -~]|[]|[ -퟿]|[-�])*`,normalizedString:"([ -~]|[]|[ -퟿]|[-�])*",name,nmToken:c,names:name+"( "+name+")*",nmTokens:c+"( "+c+")*",decimal:"[+\\-]?[0-9]+(([.][0-9]*)?|([.][0-9]+))",unsigned:"[+]?[0-9]+(([.][0-9]*)?|([.][0-9]+))",integer:"[+\\-]?[0-9]+([0-9]*)",alphanumericFirstUpperCase:"[A-Z][0-9,A-Z,a-z]*",alphanumericFirstLowerCase:"[a-z][0-9,A-Z,a-z]*",lnClass:"(LLN0)|[A-Z]{4,4}"};var b=Object.defineProperty,T=Object.getOwnPropertyDescriptor,o=(e,n,i,a)=>{for(var t=a>1?void 0:a?T(n,i):n,r=e.length-1,l;r>=0;r--)(l=e[r])&&(t=(a?l(n,i,t):l(t))||t);return a&&t&&b(n,i,t),t};const v="oscd-datype-creator-wizard",D=["LNodeType","DOType","DAType","EnumType"];function C(e,n,i){const a=e.createElementNS(e.documentElement.namespaceURI,n);return Object.entries(i).filter(([t,r])=>r!==null).forEach(([t,r])=>a.setAttribute(t,r)),a}let s=class extends y{constructor(){super(...arguments),this.tagName="",this.newId="",this.newDesc="",this.newValueTemplate=""}render(){return u`
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
            
            `}renderValueListItems(){return Array.from(this.templates.querySelectorAll("DAType")).map(this.renderValueItem)}renderValueItem(e){var n;return u`
            <mwc-list-item
                graphic="icon"
                hasMeta
                value="${e.getAttribute("id")??""}"
            >
                <span>
                    ${(n=e.getAttribute("id"))==null?void 0:n.replace("OpenSCD_","")}
                </span>
                <span slot="meta">
                    ${e.querySelectorAll("BDA").length}
                </span>
            </mwc-list-item>
        `}emitDATypeCreation(){const e=this.makeDATypeCreationEvent(this.newId,this.newDesc,this.newValueTemplate);this.dispatchEvent(e)}makeDATypeCreationEvent(e,n,i){if(!this.parent)throw new Error("parent is required");if(this.tagName==="")throw new Error("tagName is required");if(!e)throw new Error("id is required");if(Array.from(this.templates.querySelectorAll(D.join(","))).some(h=>h.getAttribute("id")===e))throw new Error(`id '${e}' already exists`);let t=null,r=C(this.parent.ownerDocument,"DAType",{});i&&(t=this.templates.querySelector(`DAType[id="${i}"]`)),t&&(r=t.cloneNode(!0)),r.setAttribute("id",e),r.setAttribute("desc",n);const l={parent:this.parent,node:r};return new CustomEvent("oscd-edit",{detail:l,bubbles:!0,composed:!0})}handleOnClickCancel(){this.signalFinished()}handleOnClickAdd(){this.emitDATypeCreation(),this.signalFinished()}signalFinished(){const e=new CustomEvent("oscd-wizard-finished",{bubbles:!0,composed:!0});this.dispatchEvent(e)}};s.styles=w`
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

	`;o([p({type:Document})],s.prototype,"templates",2);o([p({type:String})],s.prototype,"tagName",2);o([p({type:Element})],s.prototype,"parent",2);s=o([f(v)],s);function m(e,n){return function(i){const a=i.target;e[n]=a.value}}
//# sourceMappingURL=datype-creator-wizard-6758dba3.js.map
