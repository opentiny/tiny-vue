
    import { renderless, api } from '@opentiny/vue-renderless/currency/vue'
    import '@opentiny/vue-theme/currency/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function currency(props) {
      const {visible,modelValue,title,mode,multiple,searchConfig,fetchCurrency,fields,placeholder,currency} = props
      const defaultProps = {
        ...$props,
        ...props,
        visible,modelValue,title,mode,multiple,searchConfig,fetchCurrency,fields,placeholder,currency
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,visibleChange } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<tinySelect data-tag="tiny-currency" a($attrs, ['^on[A-Z]']) mode={mode} model-value={state.selectedValue} onUpdate:modelValue={$emit('update:modelValue', $event)} menus={state.options} value-field="value" text-field="label" title={title || t('ui.currency.chooseCurrency')} placeholder={placeholder} multiple={multiple} visible={visible} search-config={state.searchConfig} onUpdate:visible={visibleChange}></tinySelect>


      );
    }
    