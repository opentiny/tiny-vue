
    import { renderless, api } from '@opentiny/vue-renderless/dropdown-item/vue'
    import '@opentiny/vue-theme/dropdown-item/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function dropdownItem(props) {
      const {disabled,divided,icon,itemData,selected,currentIndex,title,titleClass,options,type,label,selectedField,multiStage,//,tiny新增,appendToBody,textField,tip,tipPosition} = props
      const defaultProps = {
        ...$props,
        ...props,
        disabled,divided,icon,itemData,selected,currentIndex,title,titleClass,options,type,label,selectedField,multiStage,//,tiny新增,appendToBody,textField,tip,tipPosition
      }
      const { ref, current: vm, parent } = useVm()
      const dropdownItem=useRef()
      const { state,handleClick } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[dropdownItem]
      })
      return (
          


  
<tinyTooltip content={getTip} placement={tipPosition}>    
<li   ref={dropdownItem} v-ref="dropdownItem" onClick={handleClick}  aria-disabled={disabled} tabindex={disabled ? null : -1} className={vc({
        'is-disabled': disabled,
        'tiny-dropdown-item--divided tiny-dropdown-menu__item--divided': divided,
        'tiny-dropdown-item--check-status': state.checkedStatus && selected,
        'has-children': itemData.children && itemData.children.length
      },'tiny-dropdown-item tiny-dropdown-menu__item')}>      
<div  className="tiny-dropdown-item__wrap">        
<span style={{display:itemData.children && itemData.children.length?'block':'none'}}  className="tiny-dropdown-item__expand tiny-dropdown-menu__item-expand">          
<Component is={state.getIcon}></Component>

        </span>

        
<div  className="tiny-dropdown-item__content tiny-dropdown-menu__item-content">          
<Component style={{display:icon?'block':'none'}} is={icon}  className="tiny-svg-size"></Component>

          
<span  className="tiny-dropdown-item__label">            
<Slot item-data={itemData} parent_children={props.children} slots={props.slots}>              
<span >{label}</span>

            </Slot>

          </span>

        </div>

        
<ul style={{display:itemData.children && itemData.children.length?'block':'none'}}  className={vc([
            'tiny-dropdown-menu',
            'tiny-dropdown-item--child tiny-dropdown-menu__item--child',
            state.popperClass
          ])}>          

  {
    itemData.children.map((item, index)=>(
      <tinyDropdown  key={index} label={item[state.textField]} item-data={item} icon={item.icon} disabled={item.disabled} divided={item.divided} tip={item.tip} tip-position={item.tipPosition}>            
<Slot item-data={item} parent_children={props.children} slots={props.slots}></Slot>

          </tinyDropdown>
    ))
  }
  

        </ul>

      </div>

    </li>

  </tinyTooltip>


      );
    }
    