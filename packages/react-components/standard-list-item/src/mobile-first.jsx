
    import { renderless, api } from '@opentiny/vue-renderless/standard-list-item/vue'
    import '@opentiny/vue-theme/standard-list-item/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function standardList(props) {
      const {data,default} = props
      const defaultProps = {
        ...$props,
        ...props,
        data,default
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,handleTitleClick,handleEnterDesc,handelIconClick } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div data-tag="tiny-standard-list-item"   onClick={$emit('click', $event)} className={vc([
      m(
        type === 'card'
          ? 'p-3 border-0.5 hover:shadow sm:border rounded border-color-border-separator mb-2 [&:last-child]:mb-0'
          : 'px-0 py-3 border-b-0.5 sm:border-b-px border-b-color-border-separator [&:last-child]:border-none',
        type === 'card' && selected ? 'border border-color-brand' : '',
        customClass
      )
    ,'flex w-full min-h-[theme(spacing.11)] sm:min-h-[theme(spacing.12)] text-xs]')}>    
<div data-tag="tiny-standard-list-item-image" style={{display:showImage || (slots.image && slots.image())?'block':'none'}}   className={vc([icon.name ? 'block' : 'block sm:flex'],'float-left items-center mr-2.5 shrink-0')}>      
<Slot name="image" parent_children={props.children} slots={props.slots}>        
<Component style={{display:icon.name?'block':'none'}} is={icon.name}  style={{ fill: icon.color }} className="w-5 h-5"></Component>

        
<tinyUser style={{display:!(icon.name)?'block':'none'}} type={userHead.type || 'icon'} value={userHead.value} onChange={(e)=>userHead.value = e.value} min={userHead.min} round={userHead.round} color={userHead.color} background-color={userHead.backgroundColor} size={userHead.size}></tinyUser>

      </Slot>

    </div>

    
<div data-tag="tiny-standard-list-item-title"  className="text-left flex-auto mx-0 my-auto leading-5">      
<Slot  parent_children={props.children} slots={props.slots}>        
<div  className="text-sm flex items-center">          
<Slot name="title" parent_children={props.children} slots={props.slots}>            
<span  onClick={handleTitleClick} className={vc([
                m(
                  'mr-3 shrink-0',
                  titleOption.role === 'a' && 'cursor-pointer text-color-brand',
                  titleOption.class || ''
                )
              )}>{data.title || ''}</span>

          </Slot>

          
<span  className="text-color-text-placeholder shrink-0">{data.subTitle || ''}</span>

          
<Slot name="tag" parent_children={props.children} slots={props.slots}>            
<tinyTag style={{display:tag?'block':'none'}}  data={tag.data} size={tag.size} effect={tag.effect} className="inline-block ml-3 text-xs [&_span]:whitespace-nowrap"></tinyTag>

          </Slot>

        </div>

        
<tinyTooltip effect="light" content={state.descTooltip} placement="top" onMouseenter={handleEnterDesc}>          
<p style={{display:data.desc?'block':'none'}}  className="mt-2 text-xs line-clamp-2 sm:line-clamp-1">{data.desc}</p>

        </tinyTooltip>

      </Slot>

    </div>

    
<div data-tag="tiny-standard-list-item-operate" style={{display:state.effectOptions.length || (slots.operate && slots.operate())?'block':'none'}}  className="w-auto pr-0 pl-6 h-auto flex items-center justify-center shrink-0 text-color-text-primary">      
<Slot name="operate" parent_children={props.children} slots={props.slots}>        

  {
    state.effectOptions.slice(0, state.sliceNum).map((item, index)=>(
      <div   key={item.text + index}  onClick={handelIconClick(item, index, $event)} className={vc([item.disabled ? 'text-color-text-disabled cursor-not-allowed' : ''],'cursor-pointer mr-5 hidden sm:block')}>          
<Component is={item.icon}   className={vc([item.disabled ? 'fill-color-icon-disabled' : ''],'w-4 h-4')}></Component>

          
<span style={{display:item.text?'block':'none'}}  className="ml-1 align-middle">{item.text}</span>

        </div>
    ))
  }
  

        
<div   style={{display:state.effectOptions.length === state.iconNum?'block':'none'}} onClick={handelIconClick(state.effectOptions[state.sliceNum], state.sliceNum, $event)} className={vc([state.effectOptions[state.sliceNum].disabled ? 'text-color-text-disabled cursor-not-allowed' : ''],'cursor-pointer hidden sm:block')}>          
<Component is={state.effectOptions[state.sliceNum].icon}   className={vc([state.effectOptions[state.sliceNum].disabled ? 'fill-color-icon-disabled' : ''],'w-4 h-4')}></Component>

          
<span style={{display:state.effectOptions[state.sliceNum].text?'block':'none'}}  className="ml-1 align-middle">{state.effectOptions[state.sliceNum].text}</span>

        </div>

        
<div data-tag="tiny-standard-list-item-selficon" style={{display:state.effectOptions.length > state.iconNum?'block':'none'}}  className="h-4 hidden sm:block">          
<tinyDropdown show-self-icon >            
<Component is={iconMore}  className="w-4 h-4"></Component>

            
<span style={{display:state.effectOptions[0].text?'block':'none'}}  className="ml-1 text-color-text-primary">{t('ui.base.more')}</span>

            
<template slot>              
<tinyDropdown placement="bottom">                

  {
    state.effectOptions.slice(state.sliceNum).map((item, index)=>(
      <tinyDropdown  key={item.text + index}>                  
<div onClick={handelIconClick(item, index + state.sliceNum, $event)}  className={vc([item.disabled ? 'text-color-text-disabled cursor-not-allowed' : ''])}>                    
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

        
<div data-tag="tiny-standard-list-item-selficon" style={{display:state.effectOptions.length?'block':'none'}}  className="block sm:hidden">          
<tinyDropdown show-self-icon >            
<Component is={iconMore}  className="w-4 h-4"></Component>

            
<template slot>              
<tinyDropdown placement="bottom">                

  {
    state.effectOptions.map((item, index)=>(
      <tinyDropdown  key={item.text + index}>                  
<div onClick={handelIconClick(item, index, $event)}  className={vc([item.disabled ? 'text-color-text-disabled cursor-not-allowed' : ''])}>                    
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

      </Slot>

    </div>

  </div>


      );
    }
    