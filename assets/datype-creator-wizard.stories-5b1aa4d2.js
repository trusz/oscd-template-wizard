import{w as m}from"./decorator-441ecd30.js";import"./datype-creator-wizard-151e9785.js";import{x as s}from"./lit-element-2f716b0f.js";import"./chunk-AY7I2SME-f06e2be0.js";import"./index-d475d2ea.js";import"./mwc-list-53c239a8.js";import"./material-icons-outlined-508babe6.js";import"./wizard-select-6dca642e.js";import"./mwc-line-ripple-directive-6ae2e907.js";import"./mwc-icon-12825248.js";import"./wizard-textfield-3d5471cf.js";import"./mwc-button-f23ee5f1.js";const w={title:"Sub Wziards / Data Attribute Type Creator",tags:["autodocs"],render:e=>{const a=i(),n=new DOMParser().parseFromString(e.parent,"text/html").body.firstChild;return s`
            <oscd-datype-creator-wizard 
                .templates=${a} 
                .tagName=${e.tagName}
                .parent=${n}
            >
            </oscd-datype-creator-wizard>
        `},argTypes:{tagName:{control:"text"},parent:{control:"text"}},parameters:{actions:{handles:["oscd-edit","oscd-wizard-finished"]}},decorators:[m]},t={args:{tagName:"DAType",parent:"<DataTypeTemplates></DataTypeTemplates>"}};function i(){const e=`
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
    `;return new DOMParser().parseFromString(e,"application/xml")}var r,p,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    tagName: "DAType",
    parent: "<DataTypeTemplates></DataTypeTemplates>"
  }
}`,...(o=(p=t.parameters)==null?void 0:p.docs)==null?void 0:o.source}}};const C=["Primary"];export{t as Primary,C as __namedExportsOrder,w as default};
//# sourceMappingURL=datype-creator-wizard.stories-5b1aa4d2.js.map
