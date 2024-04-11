
    import { renderless, api } from '@opentiny/vue-renderless/carousel-item/vue'
    import '@opentiny/vue-theme/carousel-item/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function carouselItem(props) {
      const {name,title,label} = props
      const defaultProps = {
        ...$props,
        ...props,
        name,title,label
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,handleItemClick } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div data-tag="tiny-carousel-item" role="carousel-item" style={{display:state.ready?'block':'none'}}  style={state.getTransform} onClick={handleItemClick} className={vc([
      m([
        'absolute top-0 left-0 w-full inline-block overflow-hidden z-0',
        state.carouselParent.type === 'card' ? 'w-1/2 transition-transform duration-300 ease-in-out' : '',
        state.hover ? 'opacity-10' : '',
        state.animate && !state.moving ? 'transition-transform duration-300 ease-in-out' : '',
        state.inStage && state.carouselParent.type === 'card' ? 'cursor-pointer z-[1] group' : '',
        state.active ? 'z-[2]' : ''
      ])
    )}>    
<div data-tag="tiny-carousel-item-card" style={{display:state.carouselParent.type === 'card'?'block':'none'}} style={{display:!state.active?'block':'none'}}   className={vc({ 'opacity-10': state.inStage && state.carouselParent.type === 'card' && state.hover },'absolute h-full top-0 left-0 w-full opacity-20 duration-200 group-hover:opacity-10')}></div>

    
<Slot  parent_children={props.children} slots={props.slots}></Slot>

    
<div data-tag="tiny-carousel-item-title" style={{display:state.hasTitle?'block':'none'}}  className="absolute bottom-0 h-6 w-full text-left text-color-text-inverse leading-6 bg-color-text-disabled">      
<span  className="py-0 px-3 text-xs w-4/5 inline-block text-ellipsis overflow-hidden whitespace-nowrap">{title}</span>

    </div>

  </div>


      );
    }
    