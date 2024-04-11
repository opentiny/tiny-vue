
    import { renderless, api } from '@opentiny/vue-renderless/wheel/vue'
    import '@opentiny/vue-theme/wheel/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function wheel(props) {
      const {dataSource,defaultSelectedIndexs,hasFooter} = props
      const defaultProps = {
        ...$props,
        ...props,
        dataSource,defaultSelectedIndexs,hasFooter
      }
      const { ref, current: vm, parent } = useVm()
      const wheelWrapper=useRef()
      const { state,clickWheelItem } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[wheelWrapper]
      })
      return (
          
<div  className="tiny-mobile-wheel">    
<div  className="tiny-mobile-wheel__container">      
<transition name="picker-move">        
<div   className="tiny-mobile-wheel__picker__panel">          
<div  className="tiny-mobile-wheel__picker__content">            
<div  ref={wheelWrapper} v-ref="wheelWrapper" className="tiny-mobile-wheel__wheel__wrapper">              

  {
    state.pickerData.map((data, index)=>(
      <div   key={index} className="wheel">                
<ul  style={{display:hasFooter?'block':'none'}} className="wheel__scroll_hasFooter">                  

  {
    data.map(item=>(
      <li  key={item.label}  className={vc([item.selected ? 'wheel__item__selected' : '', 'wheel__item'])}>                    
{item.label}

                  </li>
    ))
  }
  

                </ul>

                
<ul  style={{display:!(hasFooter)?'block':'none'}} className="wheel__scroll_noFooter">                  

  {
    data.map((item, index)=>(
      <li  key={item.label}  onClick={clickWheelItem(index)} className={vc([item.selected ? 'wheel__item__selected' : '', 'wheel__item'])}>                    
{item.label}

                    
<IconYes  style={{display:item.selected?'block':'none'}} className="size20"></IconYes>

                  </li>
    ))
  }
  

                </ul>

              </div>
    ))
  }
  

            </div>

          </div>

        </div>

      </transition>

    </div>

  </div>


      );
    }
    