
    import { renderless, api } from '@opentiny/vue-renderless/split/vue'
    import '@opentiny/vue-theme/split/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function split(props) {
      const {modelValue,mode,leftTopMin,rightBottomMin,disabled,triggerSimple,collapseLeftTop,collapseRightBottom,threeAreas,scrollable} = props
      const defaultProps = {
        ...$props,
        ...props,
        modelValue,mode,leftTopMin,rightBottomMin,disabled,triggerSimple,collapseLeftTop,collapseRightBottom,threeAreas,scrollable
      }
      const { ref, current: vm, parent } = useVm()
      const outerWrapper=useRef()
      const { state,handleMousedown,buttonMousedown,buttonLeftTopClick,buttonRightBottomClick } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[outerWrapper]
      })
      return (
          
<div ref={outerWrapper} v-ref="outerWrapper"  className={vc([state.wrapperClasses)}>    
<div style={{display:state.isHorizontal?'block':'none'}}  className={vc([`${state.prefix}-horizontal`)}>      
<div style={{
          right: `${state.anotherOffset}%`,
          width: state.anotherOffset !== 100 && threeAreas ? `${state.leftTopPane}px` : ''
        }}   className={vc([state.paneClasses,'left-pane')}>        
<Slot name="left" parent_children={props.children} slots={props.slots}></Slot>

      </div>

      
<div  style={{ left: threeAreas ? `${state.leftTopPane}px` : `${state.offset}%` }} onMousedown={handleMousedown} className={vc([
          `${state.prefix}-trigger-con`,
          `${state.prefix}-trigger-con-vertical`,
          disabled ? `${state.prefix}-trigger-con-disabled` : ``,
          state.isMoving ? `${state.prefix}-trigger-con-drag` : ``,
          state.offset === 0 && triggerSimple ? `${state.prefix}-trigger-con-left-active` : ``,
          triggerSimple ? `${state.prefix}-trigger-con-simple` : ``
        ])}>        
<Slot name="trigger" parent_children={props.children} slots={props.slots}>          
<div  className={vc([`${state.prefix}-trigger`, `${state.prefix}-trigger-vertical`])}>            
<div style={{display:!triggerSimple?'block':'none'}}  className={vc([`${state.prefix}-trigger-bar-con`, 'vertical'])}>              

  {
    3.map(i=>(
      <i  once  key={`trigger-${i}`} className={vc([`${state.prefix}-trigger-bar`)}></i>
    ))
  }
  

            </div>

          </div>

        </Slot>

        
<div  style={{display:triggerSimple?'block':'none'}} onMousedown={buttonMousedown} onClick={buttonLeftTopClick} className={vc([
            `${state.prefix}-trigger-button`,
            `${state.prefix}-trigger-left-button`,
            state.offset === 100 ? `${state.prefix}-trigger-button-active` : ``,
            state.offset === 100 || collapseLeftTop ? `${state.prefix}-trigger-button-show` : ``
          ])}>          
<iconLeft  className="tiny-svg-size"></iconLeft>

        </div>

        
<div  style={{display:triggerSimple?'block':'none'}} onMousedown={buttonMousedown} onClick={buttonRightBottomClick} className={vc([
            `${state.prefix}-trigger-button`,
            `${state.prefix}-trigger-right-button`,
            state.offset === 0 ? `${state.prefix}-trigger-button-active` : ``,
            state.offset === 0 || collapseRightBottom ? `${state.prefix}-trigger-button-show` : ``
          ])}>          
<iconRight  className="tiny-svg-size"></iconRight>

        </div>

      </div>

      
<div style={{
          left: threeAreas ? `${state.leftTopPane}px` : `${state.offset}%`,
          width: threeAreas ? `calc(100% - ${state.leftTopPane}px)` : ``
        }}   className={vc([state.paneClasses,'right-pane')}>        
<Slot name="right" parent_children={props.children} slots={props.slots}></Slot>

      </div>

    </div>

    
<div style={{display:!(triggerSimple)?'block':'none'}}  className={vc([`${state.prefix}-vertical`)}>      
<div style={{
          bottom: `${state.anotherOffset}%`,
          height: state.anotherOffset !== 100 && threeAreas ? `${state.leftTopPane}px` : ''
        }}   className={vc([state.paneClasses,'top-pane')}>        
<Slot name="top" parent_children={props.children} slots={props.slots}></Slot>

      </div>

      
<div  style={{ top: threeAreas ? `${state.leftTopPane}px` : `${state.offset}%` }} onMousedown={handleMousedown} className={vc([
          `${state.prefix}-trigger-con`,
          `${state.prefix}-trigger-con-horizontal`,
          disabled ? `${state.prefix}-trigger-con-disabled` : ``,
          state.isMoving ? `${state.prefix}-trigger-con-drag` : ``,
          state.offset === 0 && triggerSimple ? `${state.prefix}-trigger-con-top-active` : ``,
          triggerSimple ? `${state.prefix}-trigger-con-simple` : ``
        ])}>        
<Slot name="trigger" parent_children={props.children} slots={props.slots}>          
<div  className={vc([`${state.prefix}-trigger`, `${state.prefix}-trigger-horizontal`])}>            
<div style={{display:!triggerSimple?'block':'none'}}  className={vc([`${state.prefix}-trigger-bar-con`, 'horizontal'])}>              

  {
    3.map(i=>(
      <i  once  key={`trigger-${i}`} className={vc([`${state.prefix}-trigger-bar`)}></i>
    ))
  }
  

            </div>

          </div>

        </Slot>

        
<div  style={{display:triggerSimple?'block':'none'}} onMousedown={buttonMousedown} onClick={buttonLeftTopClick} className={vc([
            `${state.prefix}-trigger-button`,
            `${state.prefix}-trigger-top-button`,
            state.offset === 100 ? `${state.prefix}-trigger-button-active` : ``,
            state.offset === 100 || collapseLeftTop ? `${state.prefix}-trigger-button-show` : ``
          ])}>          
<iconLeft  className="tiny-svg-size"></iconLeft>

        </div>

        
<div  style={{display:triggerSimple?'block':'none'}} onMousedown={buttonMousedown} onClick={buttonRightBottomClick} className={vc([
            `${state.prefix}-trigger-button`,
            `${state.prefix}-trigger-bottom-button`,
            state.offset === 0 ? `${state.prefix}-trigger-button-active` : ``,
            state.offset === 0 || collapseRightBottom ? `${state.prefix}-trigger-button-show` : ``
          ])}>          
<iconRight  className="tiny-svg-size"></iconRight>

        </div>

      </div>

      
<div style={{
          top: threeAreas ? `${state.leftTopPane}px` : `${state.offset}%`,
          height: threeAreas ? `calc(100% - ${state.leftTopPane}px)` : ``
        }}   className={vc([state.paneClasses,'bottom-pane')}>        
<Slot name="bottom" parent_children={props.children} slots={props.slots}></Slot>

      </div>

    </div>

  </div>


      );
    }
    