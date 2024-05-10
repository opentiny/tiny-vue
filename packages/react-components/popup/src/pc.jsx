
    import { renderless, api } from '@opentiny/vue-renderless/popup/vue'
    import '@opentiny/vue-theme/popup/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function popup(props) {
      const {_constants,closeIcon,closeIconPosition,closeOnClickOverlay,closeable,duration,lazyRender,lockScroll,modelValue,overlay,overlayClass,overlayStyle,popupClass,popupStyle,position,round,safeAreaInsetBottom,transition,zIndex} = props
      const defaultProps = {
        ...$props,
        ...props,
        _constants,closeIcon,closeIconPosition,closeOnClickOverlay,closeable,duration,lazyRender,lockScroll,modelValue,overlay,overlayClass,overlayStyle,popupClass,popupStyle,position,round,safeAreaInsetBottom,transition,zIndex
      }
      const { ref, current: vm, parent } = useVm()
      const popup=useRef()
      const { state,opened,closed,close,clickOverlay } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[popup]
      })
      return (
          
<div >    
<transition name={state.transitionName} onAfter={opened} onAfter={closed}>      
<div style={{display:modelValue?'block':'none'}} ref={popup} v-ref="popup"  style={state.style} onClick={$emit('click')}  className={vc([round ? 'tiny-popup--round' : '', position ? 'tiny-popup--' + position : '', popupClass],'tiny-popup')}>        
<Slot  parent_children={props.children} slots={props.slots}></Slot>

        
<iconClose  style={{display:closeable?'block':'none'}} fill="#c8c9cc" tabindex="0" onClick={close} className="tiny-popup__close-icon tiny-popup__close-icon--top-right"></iconClose>

      </div>

    </transition>

    
<transition name="tiny-fade">      
<div style={{display:state.opened && overlay?'block':'none'}} style={state.overlayStyle}   onClick={clickOverlay} className={vc([overlayClass,'tiny-overlay')}>        
<Slot name="overlay" parent_children={props.children} slots={props.slots}></Slot>

      </div>

    </transition>

  </div>


      );
    }
    