
    import { renderless, api } from '@opentiny/vue-renderless/picker-column/vue'
    import '@opentiny/vue-theme/picker-column/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function pickerColumn(props) {
      const {columnsItem} = props
      const defaultProps = {
        ...$props,
        ...props,
        columnsItem
      }
      const { ref, current: vm, parent } = useVm()
      const track=useRef()
      const { state,onClickItem,onTransitionEnd } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[track]
      })
      return (
          
<div  className="tiny-mobile-picker-column">    
<div  style={state.maskStyle} className="tiny-mobile-picker-column__mask"></div>

    
<div  style={{ height: itemHeight + 'px' }} className="tiny-mobile-picker-column__indicator"></div>

    
<ul  ref={track} v-ref="track" style={state.wrapperStyle} onClick={onClickItem(1)} className="tiny-mobile-picker-column__wrapper">      

  {
    state.columnsItem.values.map((item, index)=>(
      <li   key={index} onClick={onClickItem(index)} style={{ height: itemHeight + 'px', lineHeight: itemHeight + 'px' }} onTransitionend={onTransitionEnd} className={vc({
          'tiny-mobile-picker-column__item': true,
          'is-select': index === state.currentIndex
        })}>        
{item}

      </li>
    ))
  }
  

    </ul>

  </div>


      );
    }
    