
    import { renderless, api } from '@opentiny/vue-renderless/time-panel/vue'
    import '@opentiny/vue-theme/time-panel/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function timePanel(props) {
      const {emitter} = props
      const defaultProps = {
        ...$props,
        ...props,
        emitter
      }
      const { ref, current: vm, parent } = useVm()
      const popper=useRef()
      const { state,handleMenuEnter,emitDestroy,handleClick } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[popper]
      })
      return (
          
<transition name="tiny-zoom-in-top" onBefore={handleMenuEnter} onAfter={emitDestroy}>    
<div ref={popper} v-ref="popper" style={{display:state.visible?'block':'none'}} style={{ width: state.width + 'px' }}  data-tag="tiny-picker-panel tiny-time-select tiny-popper" className={vc([state.popperClass)}>      
<tinyScrollbar noresize wrap-class="tiny-picker-panel__content">        

  {
    state.items.map(item=>(
      <div data-tag="tiny-time-select__item"   disabled={item.disabled} key={item.value} onClick={handleClick(item)} className={vc({
            selected: state.value === item.value,
            disabled: item.disabled,
            default: item.value === state.default
          })}>          
{item.value}

        </div>
    ))
  }
  

      </tinyScrollbar>

    </div>

  </transition>


      );
    }
    