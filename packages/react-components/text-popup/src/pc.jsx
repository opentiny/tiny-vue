
    import { renderless, api } from '@opentiny/vue-renderless/text-popup/vue'
    import '@opentiny/vue-theme/text-popup/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function textPopup(props) {
      const {modelValue,placeholder,readonly,width,separtor} = props
      const defaultProps = {
        ...$props,
        ...props,
        modelValue,placeholder,readonly,width,separtor
      }
      const { ref, current: vm, parent } = useVm()
      const text=useRef()
const popup=useRef()
      const { state,onFocus,onBlur,onInput } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[text,popup]
      })
      return (
          
<div style={{ width: !state.showAutoWidth && state.width }}  className={vc(['tiny-text-popup', { 'show-auto-width': state.showAutoWidth }])}>    
<input style={{display:state.type === 'input'?'block':'none'}} ref={text} v-ref="text" placeholder={placeholder}  onFocus={onFocus} className="area text"></input>

    
<textarea style={{display:state.type === 'textarea'?'block':'none'}} ref={popup} v-ref="popup" value={state.textAreaValue} onChange={(e)=>state.textAreaValue = e.value} readonly={readonly}  rows="5" onBlur={onBlur} onInput={onInput} className="area popup">    </textarea>

  </div>


      );
    }
    