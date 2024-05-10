
    import { renderless, api } from '@opentiny/vue-renderless/date-panel/vue'
    import '@opentiny/vue-theme/date-panel/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function datePanel(props) {
      const {emitter,step,showWeekNumber,formatWeeks,timeEditable} = props
      const defaultProps = {
        ...$props,
        ...props,
        emitter,step,showWeekNumber,formatWeeks,timeEditable
      }
      const { ref, current: vm, parent } = useVm()
      const input=useRef()
const timepicker=useRef()
const dateTable=useRef()
const yearTable=useRef()
const monthTable=useRef()
      const { state,handleEnter,handleLeave,handleShortcutClick,handleVisibleDateChange,handleVisibleTimeChange,handleTimePick,cusPrevYear,cusPrevMonth,showYearPicker,showMonthPicker,cusNextYear,cusNextMonth,handleDatePick,handleYearPick,handleMonthPick,searchTz,toggleTz,selectTz,changeToNow,confirm } = useSetup({
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
<div style={{display:state.visible?'block':'none'}}   className={vc([
        {
          'has-sidebar': slots.sidebar || state.shortcuts,
          'has-time': state.showTime
        },
        state.popperClass
      ],'tiny-picker-panel tiny-date-picker tiny-popper')}>      
<div  className="tiny-picker-panel__body-wrapper">        
<Slot name="sidebar"  parent_children={props.children} slots={props.slots} className="tiny-picker-panel__sidebar"></Slot>

        
<div  style={{display:state.shortcuts?'block':'none'}} className="tiny-picker-panel__sidebar">          

  {
    state.shortcuts.map((shortcut, key)=>(
      <button type="button"   key={key} onClick={handleShortcutClick(shortcut)} title={shortcut.text} className="tiny-picker-panel__shortcut">            
{shortcut.text}

          </button>
    ))
  }
  

        </div>

        
<div  className="tiny-picker-panel__body">          
<div  style={{display:state.showTime?'block':'none'}} className="tiny-date-picker__time-header">            
<span  className="tiny-date-picker__editor-wrap">              
<tinyInput placeholder={t('ui.datepicker.selectDate')} model-value={state.visibleDate} size="small" onUpdate:modelValue={(val) => (state.userInputDate = val)} onChange={handleVisibleDateChange}></tinyInput>

            </span>

            
<span  clickoutside className="tiny-date-picker__editor-wrap">              
<tinyInput ref={input} v-ref="input" onFocus={state.timePickerVisible = true} placeholder={t('ui.datepicker.selectTime')} model-value={state.visibleTime} size="small" onUpdate:modelValue={(val) => (state.userInputTime = val)} onChange={handleVisibleTimeChange} readonly={!timeEditable}></tinyInput>

              
<timePicker ref={timepicker} v-ref="timepicker" step={step} time-arrow-control={state.arrowControl} show={state.timePickerVisible} style={{display:state.timePickerVisible?'block':'none'}} value={state.date} onPick={handleTimePick}>              </timePicker>

            </span>

          </div>

          
<div   style={{display:state.currentView !== 'time'?'block':'none'}} className={vc({
              'tiny-date-picker__header--bordered': ['month', 'year', 'years', 'yearrange'].includes(state.currentView)
            },'tiny-date-picker__header')}>            
<button type="button" onClick={cusPrevYear} aria-label={t(`ui.datepicker.prevYear`)}  className="tiny-picker-panel__icon-btn tiny-date-picker__prev-btn tiny-icon-d-arrow-left">              
<iconDouble ></iconDouble>

            </button>

            
<button type="button" onClick={cusPrevMonth} style={{display:state.currentView === 'date'?'block':'none'}} aria-label={t(`ui.datepicker.prevMonth`)}  className="tiny-picker-panel__icon-btn tiny-date-picker__prev-btn tiny-icon-arrow-left">              
<iconChevron ></iconChevron>

            </button>

            
<span onClick={showYearPicker} role="button"  className="tiny-date-picker__header-label">{state.yearLabel}</span>

            
<span onClick={showMonthPicker} style={{display:state.currentView === 'date'?'block':'none'}} role="button"   className={vc({ active: state.currentView === 'month' },'tiny-date-picker__header-label')}>{t(`ui.datepicker.month${state.month + 1}`)}</span>

            
<button type="button" onClick={cusNextYear} aria-label={t(`ui.datepicker.nextYear`)}  className="tiny-picker-panel__icon-btn tiny-date-picker__next-btn tiny-icon-d-arrow-right">              
<iconDouble ></iconDouble>

            </button>

            
<button type="button" onClick={cusNextMonth} style={{display:state.currentView === 'date'?'block':'none'}} aria-label={t(`ui.datepicker.nextMonth`)}  className="tiny-picker-panel__icon-btn tiny-date-picker__next-btn tiny-icon-arrow-right">              
<iconChevron ></iconChevron>

            </button>

          </div>


          
<div  className="tiny-picker-panel__content">            
<dateTable ref={dateTable} v-ref="dateTable" style={{display:state.currentView === 'date'?'block':'none'}} onPick={handleDatePick} selection-mode={state.selectionMode} first-day-of-week={state.firstDayOfWeek} value={state.value} default-value={state.defaultValue ? new Date(state.defaultValue) : null} date={state.date} cell-class-name={state.cellClassName} disabled-date={state.disabledDate} show-week-number={showWeekNumber} format-weeks={formatWeeks}>            </dateTable>

            
<yearTable ref={yearTable} v-ref="yearTable" style={{display:['year', 'years', 'yearrange'].includes(state.currentView)?'block':'none'}} value={state.value} default-value={state.defaultValue ? new Date(state.defaultValue) : null} date={state.date} disabled-date={state.disabledDate} selection-mode={state.selectionMode} start-year={state.startYear} onPick={handleYearPick}>            </yearTable>

            
<monthTable ref={monthTable} v-ref="monthTable" style={{display:state.currentView === 'month'?'block':'none'}} onPick={handleMonthPick} value={state.value} default-value={state.defaultValue ? new Date(state.defaultValue) : null} date={state.date} disabled-date={state.disabledDate}>            </monthTable>

          </div>

        </div>

      </div>


      
<div  style={{display:state.isShowTz || state.timezone.isServiceTimezone?'block':'none'}} clickoutside className="tiny-picker-panel__timezone">        
<tinyInput value={state.tz} onChange={(e)=>state.tz = e.value} disabled={state.timezone.isServiceTimezone} onUpdate:modelValue={searchTz} placeholder={t('ui.datepicker.timezone')}>          
<template slot>            
<Component fill="#ccc" is={state.showpopup ? 'IconChevronDown' : 'IconChevronUp'} onClick={toggleTz}></Component>

          </template>

        </tinyInput>

        
<div  className="tiny-picker-panel__tzlist">          
<tinyPopup value={state.showpopup} onChange={(e)=>state.showpopup = e.value} overlay={false} position="up" duration={0.2} closeable={false}>            
<div  className="tzlist">              
<ul >                

  {
    state.renderTzdata.map((tz, index)=>(
      <li  title={tz.name} style={{display:!tz.visible?'block':'none'}}  key={index} onClick={selectTz(tz)} className="tiny-picker-panel__tzlist-li">                  
{tz.name}

                </li>
    ))
  }
  

              </ul>

            </div>

          </tinyPopup>

        </div>

      </div>


      
<div  style={{display:state.isShowFooter?'block':'none'}} className="tiny-picker-panel__footer">        
<tinyButton size="mini" type="text"  onClick={changeToNow} style={{display:!['dates', 'years'].includes(state.selectionMode)?'block':'none'}} className="tiny-picker-panel__link-btn">          
{t('ui.datepicker.now')}

        </tinyButton>

        
<tinyButton type="primary" size="mini"  onClick={confirm} className="tiny-picker-panel__link-btn">          
{t('ui.datepicker.confirm')}

        </tinyButton>

      </div>

    </div>

  </transition>


      );
    }
    