
    import { renderless, api } from '@opentiny/vue-renderless/amount/vue'
    import '@opentiny/vue-theme/amount/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function amount(props) {
      const {modelValue,tabindex,size,placeholder,currency,date,dateAllowEmpty,digits,stringMode,rounding,maxLen,negative,disabled,fetchCurrency,fields,popperClass,popperAppendToBody,format,type,holdZero,modelTruncation,strictInput,plugin,popUp,hideCurrency,displayOnly,hideIcon,numAllowEmpty,label,tip,shape,clearable,filter,blank} = props
      const defaultProps = {
        ...$props,
        ...props,
        modelValue,tabindex,size,placeholder,currency,date,dateAllowEmpty,digits,stringMode,rounding,maxLen,negative,disabled,fetchCurrency,fields,popperClass,popperAppendToBody,format,type,holdZero,modelTruncation,strictInput,plugin,popUp,hideCurrency,displayOnly,hideIcon,numAllowEmpty,label,tip,shape,clearable,filter,blank
      }
      const { ref, current: vm, parent } = useVm()
      const root=useRef()
const reference=useRef()
const popover=useRef()
      const { state,openDetailEditor,toggleVisible,inputFocus,inputBlur,onInput,handleChange,popInput,save } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[root,reference,popover]
      })
      return (
          
<div data-tag="tiny-amount" ref={root} v-ref="root" a($attrs, ['^on[A-Z]'])>    
<template style={{display:uiMode === 'default'?'block':'none'}}>      
<tinyAction type="action" menus={[t('ui.amount.currency'), t('ui.amount.date')]} visible={state.visible && state.editorPhase === 'selection'} onUpdate:visible={(event) => closeDetailEidtor(!event && state.editorPhase === 'selection')} onClick={openDetailEditor} onClose={toggleVisible}></tinyAction>

      
<tinyCurrency value={editorState.currency} onChange={(e)=>editorState.currency = e.value} clearable={false} fields={fields} fetch-currency={fetchCurrency} popper-class={popperClass} popper-append-to-body={popperAppendToBody} currency={currency} visible={state.visible && state.editorPhase === 'currency'} onVisible={(event) => closeDetailEidtor(!event && state.editorPhase === 'currency')}></tinyCurrency>

      
<tinyDate value={editorState.date} onChange={(e)=>editorState.date = e.value} popper-class={popperClass ? ' ' + popperClass : ''} popper-append-to-body={popperAppendToBody} visible={state.visible && state.editorPhase === 'date'} onUpdate:visible={(event) => closeDetailEidtor(!event && state.editorPhase === 'date')} style={{display:date || dateAllowEmpty?'block':'none'}}></tinyDate>


    </template>

    
<tinyPopover value={state.visible} onChange={(e)=>state.visible = e.value} placement="bottom-start" popper-class={
        'sm:max-w-[theme(spacing.96)] sm:px-4 sm:py-4 box-border text-color-text-secondary sm:border-0' +
        ' sm:[&[x-placement^=bottom]]:mt-1 sm:[&[x-placement^=top]]:mb-1' +
        (popperClass ? ' ' + popperClass : '') +
        (shape === 'filter' ? ' w-80' : '') +
        (state.displayOnly ? ' w-auto' : '')
      } visible-arrow={false} trigger="manual" append-to-body={popperAppendToBody} style={{display:!(state.displayOnly || hideIcon) && uiMode !== 'default'?'block':'none'}}>      
<template slot>        
<tinyFilter style={{display:shape === 'filter'?'block':'none'}} ref={reference} v-ref="reference" label={label} value={state.amountValue} tip={tip} disabled={disabled} onClick={toggleVisible} show-close={clearable} blank={blank}>        </tinyFilter>

        
<tinyInput style={{display:!(shape === 'filter')?'block':'none'}}  tabindex={tabindex} size={size} model-value={shape !== 'filter' ? state.amountNumberValue : state.amountValue} maxlength={maxLen} display-only={state.displayOnly} placeholder={placeholder} disabled={disabled} clearable={clearable} onFocus={inputFocus} onBlur={inputBlur} onUpdate:modelValue={onInput} className={vc([
            shape !== 'filter' && !hideCurrency
              ? size === 'medium'
                ? '[&_[data-tag=tiny-input-display-only]_input[data-tag=tiny-input-inner]]:pl-12'
                : '[&_[data-tag=tiny-input-display-only]_input[data-tag=tiny-input-inner]]:pl-10'
              : ''
          )}>          
<template slot style={{display:shape !== 'filter' && !hideCurrency?'block':'none'}}>            
<div data-tag="tiny-amount-currency-mark"  className={vc([
                'pl-1 text-color-text-primary' +
                ' ' +
                (disabled ? 'text-color-text-disabled' : '') +
                ' ' +
                (size === 'medium'
                  ? 'h-8 leading-8 text-sm w-9'
                  : size === 'mini'
                    ? 'h-6 leading-6 text-xs w-7'
                    : 'h-7 leading-7 text-sm w-9 sm:text-xs sm:w-7')
              )}>              
{state.currency}

            </div>

          </template>

          
<template slot>            
<div onClick={toggleVisible}  style={{display:!hideIcon?'block':'none'}} className={vc([
                'fill-color-icon-secondary sm:fill-color-text-placeholder text-base hover:fill-color-brand-hover flex order-2 ml-3' +
                (state.visible ? ' fill-color-brand-hover' : '')
              )}>              
<iconCoin  custom-class="h-5 w-5 sm:h-4 sm:w-4"  className={vc([disabled ? 'fill-color-icon-placeholder sm:fill-color-text-placeholder' : '','tiny-svg-size]')}></iconCoin>

            </div>

          </template>

        </tinyInput>

      </template>

      
<div ref={popover} v-ref="popover">        
<div  style={{display:shape === 'filter' && filter?'block':'none'}} className="mb-3 text-xs cursor-pointer">          
<tinyRadio value={state.radioVal} onChange={(e)=>state.radioVal = e.value} onChange={handleChange}  className="[&]:inline-block">            

  {
    state.filterMenu.map((item, index)=>(
      <tinyRadio  key={index} label={t(item)}  className={vc([
                ' ' +
                'bg-color-bg-2 py-px box-border mb-2 sm:[&]:mr-2 ml-0 inline-flex items-center justify-center h-6 rounded-sm min-w-[theme(spacing.12)] text-center max-w-none px-2 border border-color-bg-2 border-solid font-normal' +
                ' [&[aria-checked]_[data-tag=tiny-radio-label]]:text-color-brand [&[aria-checked]]:border-color-brand' +
                ' ' +
                '[&_[data-tag=tiny-radio-content]]:hidden' +
                ' ' +
                '[&_[data-tag=tiny-radio-label]]:pl-0 [&_[data-tag=tiny-radio-label]]:leading-5 [&_[data-tag=tiny-radio-label]]:h-5 [&_[data-tag=tiny-radio-label]]:inline-block'
              )}>              
{t(item)}

            </tinyRadio>
    ))
  }
  

          </tinyRadio>

        </div>

        
<div  style={{display:popUp?'block':'none'}} className="flex justify-end items-center mb-4">          
<div  className="grow-0 shrink-0 basis-auto mr-2 w-1/5 text-sm">{t('ui.amount.currency')}</div>

          
<tinyCurrency tiny_mode="pc" tiny_mode_root={true} value={editorState.currency} onChange={(e)=>editorState.currency = e.value} clearable={false} fields={fields} fetch-currency={fetchCurrency} popper-class={popperClass} popper-append-to-body={popperAppendToBody} currency={currency}></tinyCurrency>

        </div>

        
<div style={{display:date || dateAllowEmpty?'block':'none'}}  className="flex justify-end items-center mb-4">          
<div  className="grow-0 shrink-0 basis-auto mr-2 w-1/5 text-sm">{t('ui.amount.date')}</div>

          
<tinyDate value={editorState.date} onChange={(e)=>editorState.date = e.value} popper-class={popperClass ? ' ' + popperClass : ''} popper-append-to-body={popperAppendToBody}></tinyDate>

        </div>

        
<div  style={{display:shape === 'filter'?'block':'none'}} className="flex justify-end items-center mb-4">          
<div  className="grow-0 shrink-0 basis-auto mr-2 w-1/5 text-sm">{t('ui.amount.amount')}</div>

          
<tinyInput  value={editorState.amount} onChange={(e)=>editorState.amount = e.value} onUpdate:modelValue={popInput} maxlength={maxLen} className="inline-block"></tinyInput>

        </div>

        
<div  className="flex justify-end items-center">          
<tinyButton type="primary" onClick={save}>{t('ui.base.confirm')}</tinyButton>

        </div>

      </div>

    </tinyPopover>

    
<tinyInput style={{display:!(shape === 'filter')?'block':'none'}}  tabindex={tabindex} size={size} model-value={
        (shape !== 'filter' || uiMode === 'default') && !state.displayOnly //input display-only不显示prefix需要带符号
          ? state.amountNumberValue
          : state.amountValue
      } maxlength={maxLen} display-only={state.displayOnly} placeholder={placeholder} disabled={disabled} clearable={clearable} onFocus={inputFocus} onBlur={inputBlur} onUpdate:modelValue={onInput} className={vc([
        (shape !== 'filter' || uiMode === 'default') && !hideCurrency // 移动端不支持filter模式忽略filter配置
          ? size === 'medium'
            ? '[&_[data-tag=tiny-input-display-only]_input[data-tag=tiny-input-inner]]:pl-12'
            : size === 'mini'
              ? '[&_[data-tag=tiny-input-display-only]_input[data-tag=tiny-input-inner]]:pl-10'
              : '[&_[data-tag=tiny-input-display-only]_input[data-tag=tiny-input-inner]]:pl-12 sm:[&_[data-tag=tiny-input-display-only]_input[data-tag=tiny-input-inner]]:pl-10'
          : ''
      )}>      
<template slot style={{display:(shape !== 'filter' || uiMode === 'default') && !hideCurrency?'block':'none'}}>        
<div data-tag="tiny-amount-currency-mark"  className={vc([
            'pl-1 text-color-text-primary' +
            ' ' +
            (disabled ? 'text-color-text-disabled' : '') +
            ' ' +
            (size === 'medium'
              ? 'h-8 leading-8 text-sm w-9'
              : size === 'mini'
                ? 'h-6 leading-6 text-xs w-7'
                : 'h-7 leading-7 text-sm w-9 sm:text-xs sm:w-7')
          )}>          
{state.currency}

        </div>

      </template>

      
<template slot>        
<div onClick={toggleVisible}  style={{display:!hideIcon?'block':'none'}} className={vc([
            'fill-color-icon-secondary sm:fill-color-text-placeholder text-base hover:fill-color-brand-hover flex order-2 ml-3' +
            (state.visible ? ' fill-color-brand-hover' : '')
          )}>          
<iconCoin custom-class="h-5 w-5 sm:h-4 sm:w-4"  className={vc([disabled ? 'fill-color-icon-placeholder sm:fill-color-text-placeholder' : '')}></iconCoin>

        </div>

      </template>

    </tinyInput>

  </div>


      );
    }
    