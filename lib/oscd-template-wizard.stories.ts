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
        const parent = new DOMParser().parseFromString(args.parent, 'text/html').body.firstChild as HTMLElement;
        const element = new DOMParser().parseFromString(args.element, 'text/html').body.firstChild as HTMLElement;
        return html`
        <oscd-template-wizard 
            .tagName=${args.tagName} 
            .parent=${parent}
            .element=${element}
        >
        </oscd-template-wizard>
        `
    },
    argTypes: {
        tagName: { control: 'text' },
        parent: { control: 'text' },
        backgroundColor: { control: 'color' },
        onClick: { action: 'onClick' },
        size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
        },
    },
} satisfies Meta;

export default meta;
type Story = StoryObj;

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Primary: Story = {
    args: {
        primary: true,
        label: 'Template Wizard',
    },
};