
    import { renderless, api } from '@opentiny/vue-renderless/carousel/vue'
    import '@opentiny/vue-theme/carousel/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function carousel(props) {
      const {initialIndex,height,trigger,autoplay,interval,indicatorPosition,arrow,type,showTitle,loop} = props
      const defaultProps = {
        ...$props,
        ...props,
        initialIndex,height,trigger,autoplay,interval,indicatorPosition,arrow,type,showTitle,loop
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,handleMouseEnter,handleMouseLeave,handleButtonEnter,handleButtonLeave,throttledArrowClick,throttledIndicatorHover,handleIndicatorClick } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div   onMouseenter={handleMouseEnter} onMouseleave={handleMouseLeave} className={vc({ 'tiny-carousel--card': type === 'card' },'tiny-carousel')}>    
<div style={{ height }}  className="tiny-carousel__container">      
<transition name={type === 'vertical' ? 'tiny-transition-carousel-arrow-top' : 'tiny-transition-carousel-arrow-left'}>        
<button style={{display:arrow !== 'never'?'block':'none'}} style={{display:(arrow === 'always' || state.hover) && (loop || state.activeIndex > 0)?'block':'none'}} type="button"   onMouseenter={handleButtonEnter('left')} onMouseleave={handleButtonLeave} onClick={throttledArrowClick(state.activeIndex - 1)} className={vc([type === 'vertical' ? 'tiny-carousel__arrow-top' : 'tiny-carousel__arrow-left','tiny-carousel__arrow]')}>          
<Component  is={type === 'vertical' ? 'icon-chevron-up' : 'icon-chevron-left'} className="tiny-svg-size"></Component>

        </button>

      </transition>

      
<transition name={type === 'vertical' ? 'tiny-transition-carousel-arrow-bottom' : 'tiny-transition-carousel-arrow-right'}>        
<button style={{display:arrow !== 'never'?'block':'none'}} style={{display:(arrow === 'always' || state.hover) && (loop || state.activeIndex < state.items.length - 1)?'block':'none'}} type="button"   onMouseenter={handleButtonEnter('right')} onMouseleave={handleButtonLeave} onClick={throttledArrowClick(state.activeIndex + 1)} className={vc([type === 'vertical' ? 'tiny-carousel__arrow-bottom' : 'tiny-carousel__arrow-right','tiny-carousel__arrow]')}>          
<Component  is={type === 'vertical' ? 'icon-chevron-down' : 'icon-chevron-right'} className="tiny-svg-size"></Component>

        </button>

      </transition>

      
<Slot  parent_children={props.children} slots={props.slots}></Slot>

    </div>

    
<ul style={{display:indicatorPosition !== 'none'?'block':'none'}}   className={vc({
        'tiny-carousel__indicators-labels': state.hasLabel,
        'tiny-carousel__indicators-title': showTitle,
        'tiny-carousel__indicators-vertical': type === 'vertical',
        'tiny-carousel__indicators-outside': indicatorPosition === 'outside' || type === 'card'
      },'tiny-carousel__indicators')}>      

  {
    state.items.map((item, index)=>(
      <li  key={index}   onMouseenter={throttledIndicatorHover(index)} onClick={handleIndicatorClick(index)} className={vc({ 'is-active': index === state.activeIndex },'tiny-carousel__indicator')}>        
<button type="button"  className="tiny-carousel__button">          
<span style={{display:state.hasLabel?'block':'none'}}>{item.label}</span>

        </button>

      </li>
    ))
  }
  

    </ul>

  </div>


      );
    }
    