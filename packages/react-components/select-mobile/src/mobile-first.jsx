
    import { renderless, api } from '@opentiny/vue-renderless/select-mobile/vue'
    import '@opentiny/vue-theme/select-mobile/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function selectMobile(props) {
      const {} = props
      const defaultProps = {
        ...$props,
        ...props,
        
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,hide,allCheckHandler,selectOption,searchMethod,searchBoxToggle,searchSelectHandler,confirm } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div data-tag="tiny-select-mobile">    
<tinyCell placeholder={placeholder} style={{display:mode === 'form'?'block':'none'}} data={state.selectedLabel} onClick={$emit('update:visible', true)}></tinyCell>

    
<tinyAction style={{display:visible?'block':'none'}} tiny_mode="mobile-first" title={title} lock-scroll={lockScroll} visible={state.toggle} onUpdate:visible={$emit('update:visible', $event)} onClose={hide} show-header={!state.search.show} show-footer={multiple} custom-class={[{ 'min-h-[90%]': state.search.show }, { 'pb-4': state.search.show && multiple }]}>      
<div data-tag="tiny-select-mobile-content" style={{display:!state.search.show?'block':'none'}}  className={vc(['flex flex-col px-4'])}>        
<div data-tag="tiny-select-mobile-multiple" style={{display:multiple?'block':'none'}}  onClick={allCheckHandler} className={vc(['flex items-start leading-6 py-3 cursor-pointer select-none'])}>          
<Component style={{display:multiple?'block':'none'}} is={
              state.checkList.length === 0
                ? 'icon-check'
                : state.checkList.length === menus.length
                  ? 'icon-checked-sur'
                  : 'icon-halfselect'
            }  custom-class="w-4.5 h-4.5" className={vc(['flex-none mt-1 mr-2', state.checkList.length ? 'fill-color-brand' : 'fill-color-icon-disabled'])}></Component>

          
<div data-tag="tiny-select-mobile-ellipsis"  className={vc(['flex-auto', { 'truncate': ellipsis }])}>            
{t('ui.base.all')}

          </div>

        </div>

        

  {
    menus.map((item, index)=>(
      <tinyOption  key={item[valueField]} multiple={multiple} ellipsis={ellipsis} text-field={textField} text-field2={textField2} text-field3={textField3} option={item} selected={isSelected(item)} onClick={selectOption(item, index)}><Slot item={item} index={index} parent_children={props.children} slots={props.slots}></Slot></tinyOption>
    ))
  }
  

      </div>

      


      
<div data-tag="tiny-select-mobile-box"  className={vc([state.search.show ? 'flex flex-col flex-auto' : 'hidden'])}>        


        
<div data-tag="tiny-select-mobile-header"  className="flex leading-6 pt-4 pb-4 px-4 text-base items-center">          
<div  className="flex-auto flex items-center h-8 py-1 px-3 bg-color-bg-4 rounded-full">            
<IconSearch custom-class="h-4 w-4"  className="mr-1 fill-color-icon-disabled"></IconSearch>

            
<input value={state.search.input} onChange={(e)=>state.search.input = e.value}  placeholder={t('ui.select.pleaseSearch')} onInput={searchMethod} className="h-5 flex-auto text-xs bg-transparent outline-0"></input>

          </div>

          
<div  className="flex items-center pl-3 cursor-pointer">            
<div onClick={searchBoxToggle(false)}>{t('ui.base.cancel')}</div>

          </div>

        </div>

        


        
<div data-tag="tiny-select-mobile-body"  className="flex-auto overflow-auto flex flex-col">          
<div data-tag="tiny-select-mobile-filter" style={{display:state.search.filterOptions.length?'block':'none'}}  className={vc(['flex flex-col px-4'])}>            

  {
    state.search.filterOptions.map((item, index)=>(
      <tinyOption  key={item[valueField]} multiple={multiple} ellipsis={ellipsis} text-field={textField} text-field2={textField2} text-field3={textField3} option={item} selected={isSelected(item)} onClick={searchSelectHandler(item, index)}>              
<Slot style={{display:searchConfig.openSearchSlot?'block':'none'}} name="search-item" item={item} index={index} parent_children={props.children} slots={props.slots}></Slot>

              
<Slot style={{display:!(searchConfig.openSearchSlot)?'block':'none'}} item={item} index={index} parent_children={props.children} slots={props.slots}></Slot>

            </tinyOption>
    ))
  }
  

          </div>

          
<div data-tag="tiny-select-mobile-nodata" style={{display:!state.search.filterOptions.length?'block':'none'}}  className="w-full flex justify-center items-center text-center flex-auto">            
<tinyException component-page type="nodata" tiny_mode="mobile-first" tiny_mode_root>              
<template slot>                
<span  className="text-color-icon-secondary">{t('ui.select.noSearchData')}</span>

              </template>

            </tinyException>

          </div>

        </div>

      </div>

      
<template slot>        
<IconSearch custom-class="h-5 w-5"  onClick={searchBoxToggle(true)} className="cursor-pointer"></IconSearch>

      </template>

      
<template slot>        
<tinyButton style={{display:multiple?'block':'none'}} tiny_mode="mobile-first"  type="primary" reset-time={0} onClick={confirm} className="flex-1 mx-4 sm:mx-0">{t('ui.button.confirm')}</tinyButton>

      </template>

    </tinyAction>

  </div>


      );
    }
    