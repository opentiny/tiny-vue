
    import { renderless, api } from '@opentiny/vue-renderless/slide-bar/vue'
    import '@opentiny/vue-theme/slide-bar/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function slideBar(props) {
      const {initBlocks,wheelBlocks,modelValue,tag,subTag} = props
      const defaultProps = {
        ...$props,
        ...props,
        initBlocks,wheelBlocks,modelValue,tag,subTag
      }
      const { ref, current: vm, parent } = useVm()
      const wrapper=useRef()
const insider=useRef()
      const { state,mouseEvent,leftClick,blockClick,rightClick } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[wrapper,insider]
      })
      return (
          
<div  onMousewheel={mouseEvent} ref={wrapper} v-ref="wrapper" className="tiny-slide-bar">    
<iconChevron   onClick={leftClick} className={vc([state.showLeft ? '' : 'tiny-disabled'],'tiny-svg-size icon-chevron-left')}></iconChevron>

    
<div  className="tiny-slide-bar__content">      
<transition >        
<Component is={tag}  style={{ width: state.blockWrapper + 'px' }} ref={insider} v-ref="insider" className="tiny-slide-bar__list tiny-repeat rightAni-enter-active">          

  {
    modelValue.map((item, key)=>(
      <Component is={subTag}  key={key}   style={{
              width: state.blockWidth + 'px',
              'margin-left': key === 0 ? 0 : state.blockMargin + 'px'
            }} onClick={blockClick({ item, index: key })} className={vc([state.currentIndex === key ? 'tiny-slide-bar__select' : ''],'block')}>            
<ul >              
<li >                
<Slot slotData={item} parent_children={props.children} slots={props.slots}>                  
<div >{item.title}</div>

                  
<div >                    
<iconRadio  className="tiny-svg-size"></iconRadio>

                  </div>

                  
<div >{item.lang}</div>

                </Slot>

              </li>

            </ul>

          </Component>
    ))
  }
  

        </Component>

      </transition>

    </div>

    
<iconChevron   onClick={rightClick} className={vc([state.showRight ? 'tiny-disabled' : ''],'tiny-svg-size icon-chevron-right')}></iconChevron>

  </div>


      );
    }
    