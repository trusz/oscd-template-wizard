import {
    customElement,
    html,
    internalProperty,
    property,
    query,
    TemplateResult,
} from 'lit-element';


import '@material/mwc-icon-button';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-menu';
import '@material/mwc-switch';
import { IconButton } from '@material/mwc-icon-button';
import { Menu } from '@material/mwc-menu';
import { SingleSelectedEvent } from '@material/mwc-list/mwc-list-foundation';
import { Switch } from '@material/mwc-switch';
import { TextField } from '@material/mwc-textfield';

/** 
* A potentially `nullable` `TextField` that allows for selection of an SI
* `multiplier` if an SI `unit` is given.
*
* NB: Use `maybeValue: string | null` instead of `value` if `nullable`!
* */
@customElement('wizard-textfield')
export class WizardTextField extends TextField {
    /** 
     * Whether [[`maybeValue`]] may be `null` 
     */
    @property({ type: Boolean }) nullable = false;
    
    /** 
     * Selectable SI multipliers for a non-empty [[`unit`]]. 
     */
    @property({ type: Array }) multipliers = [null, ''];
    @property({ type: String })
    get multiplier(): string | null {
        if (this.unit === '') {
            return null;
        }
        return (
            this.multipliers[this.multiplierIndex] ?? this.multipliers[0] ?? null
        );
    }
    set multiplier(value: string | null) {
        const index = this.multipliers.indexOf(value);
        if (index >= 0) {
            this.multiplierIndex = index;
        }
        this.suffix = (this.multiplier ?? '') + this.unit;
    }
        
    /** 
     * SI Unit, must be non-empty to allow for selecting a [[`multiplier`]].
     * Overrides `suffix`. 
     */
    @property({ type: String }) unit = '';
        
    /** 
     * Replacement for `value`, can only be `null` if [[`nullable`]]. 
     */
    @property({ type: String }) get maybeValue(): string | null {
        return this.null ? null : this.value;
    }
    set maybeValue(value: string | null) {
        if (value === null) {
            this.null = true;
        } else {
            this.null = false;
            this.value = value;
        }
    }
        
    /** 
     * The default `value` displayed if [[`maybeValue`]] is `null`. 
     */
    @property({ type: String }) defaultValue = '';
    
    /** 
     * Additional values that cause validation to fail. 
     */
    @property({ type: Array }) reservedValues: string[] = [];
    
    // FIXME: workaround to allow disable of the whole component - need basic refactor
    private disabledSwitch = false;
    private nulled: string | null = null;
    private multiplierIndex = 0;
    
    @query('mwc-switch') nullSwitch?: Switch;
    @query('mwc-menu') multiplierMenu?: Menu;
    @query('mwc-icon-button') multiplierButton?: IconButton | null


    private isNull = false;
    @internalProperty() private get null(): boolean {
        return this.nullable && this.isNull;
    }
        
    private set null(value: boolean) {
        if (!this.nullable || value === this.isNull) { return; }
        
        this.isNull = value;

        if (this.null) { 
            this.disable(); 
        }else { 
            this.enable(); 
        }
    }


        
    constructor() {
        super();
        
        this.disabledSwitch = this.hasAttribute('disabled');
    }

    // 
    // Rendering
    // 
    render(): TemplateResult {
        return html`
            <div style="display: flex; flex-direction: row;">
                <div style="flex: auto;">
                    ${super.render()}
                </div>
                ${this.renderUnitSelector()}
                <div style="display: flex; align-items: center; height: 56px;">
                    ${this.renderSwitch()}
                </div>
            </div>
        `;
    }

    renderUnitSelector(): TemplateResult {
        const hasMultiplierAndUnit = this.multipliers.length && this.unit
        if(!hasMultiplierAndUnit){
            return html``;
        }

        // we cast `this.multiplierButton` because in typing there is a small difference
        // between `null` and `undefined` but it does not matter for us
        return html`
            <form style="position:relative;">
                <mwc-icon-button
                    style="margin:5px;"
                    icon="more"
                    ?disabled=${this.null || this.disabledSwitch}
                    @click=${() => this.multiplierMenu?.show()}
                ></mwc-icon-button>
                <mwc-menu
                    @selected=${this.selectMultiplier}
                    fixed
                    .anchor=${this.multiplierButton as (HTMLElement | null) }
                >
                    ${this.renderMulplierList()}
                </mwc-menu
            >
            </form>
        `;
    }
        
    // TODO: extract mwc-list-item generation
    renderMulplierList(): TemplateResult {

        return html`
            ${this.multipliers.map( multiplier =>{
                const selected = multiplier === this.multiplier
                let text = multiplier
                const hasMultiplier = multiplier !== null
                if(!hasMultiplier){
                    text = translate('textfield.noMultiplier')
                }

                return html`
                    <mwc-list-item ?selected=${selected}>
                        ${text}
                    </mwc-list-item>
                `
            }
        )}`;
    }

                   
    renderSwitch(): TemplateResult {
        if(!this.nullable){
            return html``
        }

        return html`
            <mwc-switch
                style="margin-left: 12px;"
                ?checked=${!this.null}
                ?disabled=${this.disabledSwitch}
                @change=${() => { this.null = !this.nullSwitch!.checked; }}
            >
            </mwc-switch>
        `;
    }

    // 
    // Internals
    // 
    
    private selectMultiplier(se: SingleSelectedEvent): void {
        this.multiplier = this.multipliers[se.detail.index];
    }
    
    private enable(): void {
        if (this.nulled === null) { return };
        this.value = this.nulled;
        this.nulled = null;
        this.helperPersistent = false;
        this.disabled = false;
    }
    
    private disable(): void {
        if (this.nulled !== null) { return };
        this.nulled = this.value;
        this.value = this.defaultValue;
        this.helperPersistent = true;
        this.disabled = true;
    }
    
    async firstUpdated(): Promise<void> {
        await super.firstUpdated();
        if (this.multiplierMenu){
            // we cast the element because in typing there is a small difference
            // between `null` and `undefined` but it does not matter for us
           this.multiplierMenu.anchor = this.multiplierButton as (HTMLElement | null)
        }
    }
        
    checkValidity(): boolean {
        const hasSomeValue = this.reservedValues?.some(array => array === this.value)
        if (hasSomeValue){
            this.setCustomValidity(get('textfield.unique'));
            return false;
        }
        this.setCustomValidity(''); //Reset. Otherwise super.checkValidity always false
        return super.checkValidity();
    }
        

 
                
   
}
                
// TODO: replace this with something real
function translate(str: string): string {
    return str
}
        
// TODO: replace this with something real
function get(str: string): string {
    return str
}