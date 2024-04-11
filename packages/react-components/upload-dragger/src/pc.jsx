
    import { renderless, api } from '@opentiny/vue-renderless/upload-dragger/vue'
    import '@opentiny/vue-theme/upload-dragger/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function uploadDragger(props) {
      const {} = props
      const defaultProps = {
        ...$props,
        ...props,
        
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
          
<div   onDrop={onDrop} onDragover={onDragOver} onDragleave={state.dragover = false} className={vc({ 'is-dragover': state.dragover },'tiny-upload-dragger')}>    
<Slot  parent_children={props.children} slots={props.slots}></Slot>

  </div>


      );
    }
    