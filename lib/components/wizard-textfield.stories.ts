import type { Meta, StoryObj } from '@storybook/web-components';
import { action } from '@storybook/addon-actions';
import "@material/mwc-list";
import "./wizard-textfield";
import {html, TemplateResult} from "lit";

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
    title: 'Components/Wizard Textfield',
    tags: ['autodocs'],
    render: (args) => {
        return html`
        <wizard-textfield 
            .nullable=${args.nullable}
			.multipliers=${args.multipliers}
			.multiplier=${args.multiplier}
			.unit=${args.unit}
			.maybeValue=${args.maybeValue}
			.defaultValue=${args.defaultValue}
			.reservedValues=${args.reservedValues}

            @change=${action('change')}
            @input=${action('input')}
        >
        </wizard-textfield>
        `
    },
    argTypes: {
        nullable: { control: "boolean" },
        multipliers: {control: "array"},
		multiplier: {control: "text"},
		unit: { control :"text" },
		maybeValue: { control: "text" },
		defaultValue: { control: "text" },
		reservedValues: { control: "array" },
    },
 
} satisfies Meta;

export default meta;
type Story = StoryObj;

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Primary: Story = {
    args: {
        nullable: true,
        multipliers: [null, ''],
		multiplier: null,
		unit: "",
		maybeValue: "",
		defaultValue: "",
		reservedValues: ["_"],
    },
};
