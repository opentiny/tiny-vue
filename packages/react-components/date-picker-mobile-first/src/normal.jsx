
    import { renderless, api } from '@opentiny/vue-renderless/date-picker-mobile-first/vue'
    import '@opentiny/vue-theme/date-picker-mobile-first/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function datePicker(props) {
      const {modelValue,visible,title,type,lockScroll,pickerOptions,customClass,clearable,step,rangeSeparator,endPlaceholder,showTimeSecond} = props
      const defaultProps = {
        ...$props,
        ...props,
        modelValue,visible,title,type,lockScroll,pickerOptions,customClass,clearable,step,rangeSeparator,endPlaceholder,showTimeSecond
      }
      const { ref, current: vm, parent } = useVm()
      const actionSheet=useRef()
const datePickerBody=useRef()
const recycleScroller=useRef()
      const { state,clear,scrollStart,scrollEnd,selectOption,timeToggle,confirm,timeConfirm } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[actionSheet,datePickerBody,recycleScroller]
      })
      return (
          
<div data-tag="tiny-date-picker-mobile">    
<tinyAction ref={actionSheet} v-ref="actionSheet" title={title} custom-class={m('h-full max-h-full rounded-none min-h-[95vh]', customClass)} lock-scroll={lockScroll} visible={visible} onUpdate:visible={$emit('update:visible', $event)}>      
<template slot style={{display:clearable?'block':'none'}}>        
<div  onClick={clear} className="cursor-pointer text-color-brand">{t('ui.datepicker.clear')}</div>

      </template>

      


      
<div data-tag="tiny-date-picker-inner"  className={vc(['flex flex-col flex-auto h-full'])}>        


        
<div data-tag="date-picker-header"  className="flex leading-6 py-2.5 px-4 text-sm items-center text-center border-b border-color-bg-4 shadow-sm">          

  {
    7.map((item, index)=>(
      <div  key={index}  className="flex-1">            
{t('ui.calendarBar.week.' + index)}

          </div>
    ))
  }
  

        </div>

        


        
<div ref={datePickerBody} v-ref="datePickerBody" data-tag="date-picker-body"  className="flex-auto overflow-hidden px-4">          
<tinyRecycle ref={recycleScroller} v-ref="recycleScroller"  key-field="id" style={{ height: state.scrollerHeight ? state.scrollerHeight + 'px' : null }} items={state.months} item-size={state.itemSize} buffer={state.buffer} onScroll={scrollStart} onScroll={scrollEnd} className="h-full scrollbar-size-0">            
<template slot>              
<div  className="mt-4">                
<div  className="text-xl leading-7 text-color-text-primary">                  
{formatDate(scopeSlots.item.yearMonth, t('ui.datepicker.yearMonth', { year: 'yyyy', month: 'MM' }))}

                </div>

                
<div  className="text-center leading-9 text-xs font-medium">                  

  {
    getWeeksByMonth(scopeSlots.item.yearMonth).map((item, week)=>(
      <div  key={week}  className={vc(['flex mt-2'])}>                    

  {
    7.map((item, index)=>(
      <div  key={index}  onClick={selectOption({ value: scopeSlots.item.yearMonth, index: index + week * 7 })} className={vc([
                        'flex-1 h-9 cursor-pointer',
                        index === 0 || index === 6 ? 'text-color-text-placeholder' : 'text-color-text-primary'
                      ])}>                      
<tinyOption data={getDate({ yearMonth: scopeSlots.item.yearMonth, index: index + week * 7 })}>                        
<template slot>                          
<div  className={vc([
                              'flex-1',
                              {
                                'bg-color-info-primary-subtler':
                                  !data.disabled &&
                                  state.date.length === 2 &&
                                  ['end', 'inner'].includes(getSelectedPosition(data.value))
                              },
                              {'rounded-l': index === 0 }
                            ])}></div>

                          
<div  className={vc([
                              m(
                                'w-9 h-9',
                                { 'text-color-brand border-0.5 border-current rounded': data.isToday },
                                {
                                  'bg-color-info-primary-subtler': ['inner'].includes(getSelectedPosition(data.value))
                                },
                                {
                                  'bg-color-brand text-color-text-inverse rounded': ['start', 'end'].includes(
                                    getSelectedPosition(data.value)
                                  )
                                },
                                { 'bg-white text-color-text-disabled cursor-not-allowed': data.disabled }
                              )
                            )}>                            
<Slot data={data} parent_children={props.children} slots={props.slots}>                              
{data.day}

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
                              },
                              { 'rounded-r': index === 6 }
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

        


        
<div data-tag="date-picker-footer"  className="flex flex-none flex-col items-center justify-center p-4 border-t border-color-bg-4 shadow-sm">          
<div data-tag="rang-box"  style={{display:['datetimerange', 'daterange'].includes(type) && state.date.length?'block':'none'}} className="w-full">            
<div  className="w-full flex mb-4 h-6 leading-6 text-base text-center">              
<div  className="min-w-[theme(spacing.32)]">                
{formatDate(state.date[0], t('ui.datepicker.yearMonthDay', { year: 'yyyy', month: 'MM', day: 'dd' }))}

              </div>

              
<div  className="flex-auto min-w-[theme(spacing.4)]">                
<div style={{display:['datetimerange'].includes(type)?'block':'none'}}  className="h-9 border-l-0.5 inline-block rotate-45 relative top-6 border-color-bg-2"></div>

                
<div style={{display:!(['datetimerange'].includes(type))?'block':'none'}}  className="text-center">                  
<template style={{display:typeof rangeSeparator === 'string'?'block':'none'}}>{rangeSeparator}</template>

                  
<Component style={{display:!(typeof rangeSeparator === 'string')?'block':'none'}} is={rangeSeparator}></Component>

                </div>

              </div>

              
<div  className="min-w-[theme(spacing.32)]">                
<span style={{display:state.btnDisabled?'block':'none'}}  className="text-color-icon-placeholder">{endPlaceholder}</span>

                
<span style={{display:!(state.btnDisabled)?'block':'none'}}>{formatDate(state.date[1], t('ui.datepicker.yearMonthDay', { year: 'yyyy', month: 'MM', day: 'dd' }))}</span>

              </div>

            </div>

            
<div style={{display:type === 'datetimerange'?'block':'none'}}  className="w-full h-9 flex mb-4 leading-9 text-base text-center">              
<div  onClick={timeToggle(0)} className="w-32 bg-color-bg-2">{state.timeList[0].join(':')}</div>

              
<div  className="flex-auto min-w-[theme(spacing.4)]"></div>

              
<div  onClick={timeToggle(1)} className="w-32 bg-color-bg-2">{state.timeList[1].join(':')}</div>

            </div>

          </div>


          
<div data-tag="datetime-box"  style={{display:['datetime'].includes(type) && state.date?'block':'none'}} className="w-full">            
<div  className="w-full flex mb-4 leading-6 text-base text-center">              
<div  className="min-w-[theme(spacing.32)]">                
{formatDate(state.date, t('ui.datepicker.yearMonthDay', { year: 'yyyy', month: 'MM', day: 'dd' }))}

              </div>

              
<div  className="flex-auto min-w-[theme(spacing.4)]"></div>

              
<div  onClick={timeToggle(0)} className="w-32 bg-color-bg-2">{state.timeList[0].join(':')}</div>

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


    
<tinyTime value={state.time} onChange={(e)=>state.time = e.value} title={t('ui.datepicker.selectTime')} step={step} show-seconds={showTimeSecond} visible={state.timeVisible} onUpdate:visible={state.timeVisible = $event} onConfirm={timeConfirm}>    </tinyTime>

  </div>


      );
    }
    