
    import { renderless, api } from '@opentiny/vue-renderless/switch/vue'
    import '@opentiny/vue-theme/switch/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function switch(props) {
      const {modelValue,trueValue,falseValue,disabled,loading,mini} = props
      const defaultProps = {
        ...$props,
        ...props,
        modelValue,trueValue,falseValue,disabled,loading,mini
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,toggle } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<span  disabled={disabled} tabindex="0" onClick={toggle} onKeydown={toggle} className={vc([state.wrapClasses)}>    
<div style={{display:loading?'block':'none'}}  className="tiny-mobile-switch-loading">      
<div  className="tiny-mobile-switch-loading-inner"></div>

    </div>

  </span>


      );
    }
    