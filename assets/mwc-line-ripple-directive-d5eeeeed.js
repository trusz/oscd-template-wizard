import{v as k,g as S,i as f,M as L,_ as s,s as O,p as a,o as g,q as A,d as ct,e as tt,R as lt,l as et,h as M,j as X,c as $,a as z,b as it,t as ut,w as ht,x as pt,y as mt,z as Y,u as ft,N as gt,E as yt,B as bt,P as nt,A as Et}from"./mwc-list-002e6a0a.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function vt(n,t,e){const i=n.constructor;if(!e){const l=`__${t}`;if(e=i.getPropertyDescriptor(t,l),!e)throw new Error("@ariaProperty must be used after a @property decorator")}const o=e;let r="";if(!o.set)throw new Error(`@ariaProperty requires a setter for ${t}`);const d={configurable:!0,enumerable:!0,set(l){r===""&&(r=i.getPropertyOptions(t).attribute),this.hasAttribute(r)&&this.removeAttribute(r),o.set.call(this,l)}};return o.get&&(d.get=function(){return o.get.call(this)}),d}function ot(n,t,e){if(t!==void 0)return vt(n,t,e);throw new Error("@ariaProperty only supports TypeScript Decorators")}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class st extends k{click(){this.formElement&&(this.formElement.focus(),this.formElement.click())}setAriaLabel(t){this.formElement&&this.formElement.setAttribute("aria-label",t)}firstUpdated(){super.firstUpdated(),this.shadowRoot&&this.mdcRoot.addEventListener("change",t=>{this.dispatchEvent(new Event("change",t))})}}st.shadowRootOptions={mode:"open",delegatesFocus:!0};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var N={CHECKED:"mdc-switch--checked",DISABLED:"mdc-switch--disabled"},J={ARIA_CHECKED_ATTR:"aria-checked",NATIVE_CONTROL_SELECTOR:".mdc-switch__native-control",RIPPLE_SURFACE_SELECTOR:".mdc-switch__thumb-underlay"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Tt=function(n){S(t,n);function t(e){return n.call(this,f(f({},t.defaultAdapter),e))||this}return Object.defineProperty(t,"strings",{get:function(){return J},enumerable:!1,configurable:!0}),Object.defineProperty(t,"cssClasses",{get:function(){return N},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNativeControlChecked:function(){},setNativeControlDisabled:function(){},setNativeControlAttr:function(){}}},enumerable:!1,configurable:!0}),t.prototype.setChecked=function(e){this.adapter.setNativeControlChecked(e),this.updateAriaChecked(e),this.updateCheckedStyling(e)},t.prototype.setDisabled=function(e){this.adapter.setNativeControlDisabled(e),e?this.adapter.addClass(N.DISABLED):this.adapter.removeClass(N.DISABLED)},t.prototype.handleChange=function(e){var i=e.target;this.updateAriaChecked(i.checked),this.updateCheckedStyling(i.checked)},t.prototype.updateCheckedStyling=function(e){e?this.adapter.addClass(N.CHECKED):this.adapter.removeClass(N.CHECKED)},t.prototype.updateAriaChecked=function(e){this.adapter.setNativeControlAttr(J.ARIA_CHECKED_ATTR,""+!!e)},t}(L);const _t=Tt;class b extends st{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.shouldRenderRipple=!1,this.mdcFoundationClass=_t,this.rippleHandlers=new lt(()=>(this.shouldRenderRipple=!0,this.ripple))}changeHandler(t){this.mdcFoundation.handleChange(t),this.checked=this.formElement.checked}createAdapter(){return Object.assign(Object.assign({},et(this.mdcRoot)),{setNativeControlChecked:t=>{this.formElement.checked=t},setNativeControlDisabled:t=>{this.formElement.disabled=t},setNativeControlAttr:(t,e)=>{this.formElement.setAttribute(t,e)}})}renderRipple(){return this.shouldRenderRipple?M`
        <mwc-ripple
          .accent="${this.checked}"
          .disabled="${this.disabled}"
          unbounded>
        </mwc-ripple>`:""}focus(){const t=this.formElement;t&&(this.rippleHandlers.startFocus(),t.focus())}blur(){const t=this.formElement;t&&(this.rippleHandlers.endFocus(),t.blur())}render(){return M`
      <div class="mdc-switch">
        <div class="mdc-switch__track"></div>
        <div class="mdc-switch__thumb-underlay">
          ${this.renderRipple()}
          <div class="mdc-switch__thumb">
            <input
              type="checkbox"
              id="basic-switch"
              class="mdc-switch__native-control"
              role="switch"
              aria-label="${X(this.ariaLabel)}"
              aria-labelledby="${X(this.ariaLabelledBy)}"
              @change="${this.changeHandler}"
              @focus="${this.handleRippleFocus}"
              @blur="${this.handleRippleBlur}"
              @mousedown="${this.handleRippleMouseDown}"
              @mouseenter="${this.handleRippleMouseEnter}"
              @mouseleave="${this.handleRippleMouseLeave}"
              @touchstart="${this.handleRippleTouchStart}"
              @touchend="${this.handleRippleDeactivate}"
              @touchcancel="${this.handleRippleDeactivate}">
          </div>
        </div>
      </div>`}handleRippleMouseDown(t){const e=()=>{window.removeEventListener("mouseup",e),this.handleRippleDeactivate()};window.addEventListener("mouseup",e),this.rippleHandlers.startPress(t)}handleRippleTouchStart(t){this.rippleHandlers.startPress(t)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}s([a({type:Boolean}),g(function(n){this.mdcFoundation.setChecked(n)})],b.prototype,"checked",void 0);s([a({type:Boolean}),g(function(n){this.mdcFoundation.setDisabled(n)})],b.prototype,"disabled",void 0);s([ot,a({attribute:"aria-label"})],b.prototype,"ariaLabel",void 0);s([ot,a({attribute:"aria-labelledby"})],b.prototype,"ariaLabelledBy",void 0);s([A(".mdc-switch")],b.prototype,"mdcRoot",void 0);s([A("input")],b.prototype,"formElement",void 0);s([ct("mwc-ripple")],b.prototype,"ripple",void 0);s([O()],b.prototype,"shouldRenderRipple",void 0);s([tt({passive:!0})],b.prototype,"handleRippleMouseDown",null);s([tt({passive:!0})],b.prototype,"handleRippleTouchStart",null);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */const Ct=$`.mdc-switch__thumb-underlay{left:-14px;right:initial;top:-17px;width:48px;height:48px}[dir=rtl] .mdc-switch__thumb-underlay,.mdc-switch__thumb-underlay[dir=rtl]{left:initial;right:-14px}.mdc-switch__native-control{width:64px;height:48px}.mdc-switch{display:inline-block;position:relative;outline:none;user-select:none}.mdc-switch.mdc-switch--checked .mdc-switch__track{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-switch.mdc-switch--checked .mdc-switch__thumb{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__track{background-color:#000;background-color:var(--mdc-theme-on-surface, #000)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb{background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-color:#fff;border-color:var(--mdc-theme-surface, #fff)}.mdc-switch__native-control{left:0;right:initial;position:absolute;top:0;margin:0;opacity:0;cursor:pointer;pointer-events:auto;transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-switch__native-control,.mdc-switch__native-control[dir=rtl]{left:initial;right:0}.mdc-switch__track{box-sizing:border-box;width:36px;height:14px;border:1px solid transparent;border-radius:7px;opacity:.38;transition:opacity 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),border-color 90ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch__thumb-underlay{display:flex;position:absolute;align-items:center;justify-content:center;transform:translateX(0);transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),border-color 90ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch__thumb{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);box-sizing:border-box;width:20px;height:20px;border:10px solid;border-radius:50%;pointer-events:none;z-index:1}.mdc-switch--checked .mdc-switch__track{opacity:.54}.mdc-switch--checked .mdc-switch__thumb-underlay{transform:translateX(16px)}[dir=rtl] .mdc-switch--checked .mdc-switch__thumb-underlay,.mdc-switch--checked .mdc-switch__thumb-underlay[dir=rtl]{transform:translateX(-16px)}.mdc-switch--checked .mdc-switch__native-control{transform:translateX(-16px)}[dir=rtl] .mdc-switch--checked .mdc-switch__native-control,.mdc-switch--checked .mdc-switch__native-control[dir=rtl]{transform:translateX(16px)}.mdc-switch--disabled{opacity:.38;pointer-events:none}.mdc-switch--disabled .mdc-switch__thumb{border-width:1px}.mdc-switch--disabled .mdc-switch__native-control{cursor:default;pointer-events:none}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent}`;let j=class extends b{};j.styles=[Ct];j=s([z("mwc-switch")],j);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ot={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"},Z={NOTCH_ELEMENT_PADDING:8},At={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"};/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var wt=function(n){S(t,n);function t(e){return n.call(this,f(f({},t.defaultAdapter),e))||this}return Object.defineProperty(t,"strings",{get:function(){return Ot},enumerable:!1,configurable:!0}),Object.defineProperty(t,"cssClasses",{get:function(){return At},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return Z},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!1,configurable:!0}),t.prototype.notch=function(e){var i=t.cssClasses.OUTLINE_NOTCHED;e>0&&(e+=Z.NOTCH_ELEMENT_PADDING),this.adapter.setNotchWidthProperty(e),this.adapter.addClass(i)},t.prototype.closeNotch=function(){var e=t.cssClasses.OUTLINE_NOTCHED;this.adapter.removeClass(e),this.adapter.removeNotchWidthProperty()},t}(L);class B extends k{constructor(){super(...arguments),this.mdcFoundationClass=wt,this.width=0,this.open=!1,this.lastOpen=this.open}createAdapter(){return{addClass:t=>this.mdcRoot.classList.add(t),removeClass:t=>this.mdcRoot.classList.remove(t),setNotchWidthProperty:t=>this.notchElement.style.setProperty("width",`${t}px`),removeNotchWidthProperty:()=>this.notchElement.style.removeProperty("width")}}openOrClose(t,e){this.mdcFoundation&&(t&&e!==void 0?this.mdcFoundation.notch(e):this.mdcFoundation.closeNotch())}render(){this.openOrClose(this.open,this.width);const t=it({"mdc-notched-outline--notched":this.open});return M`
      <span class="mdc-notched-outline ${t}">
        <span class="mdc-notched-outline__leading"></span>
        <span class="mdc-notched-outline__notch">
          <slot></slot>
        </span>
        <span class="mdc-notched-outline__trailing"></span>
      </span>`}}s([A(".mdc-notched-outline")],B.prototype,"mdcRoot",void 0);s([a({type:Number})],B.prototype,"width",void 0);s([a({type:Boolean,reflect:!0})],B.prototype,"open",void 0);s([A(".mdc-notched-outline__notch")],B.prototype,"notchElement",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */const xt=$`.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}:host{display:block;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] :host,:host([dir=rtl]){text-align:right}::slotted(.mdc-floating-label){display:inline-block;position:relative;top:17px;bottom:auto;max-width:100%}::slotted(.mdc-floating-label--float-above){text-overflow:clip}.mdc-notched-outline--upgraded ::slotted(.mdc-floating-label--float-above){max-width:calc(100% / 0.75)}.mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__leading,.mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{border-color:var(--mdc-notched-outline-border-color, var(--mdc-theme-primary, #6200ee));border-width:1px;border-width:var(--mdc-notched-outline-stroke-width, 1px)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0;padding-top:var(--mdc-notched-outline-notch-offset, 0)}`;let V=class extends B{};V.styles=[xt];V=s([z("mwc-notched-outline")],V);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var It={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",IS_OPEN_BELOW:"mdc-menu-surface--is-open-below",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"},Rt={CLOSED_EVENT:"MDCMenuSurface:closed",CLOSING_EVENT:"MDCMenuSurface:closing",OPENED_EVENT:"MDCMenuSurface:opened",FOCUSABLE_ELEMENTS:["button:not(:disabled)",'[href]:not([aria-disabled="true"])',"input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)",'[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")},H={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67},c;(function(n){n[n.BOTTOM=1]="BOTTOM",n[n.CENTER=2]="CENTER",n[n.RIGHT=4]="RIGHT",n[n.FLIP_RTL=8]="FLIP_RTL"})(c||(c={}));var p;(function(n){n[n.TOP_LEFT=0]="TOP_LEFT",n[n.TOP_RIGHT=4]="TOP_RIGHT",n[n.BOTTOM_LEFT=1]="BOTTOM_LEFT",n[n.BOTTOM_RIGHT=5]="BOTTOM_RIGHT",n[n.TOP_START=8]="TOP_START",n[n.TOP_END=12]="TOP_END",n[n.BOTTOM_START=9]="BOTTOM_START",n[n.BOTTOM_END=13]="BOTTOM_END"})(p||(p={}));/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var rt=function(n){S(t,n);function t(e){var i=n.call(this,f(f({},t.defaultAdapter),e))||this;return i.isSurfaceOpen=!1,i.isQuickOpen=!1,i.isHoistedElement=!1,i.isFixedPosition=!1,i.isHorizontallyCenteredOnViewport=!1,i.maxHeight=0,i.openAnimationEndTimerId=0,i.closeAnimationEndTimerId=0,i.animationRequestId=0,i.anchorCorner=p.TOP_START,i.originCorner=p.TOP_START,i.anchorMargin={top:0,right:0,bottom:0,left:0},i.position={x:0,y:0},i}return Object.defineProperty(t,"cssClasses",{get:function(){return It},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return Rt},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return H},enumerable:!1,configurable:!0}),Object.defineProperty(t,"Corner",{get:function(){return p},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},hasAnchor:function(){return!1},isElementInContainer:function(){return!1},isFocused:function(){return!1},isRtl:function(){return!1},getInnerDimensions:function(){return{height:0,width:0}},getAnchorDimensions:function(){return null},getWindowDimensions:function(){return{height:0,width:0}},getBodyDimensions:function(){return{height:0,width:0}},getWindowScroll:function(){return{x:0,y:0}},setPosition:function(){},setMaxHeight:function(){},setTransformOrigin:function(){},saveFocus:function(){},restoreFocus:function(){},notifyClose:function(){},notifyOpen:function(){},notifyClosing:function(){}}},enumerable:!1,configurable:!0}),t.prototype.init=function(){var e=t.cssClasses,i=e.ROOT,o=e.OPEN;if(!this.adapter.hasClass(i))throw new Error(i+" class required in root element.");this.adapter.hasClass(o)&&(this.isSurfaceOpen=!0)},t.prototype.destroy=function(){clearTimeout(this.openAnimationEndTimerId),clearTimeout(this.closeAnimationEndTimerId),cancelAnimationFrame(this.animationRequestId)},t.prototype.setAnchorCorner=function(e){this.anchorCorner=e},t.prototype.flipCornerHorizontally=function(){this.originCorner=this.originCorner^c.RIGHT},t.prototype.setAnchorMargin=function(e){this.anchorMargin.top=e.top||0,this.anchorMargin.right=e.right||0,this.anchorMargin.bottom=e.bottom||0,this.anchorMargin.left=e.left||0},t.prototype.setIsHoisted=function(e){this.isHoistedElement=e},t.prototype.setFixedPosition=function(e){this.isFixedPosition=e},t.prototype.setAbsolutePosition=function(e,i){this.position.x=this.isFinite(e)?e:0,this.position.y=this.isFinite(i)?i:0},t.prototype.setIsHorizontallyCenteredOnViewport=function(e){this.isHorizontallyCenteredOnViewport=e},t.prototype.setQuickOpen=function(e){this.isQuickOpen=e},t.prototype.setMaxHeight=function(e){this.maxHeight=e},t.prototype.isOpen=function(){return this.isSurfaceOpen},t.prototype.open=function(){var e=this;this.isSurfaceOpen||(this.adapter.saveFocus(),this.isQuickOpen?(this.isSurfaceOpen=!0,this.adapter.addClass(t.cssClasses.OPEN),this.dimensions=this.adapter.getInnerDimensions(),this.autoposition(),this.adapter.notifyOpen()):(this.adapter.addClass(t.cssClasses.ANIMATING_OPEN),this.animationRequestId=requestAnimationFrame(function(){e.dimensions=e.adapter.getInnerDimensions(),e.autoposition(),e.adapter.addClass(t.cssClasses.OPEN),e.openAnimationEndTimerId=setTimeout(function(){e.openAnimationEndTimerId=0,e.adapter.removeClass(t.cssClasses.ANIMATING_OPEN),e.adapter.notifyOpen()},H.TRANSITION_OPEN_DURATION)}),this.isSurfaceOpen=!0))},t.prototype.close=function(e){var i=this;if(e===void 0&&(e=!1),!!this.isSurfaceOpen){if(this.adapter.notifyClosing(),this.isQuickOpen){this.isSurfaceOpen=!1,e||this.maybeRestoreFocus(),this.adapter.removeClass(t.cssClasses.OPEN),this.adapter.removeClass(t.cssClasses.IS_OPEN_BELOW),this.adapter.notifyClose();return}this.adapter.addClass(t.cssClasses.ANIMATING_CLOSED),requestAnimationFrame(function(){i.adapter.removeClass(t.cssClasses.OPEN),i.adapter.removeClass(t.cssClasses.IS_OPEN_BELOW),i.closeAnimationEndTimerId=setTimeout(function(){i.closeAnimationEndTimerId=0,i.adapter.removeClass(t.cssClasses.ANIMATING_CLOSED),i.adapter.notifyClose()},H.TRANSITION_CLOSE_DURATION)}),this.isSurfaceOpen=!1,e||this.maybeRestoreFocus()}},t.prototype.handleBodyClick=function(e){var i=e.target;this.adapter.isElementInContainer(i)||this.close()},t.prototype.handleKeydown=function(e){var i=e.keyCode,o=e.key,r=o==="Escape"||i===27;r&&this.close()},t.prototype.autoposition=function(){var e;this.measurements=this.getAutoLayoutmeasurements();var i=this.getoriginCorner(),o=this.getMenuSurfaceMaxHeight(i),r=this.hasBit(i,c.BOTTOM)?"bottom":"top",d=this.hasBit(i,c.RIGHT)?"right":"left",l=this.getHorizontalOriginOffset(i),R=this.getVerticalOriginOffset(i),T=this.measurements,_=T.anchorSize,C=T.surfaceSize,m=(e={},e[d]=l,e[r]=R,e);_.width/C.width>H.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(d="center"),(this.isHoistedElement||this.isFixedPosition)&&this.adjustPositionForHoistedElement(m),this.adapter.setTransformOrigin(d+" "+r),this.adapter.setPosition(m),this.adapter.setMaxHeight(o?o+"px":""),this.hasBit(i,c.BOTTOM)||this.adapter.addClass(t.cssClasses.IS_OPEN_BELOW)},t.prototype.getAutoLayoutmeasurements=function(){var e=this.adapter.getAnchorDimensions(),i=this.adapter.getBodyDimensions(),o=this.adapter.getWindowDimensions(),r=this.adapter.getWindowScroll();return e||(e={top:this.position.y,right:this.position.x,bottom:this.position.y,left:this.position.x,width:0,height:0}),{anchorSize:e,bodySize:i,surfaceSize:this.dimensions,viewportDistance:{top:e.top,right:o.width-e.right,bottom:o.height-e.bottom,left:e.left},viewportSize:o,windowScroll:r}},t.prototype.getoriginCorner=function(){var e=this.originCorner,i=this.measurements,o=i.viewportDistance,r=i.anchorSize,d=i.surfaceSize,l=t.numbers.MARGIN_TO_EDGE,R=this.hasBit(this.anchorCorner,c.BOTTOM),T,_;R?(T=o.top-l+this.anchorMargin.bottom,_=o.bottom-l-this.anchorMargin.bottom):(T=o.top-l+this.anchorMargin.top,_=o.bottom-l+r.height-this.anchorMargin.top);var C=_-d.height>0;!C&&T>_&&(e=this.setBit(e,c.BOTTOM));var m=this.adapter.isRtl(),y=this.hasBit(this.anchorCorner,c.FLIP_RTL),E=this.hasBit(this.anchorCorner,c.RIGHT)||this.hasBit(e,c.RIGHT),w=!1;m&&y?w=!E:w=E;var F,D;w?(F=o.left+r.width+this.anchorMargin.right,D=o.right-this.anchorMargin.right):(F=o.left+this.anchorMargin.left,D=o.right+r.width-this.anchorMargin.left);var G=F-d.width>0,q=D-d.width>0,Q=this.hasBit(e,c.FLIP_RTL)&&this.hasBit(e,c.RIGHT);return q&&Q&&m||!G&&Q?e=this.unsetBit(e,c.RIGHT):(G&&w&&m||G&&!w&&E||!q&&F>=D)&&(e=this.setBit(e,c.RIGHT)),e},t.prototype.getMenuSurfaceMaxHeight=function(e){if(this.maxHeight>0)return this.maxHeight;var i=this.measurements.viewportDistance,o=0,r=this.hasBit(e,c.BOTTOM),d=this.hasBit(this.anchorCorner,c.BOTTOM),l=t.numbers.MARGIN_TO_EDGE;return r?(o=i.top+this.anchorMargin.top-l,d||(o+=this.measurements.anchorSize.height)):(o=i.bottom-this.anchorMargin.bottom+this.measurements.anchorSize.height-l,d&&(o-=this.measurements.anchorSize.height)),o},t.prototype.getHorizontalOriginOffset=function(e){var i=this.measurements.anchorSize,o=this.hasBit(e,c.RIGHT),r=this.hasBit(this.anchorCorner,c.RIGHT);if(o){var d=r?i.width-this.anchorMargin.left:this.anchorMargin.right;return this.isHoistedElement||this.isFixedPosition?d-(this.measurements.viewportSize.width-this.measurements.bodySize.width):d}return r?i.width-this.anchorMargin.right:this.anchorMargin.left},t.prototype.getVerticalOriginOffset=function(e){var i=this.measurements.anchorSize,o=this.hasBit(e,c.BOTTOM),r=this.hasBit(this.anchorCorner,c.BOTTOM),d=0;return o?d=r?i.height-this.anchorMargin.top:-this.anchorMargin.bottom:d=r?i.height+this.anchorMargin.bottom:this.anchorMargin.top,d},t.prototype.adjustPositionForHoistedElement=function(e){var i,o,r=this.measurements,d=r.windowScroll,l=r.viewportDistance,R=r.surfaceSize,T=r.viewportSize,_=Object.keys(e);try{for(var C=ut(_),m=C.next();!m.done;m=C.next()){var y=m.value,E=e[y]||0;if(this.isHorizontallyCenteredOnViewport&&(y==="left"||y==="right")){e[y]=(T.width-R.width)/2;continue}E+=l[y],this.isFixedPosition||(y==="top"?E+=d.y:y==="bottom"?E-=d.y:y==="left"?E+=d.x:E-=d.x),e[y]=E}}catch(w){i={error:w}}finally{try{m&&!m.done&&(o=C.return)&&o.call(C)}finally{if(i)throw i.error}}},t.prototype.maybeRestoreFocus=function(){var e=this.adapter.isFocused(),i=document.activeElement&&this.adapter.isElementInContainer(document.activeElement);(e||i)&&this.adapter.restoreFocus()},t.prototype.hasBit=function(e,i){return!!(e&i)},t.prototype.setBit=function(e,i){return e|i},t.prototype.unsetBit=function(e,i){return e^i},t.prototype.isFinite=function(e){return typeof e=="number"&&isFinite(e)},t}(L);const St=rt,Lt={TOP_LEFT:p.TOP_LEFT,TOP_RIGHT:p.TOP_RIGHT,BOTTOM_LEFT:p.BOTTOM_LEFT,BOTTOM_RIGHT:p.BOTTOM_RIGHT,TOP_START:p.TOP_START,TOP_END:p.TOP_END,BOTTOM_START:p.BOTTOM_START,BOTTOM_END:p.BOTTOM_END};class u extends k{constructor(){super(...arguments),this.mdcFoundationClass=St,this.absolute=!1,this.fullwidth=!1,this.fixed=!1,this.x=null,this.y=null,this.quick=!1,this.open=!1,this.stayOpenOnBodyClick=!1,this.bitwiseCorner=p.TOP_START,this.previousMenuCorner=null,this.menuCorner="START",this.corner="TOP_START",this.styleTop="",this.styleLeft="",this.styleRight="",this.styleBottom="",this.styleMaxHeight="",this.styleTransformOrigin="",this.anchor=null,this.previouslyFocused=null,this.previousAnchor=null,this.onBodyClickBound=()=>{}}render(){const t={"mdc-menu-surface--fixed":this.fixed,"mdc-menu-surface--fullwidth":this.fullwidth},e={top:this.styleTop,left:this.styleLeft,right:this.styleRight,bottom:this.styleBottom,"max-height":this.styleMaxHeight,"transform-origin":this.styleTransformOrigin};return M`
      <div
          class="mdc-menu-surface ${it(t)}"
          style="${ht(e)}"
          @keydown=${this.onKeydown}
          @opened=${this.registerBodyClick}
          @closed=${this.deregisterBodyClick}>
        <slot></slot>
      </div>`}createAdapter(){return Object.assign(Object.assign({},et(this.mdcRoot)),{hasAnchor:()=>!!this.anchor,notifyClose:()=>{const t={bubbles:!0,composed:!0},e=new CustomEvent("closed",t);this.open=!1,this.mdcRoot.dispatchEvent(e)},notifyClosing:()=>{const t={bubbles:!0,composed:!0},e=new CustomEvent("closing",t);this.mdcRoot.dispatchEvent(e)},notifyOpen:()=>{const t={bubbles:!0,composed:!0},e=new CustomEvent("opened",t);this.open=!0,this.mdcRoot.dispatchEvent(e)},isElementInContainer:()=>!1,isRtl:()=>this.mdcRoot?getComputedStyle(this.mdcRoot).direction==="rtl":!1,setTransformOrigin:t=>{this.mdcRoot&&(this.styleTransformOrigin=t)},isFocused:()=>pt(this),saveFocus:()=>{const t=mt(),e=t.length;e||(this.previouslyFocused=null),this.previouslyFocused=t[e-1]},restoreFocus:()=>{this.previouslyFocused&&"focus"in this.previouslyFocused&&this.previouslyFocused.focus()},getInnerDimensions:()=>{const t=this.mdcRoot;return t?{width:t.offsetWidth,height:t.offsetHeight}:{width:0,height:0}},getAnchorDimensions:()=>{const t=this.anchor;return t?t.getBoundingClientRect():null},getBodyDimensions:()=>({width:document.body.clientWidth,height:document.body.clientHeight}),getWindowDimensions:()=>({width:window.innerWidth,height:window.innerHeight}),getWindowScroll:()=>({x:window.pageXOffset,y:window.pageYOffset}),setPosition:t=>{this.mdcRoot&&(this.styleLeft="left"in t?`${t.left}px`:"",this.styleRight="right"in t?`${t.right}px`:"",this.styleTop="top"in t?`${t.top}px`:"",this.styleBottom="bottom"in t?`${t.bottom}px`:"")},setMaxHeight:async t=>{this.mdcRoot&&(this.styleMaxHeight=t,await this.updateComplete,this.styleMaxHeight=`var(--mdc-menu-max-height, ${t})`)}})}onKeydown(t){this.mdcFoundation&&this.mdcFoundation.handleKeydown(t)}onBodyClick(t){if(this.stayOpenOnBodyClick)return;t.composedPath().indexOf(this)===-1&&this.close()}registerBodyClick(){this.onBodyClickBound=this.onBodyClick.bind(this),document.body.addEventListener("click",this.onBodyClickBound,{passive:!0,capture:!0})}deregisterBodyClick(){document.body.removeEventListener("click",this.onBodyClickBound,{capture:!0})}close(){this.open=!1}show(){this.open=!0}}s([A(".mdc-menu-surface")],u.prototype,"mdcRoot",void 0);s([A("slot")],u.prototype,"slotElement",void 0);s([a({type:Boolean}),g(function(n){this.mdcFoundation&&!this.fixed&&this.mdcFoundation.setIsHoisted(n)})],u.prototype,"absolute",void 0);s([a({type:Boolean})],u.prototype,"fullwidth",void 0);s([a({type:Boolean}),g(function(n){this.mdcFoundation&&!this.absolute&&this.mdcFoundation.setFixedPosition(n)})],u.prototype,"fixed",void 0);s([a({type:Number}),g(function(n){this.mdcFoundation&&this.y!==null&&n!==null&&(this.mdcFoundation.setAbsolutePosition(n,this.y),this.mdcFoundation.setAnchorMargin({left:n,top:this.y,right:-n,bottom:this.y}))})],u.prototype,"x",void 0);s([a({type:Number}),g(function(n){this.mdcFoundation&&this.x!==null&&n!==null&&(this.mdcFoundation.setAbsolutePosition(this.x,n),this.mdcFoundation.setAnchorMargin({left:this.x,top:n,right:-this.x,bottom:n}))})],u.prototype,"y",void 0);s([a({type:Boolean}),g(function(n){this.mdcFoundation&&this.mdcFoundation.setQuickOpen(n)})],u.prototype,"quick",void 0);s([a({type:Boolean,reflect:!0}),g(function(n,t){this.mdcFoundation&&(n?this.mdcFoundation.open():t!==void 0&&this.mdcFoundation.close())})],u.prototype,"open",void 0);s([a({type:Boolean})],u.prototype,"stayOpenOnBodyClick",void 0);s([O(),g(function(n){this.mdcFoundation&&(n?this.mdcFoundation.setAnchorCorner(n):this.mdcFoundation.setAnchorCorner(n))})],u.prototype,"bitwiseCorner",void 0);s([a({type:String}),g(function(n){if(this.mdcFoundation){const t=n==="START"||n==="END",e=this.previousMenuCorner===null,i=!e&&n!==this.previousMenuCorner;t&&(i||e&&n==="END")&&(this.bitwiseCorner=this.bitwiseCorner^c.RIGHT,this.mdcFoundation.flipCornerHorizontally(),this.previousMenuCorner=n)}})],u.prototype,"menuCorner",void 0);s([a({type:String}),g(function(n){if(this.mdcFoundation&&n){let t=Lt[n];this.menuCorner==="END"&&(t=t^c.RIGHT),this.bitwiseCorner=t}})],u.prototype,"corner",void 0);s([O()],u.prototype,"styleTop",void 0);s([O()],u.prototype,"styleLeft",void 0);s([O()],u.prototype,"styleRight",void 0);s([O()],u.prototype,"styleBottom",void 0);s([O()],u.prototype,"styleMaxHeight",void 0);s([O()],u.prototype,"styleTransformOrigin",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */const Nt=$`.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-width:var(--mdc-menu-max-width, calc(100vw - 32px));max-height:calc(100vh - 32px);max-height:var(--mdc-menu-max-height, calc(100vh - 32px));margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;transition:opacity .03s linear,transform .12s cubic-bezier(0, 0, 0.2, 1),height 250ms cubic-bezier(0, 0, 0.2, 1);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity .075s linear}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}:host(:not([open])){display:none}.mdc-menu-surface{z-index:8;z-index:var(--mdc-menu-z-index, 8);min-width:112px;min-width:var(--mdc-menu-min-width, 112px)}`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let K=class extends u{};K.styles=[Nt];K=s([z("mwc-menu-surface")],K);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var U={MENU_SELECTED_LIST_ITEM:"mdc-menu-item--selected",MENU_SELECTION_GROUP:"mdc-menu__selection-group",ROOT:"mdc-menu"},P={ARIA_CHECKED_ATTR:"aria-checked",ARIA_DISABLED_ATTR:"aria-disabled",CHECKBOX_SELECTOR:'input[type="checkbox"]',LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",SELECTED_EVENT:"MDCMenu:selected"},Pt={FOCUS_ROOT_INDEX:-1},I;(function(n){n[n.NONE=0]="NONE",n[n.LIST_ROOT=1]="LIST_ROOT",n[n.FIRST_ITEM=2]="FIRST_ITEM",n[n.LAST_ITEM=3]="LAST_ITEM"})(I||(I={}));/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Mt=function(n){S(t,n);function t(e){var i=n.call(this,f(f({},t.defaultAdapter),e))||this;return i.closeAnimationEndTimerId=0,i.defaultFocusState=I.LIST_ROOT,i.selectedIndex=-1,i}return Object.defineProperty(t,"cssClasses",{get:function(){return U},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return P},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return Pt},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClassToElementAtIndex:function(){},removeClassFromElementAtIndex:function(){},addAttributeToElementAtIndex:function(){},removeAttributeFromElementAtIndex:function(){},elementContainsClass:function(){return!1},closeSurface:function(){},getElementIndex:function(){return-1},notifySelected:function(){},getMenuItemCount:function(){return 0},focusItemAtIndex:function(){},focusListRoot:function(){},getSelectedSiblingOfItemAtIndex:function(){return-1},isSelectableItemAtIndex:function(){return!1}}},enumerable:!1,configurable:!0}),t.prototype.destroy=function(){this.closeAnimationEndTimerId&&clearTimeout(this.closeAnimationEndTimerId),this.adapter.closeSurface()},t.prototype.handleKeydown=function(e){var i=e.key,o=e.keyCode,r=i==="Tab"||o===9;r&&this.adapter.closeSurface(!0)},t.prototype.handleItemAction=function(e){var i=this,o=this.adapter.getElementIndex(e);o<0||(this.adapter.notifySelected({index:o}),this.adapter.closeSurface(),this.closeAnimationEndTimerId=setTimeout(function(){var r=i.adapter.getElementIndex(e);r>=0&&i.adapter.isSelectableItemAtIndex(r)&&i.setSelectedIndex(r)},rt.numbers.TRANSITION_CLOSE_DURATION))},t.prototype.handleMenuSurfaceOpened=function(){switch(this.defaultFocusState){case I.FIRST_ITEM:this.adapter.focusItemAtIndex(0);break;case I.LAST_ITEM:this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount()-1);break;case I.NONE:break;default:this.adapter.focusListRoot();break}},t.prototype.setDefaultFocusState=function(e){this.defaultFocusState=e},t.prototype.getSelectedIndex=function(){return this.selectedIndex},t.prototype.setSelectedIndex=function(e){if(this.validatedIndex(e),!this.adapter.isSelectableItemAtIndex(e))throw new Error("MDCMenuFoundation: No selection group at specified index.");var i=this.adapter.getSelectedSiblingOfItemAtIndex(e);i>=0&&(this.adapter.removeAttributeFromElementAtIndex(i,P.ARIA_CHECKED_ATTR),this.adapter.removeClassFromElementAtIndex(i,U.MENU_SELECTED_LIST_ITEM)),this.adapter.addClassToElementAtIndex(e,U.MENU_SELECTED_LIST_ITEM),this.adapter.addAttributeToElementAtIndex(e,P.ARIA_CHECKED_ATTR,"true"),this.selectedIndex=e},t.prototype.setEnabled=function(e,i){this.validatedIndex(e),i?(this.adapter.removeClassFromElementAtIndex(e,Y.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(e,P.ARIA_DISABLED_ATTR,"false")):(this.adapter.addClassToElementAtIndex(e,Y.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(e,P.ARIA_DISABLED_ATTR,"true"))},t.prototype.validatedIndex=function(e){var i=this.adapter.getMenuItemCount(),o=e>=0&&e<i;if(!o)throw new Error("MDCMenuFoundation: No list item at specified index.")},t}(L);const Bt=Mt;class h extends k{constructor(){super(...arguments),this.mdcFoundationClass=Bt,this.listElement_=null,this.anchor=null,this.open=!1,this.quick=!1,this.wrapFocus=!1,this.innerRole="menu",this.corner="TOP_START",this.x=null,this.y=null,this.absolute=!1,this.multi=!1,this.activatable=!1,this.fixed=!1,this.forceGroupSelection=!1,this.fullwidth=!1,this.menuCorner="START",this.stayOpenOnBodyClick=!1,this.defaultFocus="LIST_ROOT",this._listUpdateComplete=null}get listElement(){return this.listElement_?this.listElement_:(this.listElement_=this.renderRoot.querySelector("mwc-list"),this.listElement_)}get items(){const t=this.listElement;return t?t.items:[]}get index(){const t=this.listElement;return t?t.index:-1}get selected(){const t=this.listElement;return t?t.selected:null}render(){const t=this.innerRole==="menu"?"menuitem":"option";return M`
      <mwc-menu-surface
          ?hidden=${!this.open}
          .anchor=${this.anchor}
          .open=${this.open}
          .quick=${this.quick}
          .corner=${this.corner}
          .x=${this.x}
          .y=${this.y}
          .absolute=${this.absolute}
          .fixed=${this.fixed}
          .fullwidth=${this.fullwidth}
          .menuCorner=${this.menuCorner}
          ?stayOpenOnBodyClick=${this.stayOpenOnBodyClick}
          class="mdc-menu mdc-menu-surface"
          @closed=${this.onClosed}
          @opened=${this.onOpened}
          @keydown=${this.onKeydown}>
        <mwc-list
          rootTabbable
          .innerRole=${this.innerRole}
          .multi=${this.multi}
          class="mdc-deprecated-list"
          .itemRoles=${t}
          .wrapFocus=${this.wrapFocus}
          .activatable=${this.activatable}
          @action=${this.onAction}>
        <slot></slot>
      </mwc-list>
    </mwc-menu-surface>`}createAdapter(){return{addClassToElementAtIndex:(t,e)=>{const i=this.listElement;if(!i)return;const o=i.items[t];o&&(e==="mdc-menu-item--selected"?this.forceGroupSelection&&!o.selected&&i.toggle(t,!0):o.classList.add(e))},removeClassFromElementAtIndex:(t,e)=>{const i=this.listElement;if(!i)return;const o=i.items[t];o&&(e==="mdc-menu-item--selected"?o.selected&&i.toggle(t,!1):o.classList.remove(e))},addAttributeToElementAtIndex:(t,e,i)=>{const o=this.listElement;if(!o)return;const r=o.items[t];r&&r.setAttribute(e,i)},removeAttributeFromElementAtIndex:(t,e)=>{const i=this.listElement;if(!i)return;const o=i.items[t];o&&o.removeAttribute(e)},elementContainsClass:(t,e)=>t.classList.contains(e),closeSurface:()=>{this.open=!1},getElementIndex:t=>{const e=this.listElement;return e?e.items.indexOf(t):-1},notifySelected:()=>{},getMenuItemCount:()=>{const t=this.listElement;return t?t.items.length:0},focusItemAtIndex:t=>{const e=this.listElement;if(!e)return;const i=e.items[t];i&&i.focus()},focusListRoot:()=>{this.listElement&&this.listElement.focus()},getSelectedSiblingOfItemAtIndex:t=>{const e=this.listElement;if(!e)return-1;const i=e.items[t];if(!i||!i.group)return-1;for(let o=0;o<e.items.length;o++){if(o===t)continue;const r=e.items[o];if(r.selected&&r.group===i.group)return o}return-1},isSelectableItemAtIndex:t=>{const e=this.listElement;if(!e)return!1;const i=e.items[t];return i?i.hasAttribute("group"):!1}}}onKeydown(t){this.mdcFoundation&&this.mdcFoundation.handleKeydown(t)}onAction(t){const e=this.listElement;if(this.mdcFoundation&&e){const i=t.detail.index,o=e.items[i];o&&this.mdcFoundation.handleItemAction(o)}}onOpened(){this.open=!0,this.mdcFoundation&&this.mdcFoundation.handleMenuSurfaceOpened()}onClosed(){this.open=!1}async getUpdateComplete(){return await this._listUpdateComplete,await super.getUpdateComplete()}async firstUpdated(){super.firstUpdated();const t=this.listElement;t&&(this._listUpdateComplete=t.updateComplete,await this._listUpdateComplete)}select(t){const e=this.listElement;e&&e.select(t)}close(){this.open=!1}show(){this.open=!0}getFocusedItemIndex(){const t=this.listElement;return t?t.getFocusedItemIndex():-1}focusItemAtIndex(t){const e=this.listElement;e&&e.focusItemAtIndex(t)}layout(t=!0){const e=this.listElement;e&&e.layout(t)}}s([A(".mdc-menu")],h.prototype,"mdcRoot",void 0);s([A("slot")],h.prototype,"slotElement",void 0);s([a({type:Object})],h.prototype,"anchor",void 0);s([a({type:Boolean,reflect:!0})],h.prototype,"open",void 0);s([a({type:Boolean})],h.prototype,"quick",void 0);s([a({type:Boolean})],h.prototype,"wrapFocus",void 0);s([a({type:String})],h.prototype,"innerRole",void 0);s([a({type:String})],h.prototype,"corner",void 0);s([a({type:Number})],h.prototype,"x",void 0);s([a({type:Number})],h.prototype,"y",void 0);s([a({type:Boolean})],h.prototype,"absolute",void 0);s([a({type:Boolean})],h.prototype,"multi",void 0);s([a({type:Boolean})],h.prototype,"activatable",void 0);s([a({type:Boolean})],h.prototype,"fixed",void 0);s([a({type:Boolean})],h.prototype,"forceGroupSelection",void 0);s([a({type:Boolean})],h.prototype,"fullwidth",void 0);s([a({type:String})],h.prototype,"menuCorner",void 0);s([a({type:Boolean})],h.prototype,"stayOpenOnBodyClick",void 0);s([a({type:String}),g(function(n){this.mdcFoundation&&this.mdcFoundation.setDefaultFocusState(I[n])})],h.prototype,"defaultFocus",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */const Ft=$`mwc-list ::slotted([mwc-list-item]:not([twoline])){height:var(--mdc-menu-item-height, 48px)}`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let W=class extends h{};W.styles=[Ft];W=s([z("mwc-menu")],W);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Dt={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_REQUIRED:"mdc-floating-label--required",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"};/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ht=function(n){S(t,n);function t(e){var i=n.call(this,f(f({},t.defaultAdapter),e))||this;return i.shakeAnimationEndHandler=function(){i.handleShakeAnimationEnd()},i}return Object.defineProperty(t,"cssClasses",{get:function(){return Dt},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),t.prototype.init=function(){this.adapter.registerInteractionHandler("animationend",this.shakeAnimationEndHandler)},t.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler)},t.prototype.getWidth=function(){return this.adapter.getWidth()},t.prototype.shake=function(e){var i=t.cssClasses.LABEL_SHAKE;e?this.adapter.addClass(i):this.adapter.removeClass(i)},t.prototype.float=function(e){var i=t.cssClasses,o=i.LABEL_FLOAT_ABOVE,r=i.LABEL_SHAKE;e?this.adapter.addClass(o):(this.adapter.removeClass(o),this.adapter.removeClass(r))},t.prototype.setRequired=function(e){var i=t.cssClasses.LABEL_REQUIRED;e?this.adapter.addClass(i):this.adapter.removeClass(i)},t.prototype.handleShakeAnimationEnd=function(){var e=t.cssClasses.LABEL_SHAKE;this.adapter.removeClass(e)},t}(L);/**
 * @license
 * Copyright (c) 2021 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const v={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6};class kt{constructor(t){this.type=v.CHILD,this.options=t.options,this.legacyPart=t}get parentNode(){return this.legacyPart.startNode.parentNode}get startNode(){return this.legacyPart.startNode}get endNode(){return this.legacyPart.endNode}}class $t{constructor(t){this.legacyPart=t,this.type=t instanceof nt?v.PROPERTY:v.ATTRIBUTE}get options(){}get name(){return this.legacyPart.committer.name}get element(){return this.legacyPart.committer.element}get strings(){return this.legacyPart.committer.strings}get tagName(){return this.element.tagName}}class zt{constructor(t){this.type=v.BOOLEAN_ATTRIBUTE,this.legacyPart=t}get options(){}get name(){return this.legacyPart.name}get element(){return this.legacyPart.element}get strings(){return this.legacyPart.strings}get tagName(){return this.element.tagName}}class Gt{constructor(t){this.type=v.EVENT,this.legacyPart=t}get options(){}get name(){return this.legacyPart.eventName}get element(){return this.legacyPart.element}get strings(){}get tagName(){return this.element.tagName}handleEvent(t){this.legacyPart.handleEvent(t)}}function Ut(n){if(n instanceof gt)return new kt(n);if(n instanceof yt)return new Gt(n);if(n instanceof bt)return new zt(n);if(n instanceof nt||n instanceof Et)return new $t(n);throw new Error("Unknown part type")}class at{constructor(t){}update(t,e){return this.render(...e)}}function dt(n){const t=new WeakMap;return ft((...i)=>o=>{const r=t.get(o);let d,l;r===void 0?(d=Ut(o),l=new n(d),t.set(o,[d,l])):(d=r[0],l=r[1]),o.setValue(l.update(d,i)),o.commit()})}const jt=n=>({addClass:t=>n.classList.add(t),removeClass:t=>n.classList.remove(t),getWidth:()=>n.scrollWidth,registerInteractionHandler:(t,e)=>{n.addEventListener(t,e)},deregisterInteractionHandler:(t,e)=>{n.removeEventListener(t,e)}});class Vt extends at{constructor(t){switch(super(t),this.foundation=null,this.previousPart=null,t.type){case v.ATTRIBUTE:case v.PROPERTY:break;default:throw new Error("FloatingLabel directive only support attribute and property parts")}}update(t,[e]){if(t!==this.previousPart){this.foundation&&this.foundation.destroy(),this.previousPart=t;const i=t.element;i.classList.add("mdc-floating-label");const o=jt(i);this.foundation=new Ht(o),this.foundation.init()}return this.render(e)}render(t){return this.foundation}}const te=dt(Vt);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var x={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Kt=function(n){S(t,n);function t(e){var i=n.call(this,f(f({},t.defaultAdapter),e))||this;return i.transitionEndHandler=function(o){i.handleTransitionEnd(o)},i}return Object.defineProperty(t,"cssClasses",{get:function(){return x},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!1,configurable:!0}),t.prototype.init=function(){this.adapter.registerEventHandler("transitionend",this.transitionEndHandler)},t.prototype.destroy=function(){this.adapter.deregisterEventHandler("transitionend",this.transitionEndHandler)},t.prototype.activate=function(){this.adapter.removeClass(x.LINE_RIPPLE_DEACTIVATING),this.adapter.addClass(x.LINE_RIPPLE_ACTIVE)},t.prototype.setRippleCenter=function(e){this.adapter.setStyle("transform-origin",e+"px center")},t.prototype.deactivate=function(){this.adapter.addClass(x.LINE_RIPPLE_DEACTIVATING)},t.prototype.handleTransitionEnd=function(e){var i=this.adapter.hasClass(x.LINE_RIPPLE_DEACTIVATING);e.propertyName==="opacity"&&i&&(this.adapter.removeClass(x.LINE_RIPPLE_ACTIVE),this.adapter.removeClass(x.LINE_RIPPLE_DEACTIVATING))},t}(L);const Wt=n=>({addClass:t=>n.classList.add(t),removeClass:t=>n.classList.remove(t),hasClass:t=>n.classList.contains(t),setStyle:(t,e)=>n.style.setProperty(t,e),registerEventHandler:(t,e)=>{n.addEventListener(t,e)},deregisterEventHandler:(t,e)=>{n.removeEventListener(t,e)}});class qt extends at{constructor(t){switch(super(t),this.previousPart=null,this.foundation=null,t.type){case v.ATTRIBUTE:case v.PROPERTY:return;default:throw new Error("LineRipple only support attribute and property parts.")}}update(t,e){if(this.previousPart!==t){this.foundation&&this.foundation.destroy(),this.previousPart=t;const i=t.element;i.classList.add("mdc-line-ripple");const o=Wt(i);this.foundation=new Kt(o),this.foundation.init()}return this.render()}render(){return this.foundation}}const ee=dt(qt);export{p as C,st as F,ot as a,te as f,ee as l};
//# sourceMappingURL=mwc-line-ripple-directive-d5eeeeed.js.map
