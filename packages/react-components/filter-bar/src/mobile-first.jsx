
    import { renderless, api } from '@opentiny/vue-renderless/filter-bar/vue'
    import '@opentiny/vue-theme/filter-bar/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function filterBar(props) {
      const {} = props
      const defaultProps = {
        ...$props,
        ...props,
        
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,click } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div data-tag="tiny-filter-bar"  className="relative text-sm text-color-text-primary w-full h-11 flex items-center justify-center px-4 border-b-0.5 border-color-border-separator">    

  {
    data.map((item, index)=>(
      <div data-tag="tiny-filter-bar-body"  key={index}  onClick={click(index)} className={vc([
        'flex-1 flex items-center justify-center cursor-pointer overflow-hidden mx-3',
        {
          'text-color-brand': modelValue === index
        }
      ])}>      
<Slot data={item} index={index} active={modelValue === index} parent_children={props.children} slots={props.slots}>        
<span data-tag="tiny-filter-bar-item"  title={item} className="truncate">{item}</span>

        
<IconArrowBottom custom-class="flex-none w-3 h-3 ml-2 fill-current transition-transform duration-300"  className={vc([modelValue !== index ? 'text-color-icon-placeholder rotate-0' : 'rotate-180')}></IconArrowBottom>

      </Slot>

    </div>
    ))
  }
  

    
<div  data-tag="tiny-filter-bar-icon" className="h-full flex items-center justify-center truncate">      
<Slot name="icon" parent_children={props.children} slots={props.slots}></Slot>

    </div>

  </div>


      );
    }
    