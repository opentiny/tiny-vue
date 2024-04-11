
    import { renderless, api } from '@opentiny/vue-renderless/pull-refresh/vue'
    import '@opentiny/vue-theme/pull-refresh/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function pullRefresh(props) {
      const {disabled,modelValue,headHeight,successText,pullingText,loosingText,loadingText,pullDistance,successDuration,animationDuration,loadingOptions,selfSimulate} = props
      const defaultProps = {
        ...$props,
        ...props,
        disabled,modelValue,headHeight,successText,pullingText,loosingText,loadingText,pullDistance,successDuration,animationDuration,loadingOptions,selfSimulate
      }
      const { ref, current: vm, parent } = useVm()
      const root=useRef()
const track=useRef()
const head=useRef()
      const { state,onTouchStart,onTouchEnd } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[root,track,head]
      })
      return (
          
<div ref={root} v-ref="root" data-tag="tiny-pull-refresh" style={{ '--tiny-pull-refresh-head-height': state.headerHeight }}>    
<div ref={track} v-ref="track"  data-tag="tiny-pull-refresh__track" data-tiny-touch-simulate-container style={{
        transitionDuration: `${state.duration}ms`,
        transform: state.distance ? `translate3d(0,${state.distance}px, 0)` : ''
      }} onTouchstart={onTouchStart} onTouchend={onTouchEnd} onTouchcancel={onTouchEnd} className="relative h-fit transition-transform">      
<Component is={HeadComponent} ref={head} v-ref="head"></Component>

      
<Slot  parent_children={props.children} slots={props.slots}></Slot>

    </div>

  </div>


      );
    }
    