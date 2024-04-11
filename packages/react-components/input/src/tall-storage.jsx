
    import { renderless, api } from '@opentiny/vue-renderless/input/vue'
    import '@opentiny/vue-theme/input/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function input(props) {
      const {isMemoryStorage,localstorageData} = props
      const defaultProps = {
        ...$props,
        ...props,
        isMemoryStorage,localstorageData
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,mousedown,keydownEvent,selectItem } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div  onMousedown={mousedown} className="tiny-tall-storage">    
<div  className="tiny-storage-list-style">      
<ul onKeydown={keydownEvent}  className="tiny-storage-list">        

  {
    localstorageData.map(item=>(
      <li  key={item}   onClick={selectItem(item)} className={vc([state.hoverValue === item ? 'item-hover' : ''],'tiny-storage-item')}>          
{item}

        </li>
    ))
  }
  

      </ul>

    </div>

  </div>


      );
    }
    