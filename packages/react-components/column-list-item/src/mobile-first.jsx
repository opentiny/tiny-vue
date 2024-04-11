
    import { renderless, api } from '@opentiny/vue-renderless/column-list-item/vue'
    import '@opentiny/vue-theme/column-list-item/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function columnList(props) {
      const {} = props
      const defaultProps = {
        ...$props,
        ...props,
        
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
          
<div data-tag="tiny-column-list-item" role="column-list-item"   onClick={$emit('click', $event)} className={vc([
      m(
        state.effectOptions.length ? 'pb-0' : 'pb-3',
        image && !state.showCheckbox && !state.showRadio ? 'pl-4' : 'pl-3',
        state.type === 'list'
          ? 'pl-0 pr-0 border-b-0.5 sm:border-b-px [&:last-child]:border-none'
          : 'border-0.5 sm:border rounded-lg sm:rounded hover:shadow',
        customClass
      )
    ,'block sm:flex bg-color-bg-1 w-full py-2.5 px-3 sm:pb-2.5 text-sm sm:text-xs border-color-border-separator]')}>    
<div data-tag="tiny-column-list-item-checkbox" style={{display:state.showCheckbox?'block':'none'}}  className="float-left sm:float-none mr-3 [&_[data-tag=tiny-checkbox]]:p-0 [&_[data-tag=tiny-checkbox]>span>span]:p-0 [&_[data-tag=tiny-checkbox]>span:nth-child(2)]:hidden">      
<tinyCheckbox value={state.model} onChange={(e)=>state.model = e.value} disabled={state.disabled} label={label} onChange={handleChange}></tinyCheckbox>

    </div>

    
<div data-tag="tiny-column-list-item-radio" style={{display:state.showRadio?'block':'none'}}  className="float-left sm:float-none mr-1.5 sm:mr-0 [&_[role=radio]]:w-6 [&_[role=radio]]:h-5 [&_[role=radio]_span_span]:p-0">      
<tinyRadio value={state.model} onChange={(e)=>state.model = e.value} disabled={state.disabled} label={label} onChange={handleChange}><span ></span></tinyRadio>

    </div>

    
<div data-tag="tiny-column-list-item-image" style={{display:image || (slots.image && slots.image())?'block':'none'}}   className={vc([state.size === 'small' ? 'w-9 h-11' : 'w-14 sm:w-11 h-16'],'float-left block sm:flex mr-3 shrink-0 pt-1')}>      
<Slot name="image" parent_children={props.children} slots={props.slots}>        
<img style={{display:typeof image === 'string'?'block':'none'}} src={image}   className={vc([state.size === 'small' ? 'w-9 h-9' : 'w-14 sm:w-11 h-14 sm:h-11'],'rounded')}></img>

        
<Component style={{display:!(typeof image === 'string')?'block':'none'}} is={image}   className={vc([state.size === 'small' ? 'w-9 h-9' : 'w-14 sm:w-11 h-14 sm:h-11'],'rounded')}></Component>

      </Slot>

    </div>

    
<div data-tag="tiny-column-list-item-column1"  className="block text-left sm:flex flex-auto flex-wrap">      
<div style={{display:slots.column1 && slots.column1()?'block':'none'}}  style={{ 'flex-grow': flexGrow[0] || 0, 'flex-basis': flexBasis[0] || 'auto' }} className="min-w-[theme(spacing.40)] overflow-hidden sm:ml-0 pr-0 sm:pr-5">        
<Slot name="column1" parent_children={props.children} slots={props.slots}></Slot>

      </div>

      
<div data-tag="tiny-column-list-item-column2" style={{display:slots.column2 && slots.column2()?'block':'none'}}   style={{ 'flex-grow': flexGrow[1] || 0, 'flex-basis': flexBasis[1] || 'auto' }} className={vc([state.showCheckbox || state.showRadio ? 'pl-8 sm:pl-0' : ''],'min-w-[theme(spacing.40)] overflow-hidden pr-0 sm:pr-5 mt-1 sm:mt-0 pt-0 sm:pt-1')}>        
<Slot name="column2" parent_children={props.children} slots={props.slots}></Slot>

      </div>

      
<div data-tag="tiny-column-list-item-column3" style={{display:slots.column3 && slots.column3()?'block':'none'}}   style={{ 'flex-grow': flexGrow[2] || 0, 'flex-basis': flexBasis[2] || 'auto' }} className={vc([state.showCheckbox || state.showRadio ? 'pl-8 sm:pl-0' : ''],'min-w-[theme(spacing.40)] overflow-hidden pr-0 sm:pr-5 mt-1 sm:mt-0 pt-0 sm:pt-1')}>        
<Slot name="column3" parent_children={props.children} slots={props.slots}></Slot>

      </div>

      
<div data-tag="tiny-column-list-item-column4" style={{display:slots.column4 && slots.column4()?'block':'none'}}   style={{ 'flex-grow': flexGrow[3] || 0, 'flex-basis': flexBasis[3] || 'auto' }} className={vc([state.showCheckbox || state.showRadio ? 'pl-8 sm:pl-0' : ''],'min-w-[theme(spacing.40)] overflow-hidden pr-0 sm:pr-5 mt-1 sm:mt-0 pt-0 sm:pt-1')}>        
<Slot name="column4" parent_children={props.children} slots={props.slots}></Slot>

      </div>

    </div>

    
<hr style={{display:state.effectOptions.length || (slots.operate && slots.operate())?'block':'none'}}  className="block sm:hidden mt-2.5 -mx-3 border-t-0.5 border-t-color-border-separator"></hr>

    
<div data-tag="tiny-column-list-item-operatebox" style={{display:state.effectOptions.length || (slots.operate && slots.operate())?'block':'none'}}  className="w-full sm:w-auto px-0 sm:pl-5 sm:pr-1 h-12 sm:h-auto flex flex-row sm:flex-col items-center justify-around sm:justify-center sm:items-start shadow-none sm:shadow-[-6px_0px_5px_-5px_#e8ebef] shrink-0 text-color-text-primary">      
<Slot name="operate" parent_children={props.children} slots={props.slots}>        

  {
    state.effectOptions.slice(0, state.sliceNum).map((item, index)=>(
      <div data-tag="tiny-column-list-item-operate"   key={item.text + index}  onClick={handelIconClick(item, index, $event)} className={vc([item.disabled ? 'text-color-text-disabled cursor-not-allowed' : ''],'cursor-pointer mb-0 sm:mb-2')}>          
<Component is={item.icon}   className={vc([item.disabled ? 'fill-color-icon-disabled' : ''],'w-4 h-4')}></Component>

          
<span style={{display:item.text?'block':'none'}}  className="ml-1 align-middle">{item.text}</span>

        </div>
    ))
  }
  

        
<div data-tag="tiny-column-list-item-iconnum"   style={{display:state.effectOptions.length === state.iconNum?'block':'none'}} onClick={handelIconClick(state.effectOptions[state.sliceNum], state.sliceNum, $event)} className={vc([state.effectOptions[state.sliceNum].disabled ? 'text-color-text-disabled cursor-not-allowed' : ''],'cursor-pointer')}>          
<Component is={state.effectOptions[state.sliceNum].icon}   className={vc([state.effectOptions[state.sliceNum].disabled ? 'fill-color-icon-disabled' : ''],'w-4 h-4')}></Component>

          
<span style={{display:state.effectOptions[state.sliceNum].text?'block':'none'}}  className="ml-1 align-middle">{state.effectOptions[state.sliceNum].text}</span>

        </div>

        
<tinyDropdown style={{display:state.effectOptions.length > state.iconNum?'block':'none'}} show-self-icon >          
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

      </Slot>

    </div>

  </div>


      );
    }
    