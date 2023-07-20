import type { Meta, StoryObj } from '@storybook/web-components';
import { action } from '@storybook/addon-actions';
import "@material/mwc-list";
import "./wizard-card.js";
import "@material/mwc-button"
import {html, TemplateResult} from "lit";

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
    title: 'Components/Wizard Card',
    tags: ['autodocs'],
    render: (args) => {
        return html`
		<form class="container" style=${`width: ${args.width}px; height: ${args.height}px;`}>
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
        `
    },
    argTypes: {
		width: {control:{ type: 'range', min: 100, max: 500, step: 10 }},
		height: {control: { type: 'range', min: 100, max: 500, step: 10 }},
    },
 
} satisfies Meta;

export default meta;
type Story = StoryObj;

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Primary: Story = {
    args: {
		width: 300,
		height: 300,
    },
};
