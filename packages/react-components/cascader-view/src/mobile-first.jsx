
    import { renderless, api } from '@opentiny/vue-renderless/cascader-view/vue'
    import '@opentiny/vue-theme/cascader-view/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function cascaderView(props) {
      const {} = props
      const defaultProps = {
        ...$props,
        ...props,
        
      }
      const { ref, current: vm, parent } = useVm()
      const actionSheet=useRef()
      const { state,close,inputKeyword,searchMethod,setLevel,toggleCheckList,confirm,selectOption,nodeExpand,searchSelectHandler,clean,removeOption } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[actionSheet]
      })
      return (
          
<div data-tag="tiny-cascader-view">    
<tinyAction ref={actionSheet} v-ref="actionSheet" title={title} lock-scroll={lockScroll} mask={mask} show-header={showHeader} custom-class={m('h-full max-h-full rounded-none text-color-text-primary pb-0', customClass)} visible={visible} onUpdate:visible={$emit('update:visible', $event)}>      
<template slot>        
<IconChevronLeft  onClick={close} className="h-5 w-5 fill-color-text-primary cursor-pointer"></IconChevronLeft>

      </template>

      
<template slot>        
<div ></div>

      </template>


      
<template slot>        


        
<div data-tag="search-header"  className="flex leading-6 pb-4 px-4 text-base items-center border-b-0.5 border-color-border-separator">          
<div  className="flex-auto flex items-center h-8 py-1 px-3 bg-color-bg-4 rounded">            
<IconSearch custom-class="h-4 w-4"  className="mr-1 fill-color-icon-disabled"></IconSearch>

            
<input value={state.search.input} onChange={(e)=>state.search.input = e.value}  placeholder={t('ui.select.pleaseSearch')} onInput={inputKeyword} onKeyup={searchMethod} className="h-5 flex-auto text-xs bg-transparent outline-0"></input>

          </div>

          
<div  className="flex items-center pl-3 cursor-pointer">            
<div onClick={searchMethod}>{t('ui.select.search')}</div>

          </div>

        </div>


        
<div data-tag="nav-box" style={{display:!state.search.show?'block':'none'}}  className="h-11 flex flex-none items-center border-b-0.5 border-color-border-separator overflow-auto whitespace-nowrap scrollbar-size-0">          
<div  className="px-4 flex">            

  {
    state.computedNavList.map((option, index)=>(
      <div  key={index}  className="flex-none flex items-center">              
<span style={{display:index !== 0?'block':'none'}}  className="px-2 text-color-text-placeholder flex items-center"><IconChevronRight custom-class="w-4 h-4 fill-current"></IconChevronRight></span>

              
<span  onClick={setLevel(index, option)} className={vc([
                  'flex-none max-w-[theme(spacing.24)] truncate',
                  { 'text-color-brand': index === state.level },
                  disabledNavOption(index, option) ? 'text-color-text-disabled' : 'cursor-pointer'
                ])}>{option.data[textField]}</span>

            </div>
    ))
  }
  

            
<div  className="flex-auto"></div>

          </div>

        </div>

      </template>

      
<template slot>        
<div data-tag="view-footer"  className="flex items-center py-4 px-3 border-t border-color-bg-4 shadow-sm">          
<div  onClick={toggleCheckList(true)} className="cursor-pointer pr-2">            
<span >{t('ui.select.selectedNum', { num: state.computedCheckList.length })}</span>

            
<IconChevronUp style={{display:state.computedCheckList.length?'block':'none'}}  className="flex-none w-4 h-4 ml-2 fill-current"></IconChevronUp>

          </div>

          
<div  className="flex-auto"></div>

          
<tinyButton tiny_mode="mobile-first"  type="primary" size="medium" reset-time={0} onClick={confirm} className="flex-none ml-3 w-28">            
{t('ui.button.confirm')}

          </tinyButton>

        </div>

      </template>


      
<div data-tag="tabs" style={{display:!state.search.show?'block':'none'}}  className="flex-auto">        

  {
    state.options.map((currentList, index)=>(
      <div data-tag="tab-item" style={{display:index === state.level?'block':'none'}}  key={index}  className="flex flex-col px-4 overflow-auto pt-2">          

  {
    currentList.map((item, OptIndex)=>(
      <tinyOption  key={item.data[valueField]} ellipsis={ellipsis} text-field={textField} text-field2={textField2} text-field3={textField3} loading={state.loading} option={item} onCheck={selectOption(item)} onExpand={nodeExpand}><Slot item={item} index={OptIndex} parent_children={props.children} slots={props.slots}></Slot></tinyOption>
    ))
  }
  

        </div>
    ))
  }
  

      </div>


      


      
<div data-tag="search-box"  className={vc([state.search.show ? 'flex flex-col flex-auto' : 'hidden'])}>        


        
<div data-tag="search-body"  className="flex-auto overflow-auto flex flex-col">          
<div  className={vc(['flex flex-col px-4'])}>            

  {
    state.search.filterOptions.map((item, index)=>(
      <tinyOption  key={index} ellipsis={ellipsis} text-field={textField} text-field2={textField2} text-field3={textField3} option={item.node} onCheck={searchSelectHandler(item.node, index)}>              
<Slot style={{display:searchConfig.openSearchSlot?'block':'none'}} name="search-item" item={item} index={index} parent_children={props.children} slots={props.slots}></Slot>

              
<Slot style={{display:!(searchConfig.openSearchSlot)?'block':'none'}} item={item} index={index} parent_children={props.children} slots={props.slots}>                
<div  className={vc(['flex-auto', { 'truncate': ellipsis }])}>                  

  {
    renderSearchOption(item.data[textField]).map((text, spanIndex)=>(
      <span  key={spanIndex}><span style={{display:spanIndex?'block':'none'}}  className="text-color-brand">{state.search.input}</span>
{text}</span>
    ))
  }
  

                </div>

              </Slot>

            </tinyOption>
    ))
  }
  

          </div>

          
<div style={{display:state.search.loaded && !state.search.filterOptions.length?'block':'none'}}  className="w-full flex justify-center items-center text-center flex-auto">            
<tinyException component-page type="noresult" tiny_mode="mobile-first" tiny_mode_root></tinyException>

          </div>

        </div>

      </div>

    </tinyAction>


    
<tinyAction data-tag="selected-box" custom-class="h-3/4 text-color-text-primary" title={t('ui.select.selected')} show-footer lock-scroll={false} menus={state.selected.options} visible={state.selected.show} onUpdate:visible={state.selected.show = $event}>      
<template slot>        
<div  onClick={clean} className="cursor-pointer text-color-brand">{t('ui.datepicker.clear')}</div>

      </template>


      
<div  className="h-full overflow-auto scrollbar-size-0">        

  {
    state.computedSelectedList.map((item, index)=>(
      <tinyOption  key={index}>          
<div  className="flex flex-auto px-4 items-center overflow-hidden">            
<div  className="flex-auto truncate min-w-[theme(spacing.14)]">              
{item.waitLoad ? item.data[valueField] : item.getPathText(textField, ' / ')}

            </div>

            
<div  className="flex-none pl-4 text-right">              
<IconOperationfaild  onClick={removeOption(item)} className="w-5 h-5 fill-color-text-placeholder"></IconOperationfaild>

            </div>

          </div>

        </tinyOption>
    ))
  }
  

      </div>


      
<template slot>        
<tinyButton tiny_mode="mobile-first" custom-class="flex-1 w-full mx-4 sm:mx-0" type="primary" size="medium" reset-time={0} onClick={toggleCheckList(false)}>          
{t('ui.button.confirm')}

        </tinyButton>

      </template>

    </tinyAction>

  </div>


      );
    }
    