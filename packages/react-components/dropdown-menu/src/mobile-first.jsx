
    import { renderless, api } from '@opentiny/vue-renderless/dropdown-menu/vue'
    import '@opentiny/vue-theme/dropdown-menu/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function dropdownMenu(props) {
      const {visibleArrow,arrowOffset,placement,popperClass,popperAppendToBody,checkedStatus,multiStage,maxHeight} = props
      const defaultProps = {
        ...$props,
        ...props,
        visibleArrow,arrowOffset,placement,popperClass,popperAppendToBody,checkedStatus,multiStage,maxHeight
      }
      const { ref, current: vm, parent } = useVm()
      const tooltip=useRef()
      const { state,doDestroy } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[tooltip]
      })
      return (
          
<transition name="tiny-zoom-in-top" duration={150} onAfter={doDestroy}>    
<ul data-tag="tiny-dropdown-menu" style={{display:state.showPopper?'block':'none'}}  style={{ maxHeight: `${maxHeight}px` }} className={vc([
        m(
          'min-w-[theme(spacing.18)] max-w-[theme(spacing.52)] absoulte bg-color-bg-1',
          { 'py-1.5': state.size === 'medium' },
          { 'py-1.5': state.size === 'small' },
          { 'py-0.75': state.size === 'mini' },
          { 'overflow-x-hidden scrollbar-size-0': maxHeight },
          multiStage ? '!block  rounded-none' : 'rounded py-1 shadow-sm sm:shadow-md px-1',
          state.canvasHeight ? 'sm:mb-6' : !multiStage && 'sm:my-1 my-2',
          popperClass
        )
      )}>      
<tinyTooltip ref={tooltip} v-ref="tooltip" effect="light" content={state.label} placement="top-start" manual={true} value={state.showContent} onChange={(e)=>state.showContent = e.value}>      </tinyTooltip>

      
<Slot selected-index={state.selectedIndex} parent_children={props.children} slots={props.slots}></Slot>

    </ul>

  </transition>


      );
    }
    