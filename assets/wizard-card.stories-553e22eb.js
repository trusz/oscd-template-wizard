import"./mwc-list-002e6a0a.js";import"./mwc-button-0b9834cc.js";import{x as n}from"./lit-element-2f716b0f.js";import"./mwc-icon-e38663fe.js";const m={title:"Components/Wizard Card",tags:["autodocs"],render:t=>n`
        <form class="container" style=${`width: ${t.width}px; height: ${t.height}px;`}>
            <wizard-card>
                <h2 slot="header">
                    Quest: The Electromagnetic Odyssey
                </h2>
                <form>
                    Embark on a journey through the Electromagnetic Odyssey, 
                    where you'll decode the Resistor Maze, 
                    unlock the Capacitor Riddles, and unravel the Inductor Enigma. 
                    Master the Transistor Quest and decipher the Signal Cipher 
                    to uncover the wisdom of Professor Ohm. 
                    Conquer the Circuit Conundrum to become a 
                    legendary electrical engineer! Do you accept?
                </form>
                <form slot="footer" class="footer">
                    <mwc-button>Cancel</mwc-button>
                    <mwc-button outlined>Accept</mwc-button>
                </form>
            </wizard-card>
        </form>
        <style>
            .container{
                border: gray thin solid;
                border-radius: 4px;
                padding: 0.5rem;
            }
            .footer {
                display: flex;
                justify-content: flex-end;
                gap: 1em;
            }

        </style>
        `,argTypes:{width:{control:{type:"range",min:100,max:500,step:10}},height:{control:{type:"range",min:100,max:500,step:10}}}},e={args:{width:300,height:300}};var r,o,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    width: 300,
    height: 300
  }
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const h=["Primary"];export{e as Primary,h as __namedExportsOrder,m as default};
//# sourceMappingURL=wizard-card.stories-553e22eb.js.map
