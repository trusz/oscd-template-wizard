import type { Meta, StoryObj } from '@storybook/web-components';
import "@material/mwc-list";
import "./wizard-select.js";
import {html, TemplateResult} from "lit";

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
    title: 'Components/Wizard Select',
    tags: ['autodocs'],
    render: (args) => {
        return html`
        <wizard-select 
            .nullable=${args.nullable}
			.maybeValue=${args.maybeValue}
			.defaultValue=${args.defaultValue}
			.reservedValues=${args.reservedValues}
        >
            ${renderItems(10)}
        </wizard-select>
        `
    },
    argTypes: {
        nullable: { control: "boolean" },
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
        maybeValue: "",
        defaultValue: "",
        reservedValues: ["_"],
    },
};


function renderItems(nrOfItems = 5): TemplateResult[] {
    return new Array(nrOfItems)
        .fill(0)
        .map((_, i) => i)
        .map(renderItem)
}

function renderItem(index:number): TemplateResult {
    return html`
        <mwc-list-item
            graphic="icon"
            hasMeta
            value="${index}"
        >
            <span>
                item ${index+1}
            </span>
            <span slot="meta">
                #${index}
            </span>
        </mwc-list-item>
    `
}