
    import { renderless, api } from '@opentiny/vue-renderless/upload-dragger/vue'
    import '@opentiny/vue-theme/upload-dragger/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function uploadDragger(props) {
      const {disabled,customClass} = props
      const defaultProps = {
        ...$props,
        ...props,
        disabled,customClass
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,onDrop,onDragOver } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div data-tag="tiny-upload-dragger"  onDrop={onDrop} onDragover={onDragOver} onDragleave={state.dragover = false} className={vc([
      m(
        'min-w-[theme(spacing.72)] min-h-[theme(spacing.40)] border border-dashed rounded',
        state.dragover ? 'border-color-brand' : 'border-color-none-hover',
        customClass
      )
    )}>    
<Slot  parent_children={props.children} slots={props.slots}></Slot>

  </div>


      );
    }
    