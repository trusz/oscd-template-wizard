import type { Meta, StoryObj } from '@storybook/web-components';
import { action } from '@storybook/addon-actions';
import './datype-wizard';
import {html} from "lit"

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
    title: 'Sub Wziards / Data Attribute Type',
    tags: ['autodocs'],
    render: (args) => {
		const templates = getMockTemplate();
        const parent = new DOMParser().parseFromString(args.parent, 'text/html').body.firstChild as HTMLElement;
		console.log({level:"dev", parent, templates})
        return html`
        <oscd-datype-wizard 
            .templates=${templates} 
            .tagName=${args.tagName}
            .parent=${parent}
            @oscd-edit=${action('oscd-edit')}
        >
        </oscd-datype-wizard>
        `
    },
    argTypes: {
        tagName: { control: 'text' },
        parent: { control: 'text' },
    },
} satisfies Meta;

export default meta;
type Story = StoryObj;

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Primary: Story = {
    args: {
        tagName:"DAType",
		parent: "<DataTypeTemplates></DataTypeTemplates>"
    },
};


function getMockTemplate(): Document{
	const xml = `
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
	`

	const document = new DOMParser().parseFromString(xml, 'application/xml')
	return document
}