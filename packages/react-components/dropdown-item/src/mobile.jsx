
    import { renderless, api } from '@opentiny/vue-renderless/dropdown-item/vue'
    import '@opentiny/vue-theme/dropdown-item/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function dropdownItem(props) {
      const {modelValue,title,disabled,titleClass,options,icon,type} = props
      const defaultProps = {
        ...$props,
        ...props,
        modelValue,title,disabled,titleClass,options,icon,type
      }
      const { ref, current: vm, parent } = useVm()
      const wrapper=useRef()
      const { state,clickWrapper,open,close,opened,closed,clickItem,tagClick,reset,confirm } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[wrapper]
      })
      return (
          
<div ref={wrapper} v-ref="wrapper" style={{display:state.showWrapper?'block':'none'}}   onClick={clickWrapper} style={state.itemStyle} className={vc(['tiny-mobile-dropdown-item--' + state.direction,'tiny-mobile-dropdown-item')}>    
<tinyPopup value={state.showPopup} onChange={(e)=>state.showPopup = e.value} popup-class="tiny-mobile-dropdown-item__content" overlay={state.overlay} close-on-click-overlay={state.closeOnClickOverlay} closeable={false} position={state.direction === 'down' ? 'top' : 'bottom'} duration={state.transition ? state.duration : 0} onOpen={open} onClose={close} onOpened={opened} onClosed={closed}>      
<Slot  parent_children={props.children} slots={props.slots}>        
<div  style={{display:type === 'selection'?'block':'none'}} className="tiny-mobile-dropdown-item__options">          

  {
    options.map((item, index)=>(
      <div   key={index}  tabindex="0" onClick={clickItem(item.value)} className={vc([item.value === modelValue ? 'is-active' : '','tiny-mobile-dropdown-item__cell tiny-mobile-dropdown-item__option]')}>            
<div  className="tiny-mobile-dropdown-item__option-icon">              
<Slot name="icon" parent_children={props.children} slots={props.slots}>                
<Component is={icon}></Component>

              </Slot>

            </div>

            
<div  className="tiny-mobile-dropdown-item__option-title">              
<Slot name="title" title-data={item} parent_children={props.children} slots={props.slots}>                
<span style={{
                    color: item.value === modelValue && state.activeColor ? state.activeColor : ''
                  }}>{item.text}</span>

              </Slot>

            </div>

            
<div  className="tiny-mobile-dropdown-item__option-value">              
<iconYes style={{display:item.value === modelValue?'block':'none'}} fill={state.activeColor ? state.activeColor : '#f36f64'}></iconYes>

            </div>

          </div>
    ))
  }
  

        </div>

        
<div  style={{display:type === 'filter'?'block':'none'}} clickoutside className="tiny-mobile-dropdown-item__filter">          
<div  className="tiny-mobile-dropdown-item__filter-wrap">            

  {
    options.map((item, key)=>(
      <div  key={key}  className="tiny-mobile-dropdown-item__cell tiny-mobile-dropdown-item__filter-item">              
<span  className="tiny-mobile-dropdown-item__filter-title">{item.title}</span>

              
<ul >                

  {
    options.length === 0 ? (item.data = []) : item.data.map((tag, tagkey)=>(
      <li   style={getOptionStyle(tag, modelValue[key])} onClick={tagClick(key, tag, $event)} key={tagkey}  className={vc([modelValue[key].indexOf(tag.value) > -1 ? 'checked' : ''],'tiny-mobile-dropdown-item__filter-li')}>                  
{tag.text}

                </li>
    ))
  }
  

              </ul>

            </div>
    ))
  }
  

          </div>

          
<div  className="tiny-mobile-dropdown-item__filter-operate">            
<tinyButton onClick={reset}> Reset </tinyButton>

            
<tinyButton type="primary" onClick={confirm}> OK </tinyButton>

          </div>

        </div>

      </Slot>

    </tinyPopup>

  </div>


      );
    }
    