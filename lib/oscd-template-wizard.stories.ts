import type { Meta, StoryObj } from '@storybook/web-components';
import { OSCDTemplateWizard } from './oscd-template-wizard';
import {html} from "lit"

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
    title: 'Template Wizard',
    tags: ['autodocs'],
    render: (args) => {
        if(!window.customElements.get('oscd-template-wizard')){
            window.customElements.define('oscd-template-wizard', OSCDTemplateWizard);
        }
        const parent = new DOMParser().parseFromString("<DataTypeTemplates></DataTypeTemplates>", 'text/html').body.firstChild as HTMLElement;
        return html`
        <oscd-template-wizard 
            tagName="DAType"
            .parent=${parent}
        >
        </oscd-template-wizard>
        `
    },
    argTypes: {
    },
} satisfies Meta;

export default meta;
type Story = StoryObj;

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Primary: Story = {
    args: {
    },
};