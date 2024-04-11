
    import { renderless, api } from '@opentiny/vue-renderless/dropdown-menu/vue'
    import '@opentiny/vue-theme/dropdown-menu/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function dropdownMenu(props) {
      const {activeColor,closeOnClickOutside,closeOnClickOverlay,direction,duration,overlay,zIndex} = props
      const defaultProps = {
        ...$props,
        ...props,
        activeColor,closeOnClickOutside,closeOnClickOverlay,direction,duration,overlay,zIndex
      }
      const { ref, current: vm, parent } = useVm()
      const menu=useRef()
      const { state,toggleItem } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[menu]
      })
      return (
          
<div ref={menu} v-ref="menu"  className="tiny-mobile-dropdown-menu">    
<div  className="tiny-mobile-dropdown-menu__bar tiny-mobile-dropdown-menu__bar--opened">      

  {
    state.children.map((item, index)=>(
      <div  key={index} role="button" clickoutside tabindex={item.disabled ? -1 : 0}   onClick={toggleItem(index, item)} className={vc([item.disabled ? 'is-disabled' : '', item.titleClass],'tiny-mobile-dropdown-menu__item')}>        
<div  style={{ color: item.state.showPopup ? activeColor : '' }}  className={vc({
            'is-active': item.state.showPopup,
            'is-down': item.state.showPopup === (direction === 'down')
          },'tiny-mobile-dropdown-menu__title')}>          
<div  className="tiny-mobile-dropdown-menu__title-wrap">            
<span style={{display:!slots.title?'block':'none'}}>              
<span  className="tiny-mobile-dropdown-menu__title-text">{item.state.displayTitle}</span>

              
<span  style={{display:item.type === 'sort'?'block':'none'}} className="tiny-mobile-dropdown-menu__title-icon">                
<iconDelta  fill={item.state.sort === 'asc' ? (activeColor ? activeColor : '#f36f64') : '#ccc'} className="up"></iconDelta>

                
<iconDelta  fill={item.state.sort === 'desc' ? (activeColor ? activeColor : '#f36f64') : '#ccc'} className="down"></iconDelta>

              </span>

              
<Component style={{display:!(item.type === 'sort')?'block':'none'}} fill={item.state.showPopup ? (activeColor ? activeColor : '#f36f64') : '#ccc'} is={
                  item.type === 'filter'
                    ? 'IconUnfilter'
                    : item.type === 'selection' && item.state.showPopup
                    ? 'IconUp'
                    : 'IconDown'
                }  className={vc([item.type === 'filter' ? 'filter-icon' : ''])}></Component>

            </span>

            
<Slot style={{display:!(!(item.type === 'sort'))?'block':'none'}} name="title" parent_children={props.children} slots={props.slots}></Slot>

          </div>

        </div>

      </div>
    ))
  }
  

    </div>

    
<Slot  parent_children={props.children} slots={props.slots}></Slot>

  </div>


      );
    }
    