import {
    css,
    customElement,
    html,
    internalProperty,
    property,
    query,
    TemplateResult,
} from 'lit-element';

import '@material/mwc-switch';
import { Switch } from '@material/mwc-switch';
import { Select } from '@material/mwc-select';

// The component has been copied over from open-scd
/** 
 * A potentially `nullable` `Select`.
 *
 * NB: Use `maybeValue: string | null` instead of `value` if `nullable`!
 * 
 */
@customElement('wizard-select')
export class WizardSelect extends Select {
    /** 
     * Whether [[`maybeValue`]] may be `null` 
     * Display a toggle to switch between `null` and `value`.
     */
    @property({ type: Boolean }) nullable = false;

    /** 
     * Replacement for `value`, can only be `null` if [[`nullable`]]. 
     * 
     */
    @property({ type: String })
    get maybeValue(): string | null {
        if(this.null) {
            return null;
        }
        return this.value
    }
    set maybeValue(value: string | null) {
        if (value === null) {
            this.null = true;
        }else {
            this.null = false;
            this.value = value;
        }
    }

    /** The default `value` displayed if [[`maybeValue`]] is `null`. */
    @property({ type: String }) defaultValue = '';

    /** Additional values that cause validation to fail. */
    @property({ type: Array }) reservedValues: string[] = [];
    
    // FIXME: workaround to allow disable of the whole component - need basic refactor
    private disabledSwitch = false;
    
    @query('mwc-switch') private nullSwitch?: Switch;
    
    private nulled: string | null = null;

    private isNull = false;
    @internalProperty()
    private get null(): boolean {
        return this.nullable && this.isNull;
    }
    private set null(value: boolean) {
        if (!this.nullable || value === this.isNull) return;
        this.isNull = value;
        if (this.null) this.disable();
        else this.enable();
    }

    constructor() {
        super();   
        this.disabledSwitch = this.hasAttribute('disabled');
    }

    render(): TemplateResult {
        return super.render()

        return html`
            <form style="display: flex; flex-direction: row;">
                <form style="flex: auto;">
                    ${super.render()}
                </form>
                <form style="display: flex; align-items: center; height: 56px;">
                    ${this.renderSwitch()}
                </form>
            </form>
        `;
    }

    renderSwitch(): TemplateResult {
        if(!this.nullable){
            return html``;
        }

        return html`
        <mwc-switch
            style="margin-left: 12px;"
            ?checked=${!this.null}
            ?disabled=${this.disabledSwitch}
            @change=${() => {
                this.null = !this.nullSwitch!.checked;
            }}
        >
        </mwc-switch>`;
    }

    // static styles = css`
    //     .container{
    //         display: flex;
    //         flex-direction: row;
    //     }
    // `
    
    private enable(): void {
        if (this.nulled === null) { return };
        this.value = this.nulled;
        this.nulled = null;
        this.disabled = false;
    }
    
    private disable(): void {
        if (this.nulled !== null) { return };
        this.nulled = this.value;
        this.value = this.defaultValue;
        this.disabled = true;
    }
    
    async firstUpdated(): Promise<void> {
        await super.firstUpdated();
    }
    
    checkValidity(): boolean {
        if (this.nullable && !this.nullSwitch?.checked) {
            return true
        };

        return super.checkValidity();
    }
    
}
