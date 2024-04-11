
    import { renderless, api } from '@opentiny/vue-renderless/date-picker-mobile-first/vue'
    import '@opentiny/vue-theme/date-picker-mobile-first/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function datePicker(props) {
      const {modelValue,visible,title,type,lockScroll,pickerOptions} = props
      const defaultProps = {
        ...$props,
        ...props,
        modelValue,visible,title,type,lockScroll,pickerOptions
      }
      const { ref, current: vm, parent } = useVm()
      const datePickerBody=useRef()
const recycleScroller=useRef()
      const { state,scrollStart,scrollEnd,selectOption,confirm } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[datePickerBody,recycleScroller]
      })
      return (
          
<div data-tag="tiny-date-picker-mobile year-month">    
<tinyAction custom-class="h-full" title={title} lock-scroll={lockScroll} visible={visible} onUpdate:visible={$emit('update:visible', $event)}>      


      
<div data-tag="tiny-date-picker-inner"  className={vc(['flex flex-col overflow-hidden'])}>        


        
<div ref={datePickerBody} v-ref="datePickerBody" data-tag="date-picker-body"  className="flex-auto overflow-hidden px-4">          
<tinyRecycle ref={recycleScroller} v-ref="recycleScroller" key-field="id"  style={{ height: state.scrollerHeight ? state.scrollerHeight + 'px' : null }} items={state.computedYears} item-size={state.itemSize} buffer={state.buffer} onScroll={scrollStart} onScroll={scrollEnd} className="h-full scrollbar-size-0">            
<template slot>              
<div  className="mt-4">                
<div  className="text-xl leading-7">{scopeSlots.item.year}
{t('ui.datepicker.year')}</div>

                
<div  className="text-center leading-9 text-xs font-medium">                  

  {
    2.map((v, row)=>(
      <div  key={row}  className={vc(['flex mt-2'])}>                    

  {
    6.map((v2, col)=>(
      <div  key={col}  onClick={selectOption({ value: scopeSlots.item.year, index: row * 6 + col })} className={vc(['flex-1 h-9 cursor-pointer'])}>                      
<tinyOption data={state.years[scopeSlots.item.year][row * 6 + col]}>                        
<template slot>                          
<div  className={vc([
                              'flex-1',
                              {
                                'bg-color-info-primary-subtler':
                                  !data.disabled &&
                                  state.date.length === 2 &&
                                  ['end', 'inner'].includes(getSelectedPosition(data.value))
                              }
                            ])}></div>

                          
<div  className={vc([
                              m(
                                'w-9 h-9',
                                { 'text-color-brand border-0.5 border-current': data.isToday },
                                {
                                  'bg-color-info-primary-subtler': ['inner'].includes(getSelectedPosition(data.value))
                                },
                                {
                                  'bg-color-brand text-color-text-inverse': ['start', 'end'].includes(
                                    getSelectedPosition(data.value)
                                  )
                                },
                                { 'bg-white text-color-text-disabled cursor-not-allowed': data.disabled }
                              )
                            )}>                            
<Slot data={data} parent_children={props.children} slots={props.slots}>                              
{data.month}

                            </Slot>

                          </div>

                          
<div  className={vc([
                              'flex-1',
                              {
                                'bg-color-info-primary-subtler':
                                  !data.disabled &&
                                  state.date.length === 2 &&
                                  state.selected.length > 1 &&
                                  ['start', 'inner'].includes(getSelectedPosition(data.value))
                              }
                            ])}></div>

                        </template>

                      </tinyOption>

                    </div>
    ))
  }
  

                  </div>
    ))
  }
  

                </div>

              </div>

            </template>

          </tinyRecycle>

        </div>

        


        
<div data-tag="date-picker-footer"  className="w-full flex-none flex flex-col items-center justify-center p-4 border-t border-color-bg-4 shadow-sm">          
<div data-tag="rang-box"  style={{display:['year-month-range'].includes(type) && state.date.length?'block':'none'}} className="w-full">            
<div  className="w-full flex mb-4 h-6 leading-6 text-base text-center">              
<div  className="min-w-[theme(spacing.32)]">                
{formatDate(state.date[0], t('ui.datepicker.yearMonth', { year: 'yyyy', month: 'MM' }))}

              </div>

              
<div  className="flex-auto min-w-[theme(spacing.4)] justify-center">~</div>

              
<div  className="min-w-[theme(spacing.32)]">                
<span style={{display:state.btnDisabled?'block':'none'}}  className="text-color-icon-placeholder">{t('ui.datepicker.endTime')}</span>

                
<span style={{display:!(state.btnDisabled)?'block':'none'}}>{formatDate(state.date[1], t('ui.datepicker.yearMonth', { year: 'yyyy', month: 'MM' }))}</span>

              </div>

            </div>

          </div>


          
<div  className="w-full text-center">            
<tinyButton tiny_mode="mobile-first" custom-class="w-full" disabled={state.btnDisabled} type="primary" size="medium" reset-time={0} onClick={confirm}>              
{t('ui.button.confirm')}

            </tinyButton>

          </div>

        </div>

      </div>

    </tinyAction>

  </div>


      );
    }
    