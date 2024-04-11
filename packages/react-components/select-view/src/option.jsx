
    import { renderless, api } from '@opentiny/vue-renderless/select-view/vue'
    import '@opentiny/vue-theme/select-view/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function selectView(props) {
      const {selected,multiple,readonly} = props
      const defaultProps = {
        ...$props,
        ...props,
        selected,multiple,readonly
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
          
<div  onClick={$emit('click', $event)} className="flex items-start leading-5.5 py-3 cursor-pointer select-none border-b-0.5 border-color-bg-4">    
<Component style={{display:multiple?'block':'none'}} is={selected ? 'icon-checked-sur' : 'icon-check'}  className={vc([
        'flex-none w-4 h-4 mt-0.5 mr-3',
        selected && !readonly ? 'fill-color-brand' : 'fill-color-icon-disabled'
      ])}></Component>

    
<div  className={vc(['flex-auto truncate', { 'text-color-brand': !multiple && selected }])}>      
<Slot  parent_children={props.children} slots={props.slots}></Slot>

    </div>

  </div>


      );
    }
    