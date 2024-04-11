
    import { renderless, api } from '@opentiny/vue-renderless/action-menu/vue'
    import '@opentiny/vue-theme/action-menu/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function actionMenu(props) {
      const {options,maxShowNum,moreText,spacing,textField,popperClass,popperAppendToBody,trigger,suffixIcon,showIcon} = props
      const defaultProps = {
        ...$props,
        ...props,
        options,maxShowNum,moreText,spacing,textField,popperClass,popperAppendToBody,trigger,suffixIcon,showIcon
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,handleItemClick,handleMoreClick,visibleChange } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div  className="tiny-action-menu">    
<ul  className="tiny-action-menu__wrap">      

  {
    state.visibleOptions.map((visableItem, index)=>(
      <li  key={index}  className={vc(['tiny-action-menu__item', 'tiny-action-menu__item-visable', { 'is-disabled': visableItem.disabled }])}>        
<tinyDropdown item-data={visableItem} label={visableItem[textField]} text-field={textField} disabled={visableItem.disabled} icon={visableItem.icon} onItem={handleItemClick}>          
<template slot>            
<Slot name="item" data={itemData} parent_children={props.children} slots={props.slots}></Slot>

          </template>

        </tinyDropdown>

        
<span  style={{ margin: '0 ' + state.spacing }} className="tiny-action-menu__item-line"></span>

      </li>
    ))
  }
  


      
<li style={{display:state.moreOptions.length?'block':'none'}}  className="tiny-action-menu__item">        
<tinyDropdown title={moreText} trigger={trigger} suffix-icon={suffixIcon} show-icon={showIcon} onItem={handleItemClick} onHandle={handleMoreClick} onVisible={visibleChange}>          
<template slot>            
<tinyDropdown text-field={textField} popper-class={popperClass}>              

  {
    state.moreOptions.map((item, index)=>(
      <tinyDropdown  key={index} item-data={item} label={item[textField]} disabled={item.disabled}>                
<template slot>                  
<Slot name="item" data={itemData} parent_children={props.children} slots={props.slots}></Slot>

                </template>

              </tinyDropdown>
    ))
  }
  

            </tinyDropdown>

          </template>

        </tinyDropdown>

      </li>

    </ul>

  </div>


      );
    }
    