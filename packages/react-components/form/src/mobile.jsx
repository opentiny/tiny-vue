
    import { renderless, api } from '@opentiny/vue-renderless/form/vue'
    import '@opentiny/vue-theme/form/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function form(props) {
      const {validatePosition,validateOnRuleChange,hideRequiredAsterisk,model,rules,inlineMessage,messageType,statusIcon,labelPosition,labelAlign,showMessage,size,disabled,labelWidth,contentOffset,labelSuffix,inline,responsiveLayout,validateType,validateIcon,manual} = props
      const defaultProps = {
        ...$props,
        ...props,
        validatePosition,validateOnRuleChange,hideRequiredAsterisk,model,rules,inlineMessage,messageType,statusIcon,labelPosition,labelAlign,showMessage,size,disabled,labelWidth,contentOffset,labelSuffix,inline,responsiveLayout,validateType,validateIcon,manual
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state, } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<form    className={vc([
      labelPosition ? 'tiny-mobile-form--label-' + labelPosition : '',
      { 'tiny-mobile-form--inline': inline },
      { 'label-align': labelAlign }
    ],'tiny-mobile-form')}>    
<Slot  parent_children={props.children} slots={props.slots}></Slot>

  </form>


      );
    }
    