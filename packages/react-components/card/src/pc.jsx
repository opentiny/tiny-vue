
    import { renderless, api } from '@opentiny/vue-renderless/card/vue'
    import '@opentiny/vue-theme/card/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function card(props) {
      const {_constants,modelValue,src,title,customClass,height,label,autoWidth,options,iconMore,size,status,checkType,type,disabled} = props
      const defaultProps = {
        ...$props,
        ...props,
        _constants,modelValue,src,title,customClass,height,label,autoWidth,options,iconMore,size,status,checkType,type,disabled
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,handleChange,handelIconClick } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div   onClick={$emit('click', $event)} className={vc([
      `tiny-card--${state.size}`,
      `tiny-card--${state.status}`,
      state.autoWidth ? '' : `tiny-card--${state.size}-width`,
      state.itemChecked ? 'tiny-card--item-checked' : '',
      state.disabled ? 'tiny-card--disabled' : '',
      state.customClass
    ],'tiny-card')}>    
<div  style={{ 'display': state.type === 'text' ? 'flex' : 'block' }} className="tiny-card__body">      
<div  style={{display:state.checkType === 'checkbox' && state.type === 'text'?'block':'none'}} className="tiny-card--checkbox">        
<tinyCheckbox value={state.model} onChange={(e)=>state.model = e.value} label={label} text="" disabled={state.disabled} onChange={handleChange}></tinyCheckbox>

      </div>

      
<div  style={{display:state.checkType === 'radio' && state.type === 'text'?'block':'none'}} className="tiny-card--radio">        
<tinyRadio value={state.model} onChange={(e)=>state.model = e.value} label={label} disabled={state.disabled} onChange={handleChange}>          


          
<span ></span>

        </tinyRadio>

      </div>

      
<div  style={{display:state.type === 'image'?'block':'none'}} className="tiny-card--image">        
<img src={src}></img>

      </div>

      
<div  style={{display:state.type === 'video'?'block':'none'}} className="tiny-card--video">        
<video src={src} controls></video>

      </div>

      
<div   className={vc([`tiny-card--${state.size}-padding`,'tiny-card--logo]')}>        
<div  style={{display:state.type === 'logo'?'block':'none'}} className="tiny-card--logo__head">          
<img src={src}></img>

        </div>

        
<div  style={{display:title || slots.title?'block':'none'}}  className={vc([state.type === 'logo' ? 'tiny-card--logo__title--type-logo' : '','tiny-card--logo__title]')}>          
<Slot name="title-left" parent_children={props.children} slots={props.slots}> </Slot>

          
<Slot name="title" parent_children={props.children} slots={props.slots}>            
<p  className="tiny-card--logo__title--p">{title}</p>

          </Slot>

          
<Slot name="title-right" parent_children={props.children} slots={props.slots}> </Slot>

        </div>

        
<div   style={{ height: state.height }} className={vc([state.type === 'logo' ? 'tiny-card--logo__main-type-logo' : '','tiny-card--logo__main]')}>          
<Slot  parent_children={props.children} slots={props.slots}> </Slot>

        </div>

      </div>

    </div>

    
<div  style={{display:state.effectOptions.length || slots.footer?'block':'none'}} className="tiny-card__footer">      
<div style={{display:slots.footer?'block':'none'}}  className="tiny-card__footer-footer">        
<Slot name="footer" parent_children={props.children} slots={props.slots}> </Slot>

      </div>

      
<div style={{display:state.effectOptions.length?'block':'none'}}  className="tiny-card__footer-options">        

  {
    state.effectOptions.slice(0, state.sliceNum).map((item, index)=>(
      <div   key={item.text + index}  onClick={handelIconClick(item, index, $event)} className={vc([item.disabled ? 'tiny-card__footer-options-disabled' : '','tiny-card__footer-options-div]')}>          
<Component is={item.icon}   className={vc([item.disabled ? 'tiny-card__footer-options-icon-disabled' : '','tiny-card__footer-options-icon]')}></Component>

          
<span style={{display:item.text?'block':'none'}}  className="tiny-card__footer-options-span">{item.text}</span>

        </div>
    ))
  }
  

        
<div   style={{display:state.effectOptions.length === state.iconNum?'block':'none'}} onClick={handelIconClick(state.effectOptions[state.sliceNum], state.sliceNum, $event)} className={vc([state.effectOptions[state.sliceNum].disabled ? 'tiny-card__footer-options-disabled' : '','tiny-card__footer-options-div]')}>          
<Component is={state.effectOptions[state.sliceNum].icon}   className={vc([state.effectOptions[state.sliceNum].disabled ? 'tiny-card__footer-options-icon-disabled' : '','tiny-card__footer-options-icon]')}></Component>

          
<span style={{display:state.effectOptions[state.sliceNum].text?'block':'none'}}  className="tiny-card__footer-options-span">{state.effectOptions[state.sliceNum].text}</span>

        </div>

        
<tinyDropdown  style={{display:state.effectOptions.length > state.iconNum?'block':'none'}} show-self-icon className="tiny-card__footer-options-dropdown">          
<Component is={iconMore}  className="tiny-card__footer-options-icon"></Component>

          
<span style={{display:state.effectOptions[0].text?'block':'none'}}  className="tiny-card__footer-more">{t('ui.base.more')}</span>

          
<template slot>            
<tinyDropdown placement="bottom">              

  {
    state.effectOptions.slice(state.sliceNum).map((item, index)=>(
      <tinyDropdown  key={item.text + index}>                
<div onClick={handelIconClick(item, index + state.sliceNum, $event)}   className={vc([
                    'tiny-card__footer-dropdown-item',
                    item.disabled ? 'tiny-card__footer-dropdown-item-disabled' : ''
                  ])}>                  
<Component is={item.icon}   className={vc([item.disabled ? 'tiny-card__footer-options-icon-disabled' : '','tiny-card__footer-options-icon]')}></Component>

                  
<span style={{display:item.text?'block':'none'}}>{item.text}</span>

                </div>

              </tinyDropdown>
    ))
  }
  

            </tinyDropdown>

          </template>

        </tinyDropdown>

      </div>

    </div>

  </div>


      );
    }
    