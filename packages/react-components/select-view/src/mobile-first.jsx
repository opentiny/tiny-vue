
    import { renderless, api } from '@opentiny/vue-renderless/select-view/vue'
    import '@opentiny/vue-theme/select-view/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function selectView(props) {
      const {menus,modelValue,visible,valueField,textField,textField2,textField3,title,multiple,searchConfig,default,topConfig,default,requiredSelectedList,textSplit,showHeader,customClass,mask,infiniteScroll,default,lockScroll,placeholder} = props
      const defaultProps = {
        ...$props,
        ...props,
        menus,modelValue,visible,valueField,textField,textField2,textField3,title,multiple,searchConfig,default,topConfig,default,requiredSelectedList,textSplit,showHeader,customClass,mask,infiniteScroll,default,lockScroll,placeholder
      }
      const { ref, current: vm, parent } = useVm()
      const actionSheet=useRef()
      const { state,close,searchMethod,searchSelectHandler,toggleCheckList,confirm,clean,selectedOptionHandler } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[actionSheet]
      })
      return (
          
<div data-tag="tiny-select-view">    
<tinyAction ref={actionSheet} v-ref="actionSheet" title={title} lock-scroll={lockScroll} mask={mask} show-header={showHeader} custom-class={m('h-full max-h-[100%] rounded-none text-color-text-primary pb-0', customClass)} visible={visible} onUpdate:visible={$emit('update:visible', $event)}>      
<template slot>        
<IconChevronLeft  onClick={close} className="h-5 w-5 fill-color-text-primary cursor-pointer"></IconChevronLeft>

      </template>

      
<template slot>        
<div ></div>

      </template>

      


      
<div data-tag="tiny-select-view-inner text-color-text-primary"  className={vc(['flex flex-col flex-auto h-full'])}>        


        
<div data-tag="select-view-header"  className="flex flex-none leading-6 py-2.5 px-4 text-base items-center border-b-0.5 border-color-bg-4 shadow-sm">          
<div  className="flex-auto flex items-center h-7 py-1 px-3 bg-color-bg-4 rounded">            
<IconSearch  className="h-4 w-4 mr-1 fill-color-icon-disabled"></IconSearch>

            
<input value={state.search.input} onChange={(e)=>state.search.input = e.value} onKeydown={searchMethod}  placeholder={placeholder || t('ui.select.pleaseSearch')} className="h-5 flex-auto text-xs bg-transparent outline-0"></input>

          </div>

          
<div  className="flex items-center pl-3 cursor-pointer">            
<div onClick={searchMethod}>{t('ui.select.search')}</div>

          </div>

        </div>

        


        
<div data-tag="select-view-body"  className="flex-auto flex flex-col overflow-auto scrollbar-size-0">          
<div data-tag="select-view-recommend" style={{display:topConfig && topConfig.options.length?'block':'none'}}  className="leading-5.5 text-color-text-placeholder mx-4 border-b-0.5 border-color-bg-4">            
<div style={{display:topConfig.label?'block':'none'}}  className="mt-4">{topConfig.label}</div>

            
<div  className="mt-3">              

  {
    topConfig.options.map((item, index)=>(
      <div  key={item[valueField]}  onClick={searchSelectHandler(item, index)} className={vc([
                  'max-w-full h-8 rounded-sm inline-flex truncate items-center px-2.5 cursor-pointer mb-3 mr-4 border-0.5',
                  (multiple ? includeOptionIndex(state.checkList, item) > -1 : item[valueField] === modelValue)
                    ? 'border-current text-color-brand bg-color-bg-1'
                    : 'border-transparent bg-color-bg-2'
                ])}>                
<span  className={vc([
                    (multiple ? includeOptionIndex(state.checkList, item) > -1 : item[valueField] === modelValue)
                      ? 'text-color-brand'
                      : 'text-color-text-primary'
                  ])}>{item[textField]}</span>
<span style={{display:textField2?'block':'none'}}  className={vc(['ml-2.5', { 'truncate': !textField3 }])}>{item[textField2]}</span>
<span style={{display:textField3?'block':'none'}}  className="ml-2.5 truncate">{item[textField3]}</span>

              </div>
    ))
  }
  

            </div>

          </div>

          
<div data-tag="select-view-infinite-ccroll" style={{display:state.search.filterOptions.length?'block':'none'}} infinite-scroll infinite-scroll-delay={infiniteScroll.delay} infinite-scroll-disabled={infiniteScroll.disabled} infinite-scroll-distance={infiniteScroll.distance} infinite-scroll-immediate={infiniteScroll.immediate}  className={vc(['px-4'])}>            

  {
    state.search.filterOptions.map((item, index)=>(
      <tinyOption  key={item[valueField]} multiple={multiple} readonly={multiple && requiredSelectedList.indexOf(item[valueField]) !== -1} selected={multiple ? includeOptionIndex(state.checkList, item) > -1 : item[valueField] === modelValue} onClick={searchSelectHandler(item, index)}>              
<Slot item={item} index={index} parent_children={props.children} slots={props.slots}>                
<div  className="flex">                  
<div  className={vc([{ 'min-w-[theme(spacing.14)]': !textField3 }])}>{item[textField]}</div>

                  
<div style={{display:textField2?'block':'none'}}  className="ml-5 text-color-text-placeholder truncate">{item[textField2]}</div>

                </div>

                
<div style={{display:textField3?'block':'none'}}  className="text-color-text-placeholder truncate">{item[textField3]}</div>

              </Slot>

            </tinyOption>
    ))
  }
  

          </div>

          
<div data-tag="select-view-empty" style={{display:!state.search.filterOptions.length?'block':'none'}}  className="flex-auto w-full flex justify-center items-center text-center py-2">            
<tinyException component-page type="nodata" tiny_mode="mobile-first" tiny_mode_root>              
<template slot>{t('ui.select.noSearchData')}</template>

            </tinyException>

          </div>

          
<div data-tag="select-view-loading" style={{display:state.search.loading && infiniteScroll.loadingText?'block':'none'}}  className="w-full flex justify-center items-center text-center py-2">            
<div >              
<p >{infiniteScroll.loadingText}</p>

            </div>

          </div>

        </div>

        
<div data-tag="select-view-footer" style={{display:multiple?'block':'none'}}  className="flex flex-none items-center py-4 px-3 border-t border-color-bg-4 shadow-sm">          
<div  onClick={toggleCheckList(true)} className="cursor-pointer pr-2">            
<span >{t('ui.select.selectedNum', { num: state.checkList.length })}</span>

            
<IconChevronUp style={{display:state.checkList.length?'block':'none'}}  className="flex-none w-4 h-4 ml-2 fill-current"></IconChevronUp>

          </div>

          
<div  className="flex-auto"></div>

          
<tinyButton tiny_mode="mobile-first"  type="primary" size="medium" reset-time={0} onClick={confirm} className="flex-none ml-3 w-28">            
{t('ui.button.confirm')}

          </tinyButton>

        </div>

      </div>

    </tinyAction>


    
<tinyAction custom-class="h-3/4 text-color-text-primary" title={t('ui.select.selected')} show-footer lock-scroll={false} menus={state.selected.options} visible={state.selected.show} onUpdate:visible={state.selected.show = $event}>      
<template slot>        
<div  onClick={clean} className="cursor-pointer text-color-text-placeholder">{t('ui.datepicker.clear')}</div>

      </template>


      
<div  className="h-full overflow-auto scrollbar-size-0">        

  {
    state.selected.options.map(item=>(
      <tinyOption  key={item[valueField]}>          
<div  className="flex px-4 items-center">            
<div  className="flex-auto truncate">              
<div  className="flex">                
<div  className={vc([{ 'min-w-[theme(spacing.14)]': !textField3 }])}>{item[textField]}</div>

                
<div style={{display:textField2?'block':'none'}}  className="ml-5 text-color-text-placeholder truncate">{item[textField2]}</div>

              </div>

              
<div style={{display:textField3?'block':'none'}}  className="text-color-text-placeholder truncate">{item[textField3]}</div>

            </div>

            
<div style={{display:requiredSelectedList.indexOf(item[valueField]) === -1?'block':'none'}}  className="flex-none pl-4 text-right">              
<IconOperationfaild  onClick={selectedOptionHandler(item)} className="w-5 h-5 fill-color-text-placeholder"></IconOperationfaild>

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
    