
    import { renderless, api } from '@opentiny/vue-renderless/slider-button-group/vue'
    import '@opentiny/vue-theme/slider-button-group/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function sliderButton(props) {
      const {noArrow,flex,size,sliderSpace,sliderWidth,delay,sliderHeight,data,duration,sliderCount,currentIndex} = props
      const defaultProps = {
        ...$props,
        ...props,
        noArrow,flex,size,sliderSpace,sliderWidth,delay,sliderHeight,data,duration,sliderCount,currentIndex
      }
      const { ref, current: vm, parent } = useVm()
      const slideMain=useRef()
      const { state,arrowLeftHandler,clickHandler,arrowRightHandler } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[slideMain]
      })
      return (
          
<div  data-tag="tiny-slider-button-bar" className="items-center w-full flex">    
<div  onClick={arrowLeftHandler} className={vc([
        'hidden flex-none h-12 items-center select-none cursor-pointer bg-color-bg-1',
        { 'sm:flex': sliderState.canLeftScroll || sliderState.canRightScroll }
      ])}>      
<Slot name="left-bar" data-tag="tiny-slider-button-bar-left" parent_children={props.children} slots={props.slots}>        
<div  className="w-7 flex items-center justify-center h-full pr-2">          
<IconChevronLeft  className={vc(['h-5 w-5', sliderState.canLeftScroll ? 'fill-color-icon-primary' : 'fill-color-text-disabled'])}></IconChevronLeft>

        </div>

      </Slot>

    </div>

    
<div ref={slideMain} v-ref="slideMain"  className={vc([
        'inline-flex rounded relative scrollbar-size-0 box-border flex-auto overflow-auto',
        size === 'large' ? 'h-auto' : size === 'medium' ? 'h-8' : 'h-7'
      ])}>      
<div  style={{
          'transition': 'left 0.5s',
          'left': sliderSpace + 'px',
          'width': sliderWidth + 'px',
          'height': sliderHeight + 'px'
        }} className={vc(['absolute bg-color-bg-1 shadow h-6 rounded', size === 'large' ? 'top-1' : 'top-0.5'])}></div>


      
<div  className="flex bg-color-bg-2 rounded-md">        

  {
    data.map((node, index)=>(
      <div ref={'block' + index}  key={index} style={{ width: flex ? 100 / data.length + '%' : null }} onClick={clickHandler(index)}>          
<Slot data-tag="tiny-slider-button-bar-content" name="content" slot-scoped={{
              node,
              index,
              show:
                index > sliderState.boundingIndex.left &&
                (sliderState.boundingIndex.right === -1 || index < sliderState.boundingIndex.right)
            }} parent_children={props.children} slots={props.slots}></Slot>

        </div>
    ))
  }
  

      </div>

    </div>

    
<div  onClick={arrowRightHandler} className={vc([
        'hidden flex-none h-12 cursor-pointer items-center select-none bg-color-bg-1',
        { 'sm:flex': sliderState.canLeftScroll || sliderState.canRightScroll }
      ])}>      
<Slot name="right-bar" data-tag="tiny-slider-button-bar-right" parent_children={props.children} slots={props.slots}>        
<div  className="w-7 h-full flex items-center justify-center pl-2">          
<IconChevronRight  className={vc(['h-5 w-5', sliderState.canRightScroll ? 'fill-color-icon-primary' : 'fill-color-text-disabled'])}></IconChevronRight>

        </div>

      </Slot>

    </div>

  </div>


      );
    }
    