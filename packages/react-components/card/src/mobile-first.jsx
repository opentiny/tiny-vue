
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
          
<div data-tag="tiny-card"  onClick={$emit('click', $event)} className={vc([
      m(
        gcls('card'),
        gcls(`size-${state.size}`),
        gcls(`status-${state.status}`),
        gcls(!state.autoWidth && `size-${state.size}-width`),
        state.itemChecked ? 'border-color-brand' : '',
        state.disabled ? 'bg-color-bg-2' : '',
        state.customClass
      )
    )}>    
<div data-tag="tiny-card-body"  className={vc([state.type === 'text' ? 'flex' : 'block'])}>      
<div data-tag="tiny-card-checkbox" style={{display:state.checkType === 'checkbox' && state.type === 'text'?'block':'none'}}  className={vc([gcls('checkbox'))}>        
<tinyCheckbox value={state.model} onChange={(e)=>state.model = e.value} label={label} disabled={state.disabled} onChange={handleChange}></tinyCheckbox>

      </div>

      
<div data-tag="tiny-card-radio" style={{display:state.checkType === 'radio' && state.type === 'text'?'block':'none'}}  className={vc([gcls('radio'))}>        
<tinyRadio value={state.model} onChange={(e)=>state.model = e.value} label={label} disabled={state.disabled} onChange={handleChange}><span ></span></tinyRadio>

      </div>

      
<div data-tag="tiny-card-image" style={{display:state.type === 'image'?'block':'none'}}>        
<img src={src}  className="w-full aspect-video bg-cover"></img>

      </div>

      
<div data-tag="tiny-card-vadio" style={{display:state.type === 'video'?'block':'none'}}>        
<video  src={src} controls className="w-full aspect-video"></video>

      </div>

      
<div data-tag="tiny-card-logo"   className={vc([gcls(`size-${state.size}-padding`),'flex-1]')}>        
<div style={{display:state.type === 'logo'?'block':'none'}}  className={vc([gcls('logo'))}>          
<img src={src}  className="bg-contain"></img>

        </div>

        
<div data-tag="tiny-card-title" style={{display:title || slots.title?'block':'none'}}   className={vc([state.type === 'logo' && 'text-center justify-center mb-1'],'flex items-start')}>          
<Slot name="title-left" parent_children={props.children} slots={props.slots}> </Slot>

          
<Slot name="title" parent_children={props.children} slots={props.slots}>            
<p  className={vc([gcls('title'))}>{title}</p>

          </Slot>

          
<Slot name="title-right" parent_children={props.children} slots={props.slots}> </Slot>

        </div>

        
<div data-tag="tiny-card-main"  style={{ height: state.height }} className={vc([m(gcls('main'), state.type === 'logo' ? 'text-center pb-2' : ''))}>          
<Slot  parent_children={props.children} slots={props.slots}> </Slot>

        </div>

      </div>

    </div>

    
<div data-tag="tiny-card-footer" style={{display:state.effectOptions.length || slots.footer?'block':'none'}}  className="w-full">      
<div style={{display:slots.footer?'block':'none'}}  className={vc([gcls('footer'))}>        
<Slot name="footer" parent_children={props.children} slots={props.slots}> </Slot>

      </div>

      
<div style={{display:state.effectOptions.length?'block':'none'}}  className={vc([gcls('options'))}>        

  {
    state.effectOptions.slice(0, state.sliceNum).map((item, index)=>(
      <div   key={item.text + index}  onClick={handelIconClick(item, index, $event)} className={vc([item.disabled ? 'text-color-text-disabled cursor-not-allowed' : ''],'cursor-pointer')}>          
<Component is={item.icon}   className={vc([item.disabled ? 'fill-color-icon-disabled' : ''],'w-4 h-4')}></Component>

          
<span style={{display:item.text?'block':'none'}}  className="ml-1 align-middle">{item.text}</span>

        </div>
    ))
  }
  

        
<div   style={{display:state.effectOptions.length === state.iconNum?'block':'none'}} onClick={handelIconClick(state.effectOptions[state.sliceNum], state.sliceNum, $event)} className={vc([state.effectOptions[state.sliceNum].disabled ? 'text-color-text-disabled cursor-not-allowed' : ''],'cursor-pointer')}>          
<Component is={state.effectOptions[state.sliceNum].icon}   className={vc([state.effectOptions[state.sliceNum].disabled ? 'fill-color-icon-disabled' : ''],'w-4 h-4')}></Component>

          
<span style={{display:state.effectOptions[state.sliceNum].text?'block':'none'}}  className="ml-1 align-middle">{state.effectOptions[state.sliceNum].text}</span>

        </div>

        
<tinyDropdown style={{display:state.effectOptions.length > state.iconNum?'block':'none'}} show-self-icon>          
<Component is={iconMore}  className="w-4 h-4"></Component>

          
<span style={{display:state.effectOptions[0].text?'block':'none'}}  className="ml-1 text-color-text-primary">{t('ui.base.more')}</span>

          
<template slot>            
<tinyDropdown placement="bottom">              

  {
    state.effectOptions.slice(state.sliceNum).map((item, index)=>(
      <tinyDropdown  key={item.text + index}>                
<div onClick={handelIconClick(item, index + state.sliceNum, $event)}  className={vc(['px-2', item.disabled ? 'text-color-text-disabled cursor-not-allowed' : ''])}>                  
<Component is={item.icon}   className={vc([item.disabled ? 'fill-color-icon-disabled' : ''],'w-4 h-4')}></Component>

                  
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
    