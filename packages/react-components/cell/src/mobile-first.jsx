
    import { renderless, api } from '@opentiny/vue-renderless/cell/vue'
    import '@opentiny/vue-theme/cell/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function cell(props) {
      const {} = props
      const defaultProps = {
        ...$props,
        ...props,
        
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
          
<div data-tag="tiny-cell"   onClick={state.isDisabled ? '' : $emit('click', $event)} className={vc([
      m(
        data ? 'text-color-text-primary' : 'text-color-icon-placeholder',
        state.isDisplayOnly ? 'pointer-events-none cursor-default text-color-text-primary pl-0' : 'sm:border',
        state.isDisabled ? 'sm:bg-color-bg-4 cursor-not-allowed' : ''
      )
    ],'border-0 border-color-border rounded relative w-full h-7 leading-7 sm:leading-6.5 pr-5 sm:pr-7 pl-0 sm:pl-3 cursor-pointer line-clamp-1')}>    
{state.isDisplayOnly ? data || '-' : data || placeholder}

    
<div data-tag="tiny-cell-icon" style={{display:!(state.isDisplayOnly || state.isDisabled)?'block':'none'}}>      
<Slot name="icon" parent_children={props.children} slots={props.slots}>        
<Component is={icon}  className="h-4 w-4 absolute top-1.5 sm:top-1 right-0 sm:right-2 fill-color-icon-placeholder"></Component>

      </Slot>

    </div>

  </div>


      );
    }
    