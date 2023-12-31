import type { Meta, StoryObj } from '@storybook/web-components';
import { withActions } from '@storybook/addon-actions/decorator';
import './datype-editor-wizard';
import {html} from "lit"
import { xml } from '../x/xml-tag';
import { get } from 'http';

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
    title: 'Sub Wziards / Data Attribute Type Editor',
    tags: ['autodocs'],
    render: (args) => {
		const templates = getMockTemplate();
		const element = getMockDAType();

        return html`
			<oscd-datype-editor-wizard 
				.templates=${templates} 
				.element=${element}
			>
			</oscd-datype-editor-wizard>
        `
    },
    argTypes: {
    },
	parameters: {
		actions: {
			handles: [
				'oscd-edit', 
				'oscd-wizard-finished',
			],
		},
	  },
	decorators: [withActions],
} satisfies Meta;

export default meta;
type Story = StoryObj;

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Primary: Story = {
    args: {
    },
};


function getMockTemplate(): Document{
	return xml`
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
}

function getMockDAType(): Document{
	return xml`
		<DAType id="OpenSCD_Cell2D" desc="A two dimensional cell">
			<BDA name="xStart" bType="FLOAT32" />
			<BDA name="xEnd" bType="FLOAT32" />
			<BDA name="yStart" bType="FLOAT32" />
			<BDA name="yEnd" bType="FLOAT32" />
		</DAType>
	`
}

