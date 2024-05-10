
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
      const { state,toggleVisible,inputFocus,inputBlur,onInput,handleChange,popInput,reset,save } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[root,reference,popover]
      })
      return (
          
<div ref={root} v-ref="root"   a($attrs, ['^on[A-Z]']) className={vc({ 'hide-icon': hideIcon },'tiny-amount')}>    
<tinyPopover value={state.visible} onChange={(e)=>state.visible = e.value} placement="bottom-start" popper-class={
        'tiny-amount-popper' +
        (popperClass ? ' ' + popperClass : '') +
        (shape === 'filter' ? ' tiny-amount-filter-box' : '')
      } trigger="manual" append-to-body={popperAppendToBody} style={{display:!(displayOnly || hideIcon)?'block':'none'}}>      
<template slot>        
<tinyFilter style={{display:shape === 'filter'?'block':'none'}} ref={reference} v-ref="reference" label={label} value={state.amountValue} tip={tip} disabled={disabled} onClick={toggleVisible} show-close={clearable} blank={blank}>        </tinyFilter>

        
<tinyInput style={{display:!(shape === 'filter')?'block':'none'}} tabindex={tabindex} size={size} model-value={state.amountValue} maxlength={maxLen} display-only={displayOnly} placeholder={placeholder} disabled={disabled} onFocus={inputFocus} onBlur={inputBlur} onUpdate:modelValue={onInput}>          
<template slot>            
<div onClick={toggleVisible}  style={{display:!hideIcon?'block':'none'}} className="tiny-amount-input-icon">              
<iconCoin  className="tiny-svg-size"></iconCoin>

            </div>

          </template>

        </tinyInput>

      </template>

      
<div  ref={popover} v-ref="popover" className="popover-con">        
<div  style={{display:shape === 'filter' && filter?'block':'none'}} className="popover-filter-content">          
<tinyRadio value={state.radioVal} onChange={(e)=>state.radioVal = e.value} onChange={handleChange}>            

  {
    state.filterMenu.map((item, index)=>(
      <tinyRadio  key={index} label={t(item)}  className="popover-filter-botton">              
{t(item)}

            </tinyRadio>
    ))
  }
  

          </tinyRadio>

        </div>

        
<div  style={{display:popUp?'block':'none'}} className="module">          
<div  className="popover-left">{t('ui.amount.currency')}</div>

          
<tinyCurrency tiny_mode="pc" tiny_mode_root={true}  value={editorState.currency} onChange={(e)=>editorState.currency = e.value} clearable={false} fields={fields} fetch-currency={fetchCurrency} popper-class={popperClass} popper-append-to-body={popperAppendToBody} currency={currency} className="popover-right"></tinyCurrency>

        </div>

        
<div style={{display:date || dateAllowEmpty?'block':'none'}}  className="module">          
<div  className="popover-left">{t('ui.amount.date')}</div>

          
<tinyDate  value={editorState.date} onChange={(e)=>editorState.date = e.value} popper-class={'tiny-amount-popper' + (popperClass ? ' ' + popperClass : '')} popper-append-to-body={popperAppendToBody} className="popover-right"></tinyDate>

        </div>

        
<div  className="module">          
<div  className="popover-left">{t('ui.amount.amount')}</div>

          
<tinyInput  value={editorState.amount} onChange={(e)=>editorState.amount = e.value} onUpdate:modelValue={popInput} maxlength={maxLen} className="popover-right"></tinyInput>

        </div>

        
<div  style={{display:state.theme === 'saas'?'block':'none'}} className="module">          
<tinyButton onClick={reset}>{t('ui.base.reset')}</tinyButton>

          
<tinyButton type="primary" onClick={save}>{t('ui.base.confirm')}</tinyButton>

        </div>

        
<div  style={{display:!(state.theme === 'saas')?'block':'none'}} className="module">          
<tinyButton type="primary" onClick={save}>{t('ui.base.confirm')}</tinyButton>

          
<tinyButton onClick={reset}>{t('ui.base.reset')}</tinyButton>

        </div>

      </div>

    </tinyPopover>

    
<tinyInput style={{display:!(!(state.theme === 'saas'))?'block':'none'}} tabindex={tabindex} size={size} model-value={state.amountValue} maxlength={maxLen} display-only={displayOnly} placeholder={placeholder} disabled={disabled} onFocus={inputFocus} onBlur={inputBlur} onUpdate:modelValue={onInput}>      
<template slot>        
<div onClick={toggleVisible}  style={{display:!hideIcon?'block':'none'}} className="tiny-amount-input-icon">          
<iconCoin  className="tiny-svg-size"></iconCoin>

        </div>

      </template>

    </tinyInput>

  </div>


      );
    }
    