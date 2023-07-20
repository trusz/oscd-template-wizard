import{a as s}from"./chunk-AY7I2SME-f06e2be0.js";import"./mwc-list-53c239a8.js";import"./wizard-select-6dca642e.js";import{x as n}from"./lit-element-2f716b0f.js";import"./mwc-line-ripple-directive-6ae2e907.js";import"./mwc-icon-12825248.js";const y={title:"Components/Wizard Select",tags:["autodocs"],render:e=>n`
        <wizard-textfield 
            .nullable=${e.nullable}
            .maybeValue=${e.maybeValue}
            .defaultValue=${e.defaultValue}
            .reservedValues=${e.reservedValues}
            @change=${s("change")}
        >
            ${u(e.noOfItems)}
        </wizard-textfield>
        `,argTypes:{noOfItems:{controlr:"number"},nullable:{control:"boolean"},maybeValue:{control:"text"},defaultValue:{control:"text"},reservedValues:{control:"array"}}},a={args:{noOfItems:5,nullable:!0,maybeValue:"",defaultValue:"",reservedValues:["_"]}};function u(e=5){return new Array(e).fill(0).map((c,o)=>o).map(m)}function m(e){return n`
        <mwc-list-item
            graphic="icon"
            hasMeta
            value="${e}"
        >
            <span>
                item ${e+1}
            </span>
            <span slot="meta">
                #${e}
            </span>
        </mwc-list-item>
    `}var r,t,l;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    noOfItems: 5,
    nullable: true,
    maybeValue: "",
    defaultValue: "",
    reservedValues: ["_"]
  }
}`,...(l=(t=a.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const $=["Primary"];export{a as Primary,$ as __namedExportsOrder,y as default};
//# sourceMappingURL=wizard-select.stories-67fb0ace.js.map
