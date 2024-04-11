
    import { renderless, api } from '@opentiny/vue-renderless/index-bar/vue'
    import '@opentiny/vue-theme/index-bar/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function indexBar(props) {
      const {indexList} = props
      const defaultProps = {
        ...$props,
        ...props,
        indexList
      }
      const { ref, current: vm, parent } = useVm()
      const indexBarContent=useRef()
const indexSide=useRef()
      const { state,handleScroll,handleTouchDown,handleTouchMove,handleTouchUp,handleIndexClick } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[indexBarContent,indexSide]
      })
      return (
          
<div  onScroll={handleScroll} className="tiny-mobile-index-bar">    
<div ref={indexBarContent} v-ref="indexBarContent">      
<Slot  parent_children={props.children} slots={props.slots}></Slot>

    </div>


    
<div ref={indexSide} v-ref="indexSide"  onMousedown={handleTouchDown} onMousemove={handleTouchMove} onMouseup={handleTouchUp} onTouchstart={handleTouchDown} onTouchmove={handleTouchMove} onTouchend={handleTouchUp} className="tiny-mobile-index-bar__side">      

  {
    indexList.map((label, index)=>(
      <span  key={label} id={index}  onClick={handleIndexClick({ index, label })} className={vc(['tiny-mobile-index-bar__label', state.index === index ? 'tiny-mobile-index-bar__label--active' : null])}>        
{label}

      </span>
    ))
  }
  

    </div>

  </div>


      );
    }
    