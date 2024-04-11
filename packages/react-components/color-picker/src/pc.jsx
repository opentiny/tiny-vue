
    import { renderless, api } from '@opentiny/vue-renderless/color-picker/vue'
    import '@opentiny/vue-theme/color-picker/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function colorPicker(props) {
      const {modelValue,visible,alpha,predefine,history,size} = props
      const defaultProps = {
        ...$props,
        ...props,
        modelValue,visible,alpha,predefine,history,size
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,onConfirm,onCancel,onHueUpdate,onSVUpdate,onColorUpdate } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div  onClick={() => changeVisible(!state.isShow)} className={vc([
      {
        'tiny-color-picker': true
      },
      state.size ? 'tiny-color-picker--' + state.size : ''
    ])}>    
<div  style={{
        background: state.triggerBg ?? ''
      }} className="tiny-color-picker__inner">      
<IconChevronDown ></IconChevronDown>

    </div>

    
<Transition name="tiny-zoom-in-top">      
<colorSelect onConfirm={onConfirm} onCancel={onCancel} onHue={onHueUpdate} onSv={onSVUpdate} onColor={onColorUpdate} value={state.hex} onChange={(e)=>state.hex = e.value} visible={state.isShow} alpha={alpha} predefine={state.predefineStack} history={state.stack}></colorSelect>

    </Transition>

  </div>


      );
    }
    