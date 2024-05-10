
    import { renderless, api } from '@opentiny/vue-renderless/cascader-mobile/vue'
    import '@opentiny/vue-theme/cascader-mobile/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function cascaderMobile(props) {
      const {_constants,data,modelValue,visible,ellipsis,valueField,placeholder,childrenField,textField,textField2,textField3,title,textSplit,showHeader,multiple,searchConfig,default,nodeConfig} = props
      const defaultProps = {
        ...$props,
        ...props,
        _constants,data,modelValue,visible,ellipsis,valueField,placeholder,childrenField,textField,textField2,textField3,title,textSplit,showHeader,multiple,searchConfig,default,nodeConfig
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,close,setLevel,searchMethod,searchBoxToggle,selectOption,searchSelectHandler,confirm } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div data-tag="tiny-cascader-mobile" style={{display:visible?'block':'none'}}>    
<tinyAction tiny_mode="mobile-first" title={title} show-footer visible={state.toggle} onUpdate:visible={$emit('update:visible', $event)} onClose={close} show-header={!state.search.show} custom-class={['min-h-[95%] pb-4']}>      
<template slot>        
<div style={{display:!state.search.show?'block':'none'}}  className="h-11 flex-none flex items-center border-b-0.5 border-color-border-separator overflow-auto whitespace-nowrap scrollbar-size-0">          
<div  className="px-4 flex">            

  {
    state.computedNavList.map((option, index)=>(
      <div  key={index}  className="flex-none flex">              
<template style={{display:index <= state.level?'block':'none'}}>                
<span style={{display:index !== 0?'block':'none'}}  className="px-2 text-color-text-placeholder">/</span>

                
<span  onClick={setLevel(index, option)} className={vc([
                    'flex-none max-w-[theme(spacing.24)] truncate',
                    { 'text-color-brand': index === state.level },
                    disabledNavOption(index, option) ? 'text-color-text-disabled' : 'cursor-pointer'
                  ])}>{option.data[textField]}</span>

              </template>

            </div>
    ))
  }
  

            
<div  className="flex-auto"></div>

          </div>

        </div>


        


        
<div data-tag="search-header" style={{display:state.search.show?'block':'none'}}  className="flex leading-6 pt-4 pb-4 px-4 text-base items-center">          
<div  className="flex-auto flex items-center h-8 py-1 px-3 bg-color-bg-4 rounded-full">            
<IconSearch custom-class="h-4 w-4"  className="mr-1 fill-color-icon-disabled"></IconSearch>

            
<input value={state.search.input} onChange={(e)=>state.search.input = e.value}  placeholder={t('ui.select.pleaseSearch')} onInput={searchMethod} className="h-5 flex-auto text-xs bg-transparent outline-0"></input>

          </div>

          
<div  className="flex items-center pl-3 cursor-pointer">            
<div onClick={searchBoxToggle(false)}>{t('ui.base.cancel')}</div>

          </div>

        </div>

      </template>


      
<div data-tag="tabs" style={{display:!state.search.show?'block':'none'}}  className="flex-auto">        

  {
    state.options.map((currentList, index)=>(
      <div data-tag="tab-item" style={{display:index === state.level?'block':'none'}}  key={index}  className="flex flex-col px-4 overflow-auto pt-2">          

  {
    currentList.map((item, itemIndex)=>(
      <tinyOption  key={item.data[valueField]} multiple={multiple} ellipsis={ellipsis} text-field={textField} text-field2={textField2} text-field3={textField3} loading={state.loading} option={item} selected={isSelected(item)} onClick={selectOption(item, $event)}>            
<Slot item={item} index={itemIndex} parent_children={props.children} slots={props.slots}></Slot>

          </tinyOption>
    ))
  }
  

        </div>
    ))
  }
  

      </div>


      


      
<div data-tag="search-box" style={{display:state.search.show?'block':'none'}}  className="flex flex-col flex-auto">        


        
<div data-tag="search-body"  className="flex-auto overflow-auto flex flex-col">          
<div style={{display:state.search.filterOptions.length?'block':'none'}}  className={vc(['flex flex-col px-4'])}>            

  {
    state.search.filterOptions.map((item, index)=>(
      <tinyOption  key={index} multiple={multiple} ellipsis={ellipsis} text-field={textField} text-field2={textField2} text-field3={textField3} option={item} selected={isSelected(item)} onClick={searchSelectHandler(item, index)}>              
<Slot style={{display:searchConfig.openSearchSlot?'block':'none'}} name="search-item" item={item} index={index} parent_children={props.children} slots={props.slots}></Slot>

              
<Slot style={{display:!(searchConfig.openSearchSlot)?'block':'none'}} item={item} index={index} parent_children={props.children} slots={props.slots}>                
<div  className={vc(['flex-auto', { 'truncate': ellipsis }])}>                  

  {
    renderSearchOption(item[textField]).map((text, textIndex)=>(
      <span  key={text}>                    
<span style={{display:textIndex?'block':'none'}}  className="text-color-brand">{state.search.input}</span>
{text}

                  </span>
    ))
  }
  

                </div>

              </Slot>

            </tinyOption>
    ))
  }
  

          </div>

          
<div style={{display:state.search.input && !state.search.filterOptions.length?'block':'none'}}  className="w-full flex justify-center items-center text-center flex-auto">            
<tinyException component-page type="noresult" tiny_mode="mobile-first" tiny_mode_root></tinyException>

          </div>

        </div>

      </div>


      
<template slot>        
<IconSearch style={{display:!state.search.show?'block':'none'}} custom-class="h-5 w-5"  onClick={searchBoxToggle(true)} className="cursor-pointer"></IconSearch>

      </template>

      
<template slot>        
<tinyButton style={{display:state.showButton?'block':'none'}} tiny_mode="mobile-first"  type="primary" reset-time={0} onClick={confirm} className="flex-1 mx-4 sm:mx-0">{t('ui.button.confirm')}</tinyButton>

      </template>

    </tinyAction>

  </div>


      );
    }
    