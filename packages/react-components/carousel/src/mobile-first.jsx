
    import { renderless, api } from '@opentiny/vue-renderless/carousel/vue'
    import '@opentiny/vue-theme/carousel/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function carousel(props) {
      const {initialIndex,height,trigger,autoplay,interval,indicatorPosition,indicatorStyle,arrow,type,showTitle,loop,aspectRatio} = props
      const defaultProps = {
        ...$props,
        ...props,
        initialIndex,height,trigger,autoplay,interval,indicatorPosition,indicatorStyle,arrow,type,showTitle,loop,aspectRatio
      }
      const { ref, current: vm, parent } = useVm()
      const carousel=useRef()
      const { state,handleMouseEnter,handleMouseLeave,touchstart,touchmove,touchend,handleButtonEnter,handleButtonLeave,throttledArrowClick,throttledIndicatorHover,handleIndicatorClick } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[carousel]
      })
      return (
          
<div data-tag="tiny-carousel"  onMouseenter={handleMouseEnter} onMouseleave={handleMouseLeave} className="relative overflow-hidden rounded">    
<div data-tag="tiny-carousel-block" onTouchstart={touchstart} onTouchmove={touchmove} onTouchend={touchend} ref={carousel} v-ref="carousel"  style={state.style} className="relative overflow-hidden rounded">      
<button style={{display:arrow !== 'never' && state.items.length > 1?'block':'none'}} style={{display:(arrow === 'always' || state.hover) && (loop || state.activeIndex > 0)?'block':'none'}} type="button"   onMouseenter={handleButtonEnter('left')} onMouseleave={handleButtonLeave} onClick={throttledArrowClick(state.activeIndex - 1)} className={vc([type === 'vertical' ? 'top-4 left-1/2' : 'left-4 top-1/2 -translate-y-4'],'absolute group border-none outline-0 p-0 m-0 h-8 w-8 cursor-pointer z-[3] rounded-full bg-color-bg-3 active:bg-color-bg-7 text-color-text-inverse text-center text-xs flex items-center justify-center hover:bg-color-bg-7')}>        
<Component  is={type === 'vertical' ? 'icon-chevron-up' : 'icon-chevron-left'} className="w-4.5 h-4.5 opacity-50 fill-color-icon-primary group-active:fill-color-bg-2 group-hover:fill-color-bg-1"></Component>

      </button>

      
<button style={{display:arrow !== 'never' && state.items.length > 1?'block':'none'}} style={{display:(arrow === 'always' || state.hover) && (loop || state.activeIndex < state.items.length - 1)?'block':'none'}} type="button"   onMouseenter={handleButtonEnter('right')} onMouseleave={handleButtonLeave} onClick={throttledArrowClick(state.activeIndex + 1)} className={vc([type === 'vertical' ? 'top-auto left-1/2 bottom-4' : 'right-4 top-1/2 -translate-y-4'],'absolute group border-none outline-0 p-0 m-0 h-8 w-8 cursor-pointer z-[3] rounded-full bg-color-bg-3 active:bg-color-bg-7 text-color-text-inverse text-center text-xs flex items-center justify-center hover:bg-color-bg-7')}>        
<Component  is={type === 'vertical' ? 'icon-chevron-down' : 'icon-chevron-right'} className="w-4.5 h-4.5 opacity-50 fill-color-icon-primary group-active:fill-color-bg-2 group-hover:fill-color-bg-1"></Component>

      </button>

      
<Slot  parent_children={props.children} slots={props.slots}></Slot>

    </div>

    
<ul data-tag="tiny-carousel-body" style={{display:indicatorPosition !== 'none' && state.items.length > 1?'block':'none'}}  className={vc([
        'list-none m-0 py-0 px-1 z-[2] flex justify-center items-center',
        type === 'vertical' && indicatorPosition !== 'outside'
          ? 'flex-col left-4 bottom-0 transform-none w-1 h-full py-1 px-0'
          : 'w-full h-1 left-0 bottom-4',
        indicatorPosition === 'outside' ? 'static mt-2' : 'absolute',
        state.hasLabel ? 'left-0 right-0 text-center transform-none' : '',
        showTitle ? 'left-auto right-3 bottom-1 transform-none bg-transparent' : ''
      ])}>      

  {
    state.items.map((item, index)=>(
      <li data-tag="tiny-carousel-list"  key={index}  onMouseenter={throttledIndicatorHover(index)} onClick={handleIndicatorClick(index)} className={vc([
          'group cursor-pointer',
          type === 'vertical'
            ? 'block h-auto mb-1.5 mx-0 p-0 first:pl-0 last:pr-0'
            : 'inline-block h-1 p-0 my-0 mr-1.5',
          state.hasLabel ? 'py-1.5 px-1' : ''
        ])}>        
<button type="button"  className={vc([
            m([
              'block border-none outline-0 p-0 m-0 cursor-pointer rounded-sm',
              indicatorPosition === 'outside' || indicatorStyle === 'light'
                ? 'bg-color-bg-3 hover:bg-color-brand'
                : 'bg-color-bg-6 hover:bg-color-bg-5',
              state.hasLabel ? 'py-0.5 px-4.5 text-xs' : '',
              type === 'vertical' ? 'h-1 w-1' : 'w-1 h-1',
              index === state.activeIndex ? (type === 'vertical' ? 'h-4 w-1' : 'w-4 h-1') : '',
              index === state.activeIndex
                ? indicatorPosition === 'outside' || indicatorStyle === 'light'
                  ? 'bg-color-brand'
                  : 'bg-color-bg-1'
                : ''
            ])
          )}>          
<span data-tag="tiny-carousel-label" style={{display:state.hasLabel?'block':'none'}}>{item.label}</span>

        </button>

      </li>
    ))
  }
  

    </ul>

  </div>


      );
    }
    