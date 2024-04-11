
    import { renderless, api } from '@opentiny/vue-renderless/currency/vue'
    import '@opentiny/vue-theme/currency/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function currency(props) {
      const {modelValue,placeholder,fetchCurrency,fields,size,clearable,disabled,popperClass,popperAppendToBody,currency,setDefault,fetchDefaultCurrency,setDefaultCurrency,label,dropStyle,shape,tip} = props
      const defaultProps = {
        ...$props,
        ...props,
        modelValue,placeholder,fetchCurrency,fields,size,clearable,disabled,popperClass,popperAppendToBody,currency,setDefault,fetchDefaultCurrency,setDefaultCurrency,label,dropStyle,shape,tip
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,change } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<tinySelect  value={state.selectedValue} onChange={(e)=>state.selectedValue = e.value} filterable={!shape} size={size} clearable={clearable} label={label} tip={tip} shape={shape} disabled={disabled} placeholder={placeholder} onChange={change} a($attrs, ['^on[A-Z]']) onClear={$emit('clear')} onVisible={$emit('visible-change', $event)} drop-style={dropStyle} className="tiny-currency">    

  {
    state.options.map(item=>(
      <tinyOption   key={item.value} label={item.label} value={item.value}  className={vc({ 'set-default': setDefault, 'is-active': item.value === state.defaultCurrency },'tiny-currency-option')}>      
<span  className="tiny-currency-option-label">{item.label}</span>

      
<span style={{display:setDefault?'block':'none'}}  onClick={toogleDefaultCurrency(item.value, item.value === state.defaultCurrency)} className="tiny-currency-option-set">        
<Component is={item.value === state.defaultCurrency ? 'icon-star-active' : 'icon-star-disable'}></Component>

        
<span >          
{item.value === state.defaultCurrency ? t('ui.currency.defaultCurrency') : t('ui.currency.setDefault')}</span>

      </span>

    </tinyOption>
    ))
  }
  

  </tinySelect>


      );
    }
    