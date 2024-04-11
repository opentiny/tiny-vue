
    import { renderless, api } from '@opentiny/vue-renderless/date-panel/vue'
    import '@opentiny/vue-theme/date-panel/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function datePanel(props) {
      const {emitter,step,showWeekNumber,formatWeeks} = props
      const defaultProps = {
        ...$props,
        ...props,
        emitter,step,showWeekNumber,formatWeeks
      }
      const { ref, current: vm, parent } = useVm()
      const input=useRef()
const timepicker=useRef()
const dateTable=useRef()
const yearTable=useRef()
const monthTable=useRef()
      const { state,handleEnter,handleLeave,handleShortcutClick,handleVisibleDateChange,handleVisibleTimeChange,handleTimePick,cusPrevMonth,cusNextMonth,handleDatePick,handleYearPick,handleMonthPick,searchTz,toggleTz,selectTz,changeToNow,confirm } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[input,timepicker,dateTable,yearTable,monthTable]
      })
      return (
          
<transition name="tiny-zoom-in-top" onAfter={handleEnter} onAfter={handleLeave}>    
<div style={{display:state.visible?'block':'none'}} data-tag="tiny-picker-panel tiny-date-picker tiny-popper"  className={vc([gcls('picker-panel'), state.popperClass])}>      
<div data-tag="tiny-picker-panel__body-wrapper"  className={vc([gcls('picker-panel-body'))}>        
<Slot name="sidebar" data-tag="tiny-picker-panel__sidebar" parent_children={props.children} slots={props.slots}></Slot>

        
<div data-tag="tiny-picker-panel__sidebar" style={{display:state.shortcuts?'block':'none'}}>          

  {
    state.shortcuts.map((shortcut, key)=>(
      <button type="button" data-tag="tiny-picker-panel__shortcut"  key={key} onClick={handleShortcutClick(shortcut)}>            
{shortcut.text}

          </button>
    ))
  }
  

        </div>

        
<div data-tag="tiny-picker-panel__body"  className={vc([gcls('picker-panel-body'))}>          
<div style={{display:state.showTime?'block':'none'}} data-tag="tiny-date-picker__time-header"  className={vc([gcls('time-header'))}>            
<span data-tag="tiny-date-picker__editor-wrap"  className={vc([gcls('editor-wrap'))}>              
<tinyInput placeholder={t('ui.datepicker.selectDate')} model-value={state.visibleDate} size="small" onUpdate:modelValue={(val) => (state.userInputDate = val)} onChange={handleVisibleDateChange}></tinyInput>

            </span>

            
<span clickoutside data-tag="tiny-date-picker__editor-wrap"  className={vc([gcls('editor-wrap'))}>              
<tinyInput ref={input} v-ref="input" onFocus={state.timePickerVisible = true} placeholder={t('ui.datepicker.selectTime')} model-value={state.visibleTime} size="small" onUpdate:modelValue={(val) => (state.userInputTime = val)} onChange={handleVisibleTimeChange}></tinyInput>

              
<timePicker ref={timepicker} v-ref="timepicker" step={step} time-arrow-control={state.arrowControl} show={state.timePickerVisible} style={{display:state.timePickerVisible?'block':'none'}} value={state.date} onPick={handleTimePick}>              </timePicker>

            </span>

          </div>

          
<div data-tag="tiny-date-picker__header"  style={{display:state.currentView !== 'time'?'block':'none'}} className={vc([
              gcls('header'),
              ['month', 'year', 'years', 'yearrange'].includes(state.currentView) && gcls('bordered')
            ])}>            
<button type="button" onClick={cusPrevMonth} style={{display:state.currentView === 'date'?'block':'none'}} aria-label={t(`ui.datepicker.prevMonth`)} data-tag="tiny-picker-panel__icon-btn tiny-date-picker__prev-btn tiny-icon-arrow-left"  className={vc([gcls('icon-btn'), 'float-left'])}>              
<iconChevron ></iconChevron>

            </button>

            


            
<span role="button" data-tag="tiny-date-picker__header-label"  className={vc([gcls('header-label')])}>{state.yearLabel}</span>

            


            
<span style={{display:state.currentView === 'date'?'block':'none'}} role="button" data-tag="tiny-date-picker__header-label"  className={vc([gcls('header-label'), { 'text-color-brand': state.currentView === 'month' }])}>{t(`ui.datepicker.month${state.month + 1}`)}</span>

            
<button type="button" onClick={cusNextMonth} style={{display:state.currentView === 'date'?'block':'none'}} aria-label={t(`ui.datepicker.nextMonth`)} data-tag="tiny-picker-panel__icon-btn tiny-date-picker__next-btn tiny-icon-arrow-right"  className={vc([gcls('icon-btn'), 'float-right'])}>              
<iconChevron ></iconChevron>

            </button>

          </div>


          
<div data-tag="tiny-picker-panel__content"  className={vc([gcls('content'))}>            
<dateTable ref={dateTable} v-ref="dateTable" style={{display:state.currentView === 'date'?'block':'none'}} onPick={handleDatePick} selection-mode={state.selectionMode} first-day-of-week={state.firstDayOfWeek} value={state.value} default-value={state.defaultValue ? new Date(state.defaultValue) : null} date={state.date} cell-class-name={state.cellClassName} disabled-date={state.disabledDate} show-week-number={showWeekNumber} format-weeks={formatWeeks}>            </dateTable>

            
<yearTable ref={yearTable} v-ref="yearTable" style={{display:['year', 'years', 'yearrange'].includes(state.currentView)?'block':'none'}} value={state.value} default-value={state.defaultValue ? new Date(state.defaultValue) : null} date={state.date} disabled-date={state.disabledDate} selection-mode={state.selectionMode} start-year={state.startYear} onPick={handleYearPick}>            </yearTable>

            
<monthTable ref={monthTable} v-ref="monthTable" style={{display:state.currentView === 'month'?'block':'none'}} onPick={handleMonthPick} value={state.value} default-value={state.defaultValue ? new Date(state.defaultValue) : null} date={state.date} disabled-date={state.disabledDate}>            </monthTable>

          </div>

        </div>

      </div>


      
<div data-tag="tiny-picker-panel__timezone" style={{display:state.isShowTz || state.timezone.isServiceTimezone?'block':'none'}} clickoutside>        
<tinyInput value={state.tz} onChange={(e)=>state.tz = e.value} disabled={state.timezone.isServiceTimezone} onUpdate:modelValue={searchTz} placeholder={t('ui.datepicker.timezone')}>          
<template slot>            
<Component fill="#ccc" is={state.showpopup ? 'IconChevronDown' : 'IconChevronUp'} onClick={toggleTz}></Component>

          </template>

        </tinyInput>

        
<div data-tag="tiny-picker-panel__tzlist">          
<tinyPopup value={state.showpopup} onChange={(e)=>state.showpopup = e.value} overlay={false} position="up" duration={0.2} closeable={false}>            
<div data-tag="tzlist">              
<ul >                

  {
    state.renderTzdata.map((tz, index)=>(
      <li data-tag="tiny-picker-panel__tzlist-li" title={tz.name} style={{display:!tz.visible?'block':'none'}}  key={index} onClick={selectTz(tz)}>                  
{tz.name}

                </li>
    ))
  }
  

              </ul>

            </div>

          </tinyPopup>

        </div>

      </div>


      
<div data-tag="tiny-picker-panel__footer"  style={{display:state.isShowFooter?'block':'none'}} className={vc([gcls('footer'))}>        
<tinyButton size="mini" type="text" data-tag="tiny-picker-panel__link-btn"  onClick={changeToNow} style={{display:!['dates', 'years'].includes(state.selectionMode)?'block':'none'}} className={vc([gcls('link-btn'))}>          
{t('ui.datepicker.now')}

        </tinyButton>

        
<tinyButton type="primary" size="mini" data-tag="tiny-picker-panel__link-btn"  onClick={confirm} className={vc(['float-right', gcls('link-btn')])}>          
{t('ui.datepicker.confirm')}

        </tinyButton>

      </div>

    </div>

  </transition>


      );
    }
    