
    import { renderless, api } from '@opentiny/vue-renderless/date-range/vue'
    import '@opentiny/vue-theme/date-range/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function dateRange(props) {
      const {emitter,step,showWeekNumber,formatWeeks,timeEditable} = props
      const defaultProps = {
        ...$props,
        ...props,
        emitter,step,showWeekNumber,formatWeeks,timeEditable
      }
      const { ref, current: vm, parent } = useVm()
      const refDateRange=useRef()
const shortcut=useRef()
const minInput=useRef()
const minTimePicker=useRef()
const maxTimePicker=useRef()
      const { state,handleShortcutClick,handleMinTimePick,handleMaxTimePick,leftPrevYear,leftPrevMonth,leftNextYear,leftNextMonth,handleChangeRange,handleRangePick,rightPrevYear,rightPrevMonth,rightNextYear,rightNextMonth,handleClear,handleConfirm } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[refDateRange,shortcut,minInput,minTimePicker,maxTimePicker]
      })
      return (
          
<transition name="tiny-zoom-in-top" onAfter={$emit('dodestroy')}>    
<div style={{display:state.visible?'block':'none'}}   ref={refDateRange} v-ref="refDateRange" className={vc([
        {
          'has-sidebar': slots.sidebar || state.shortcuts,
          'has-time': state.showTime
        },
        state.popperClass
      ],'tiny-picker-panel tiny-date-range-picker tiny-popper')}>      
<div  className="tiny-picker-panel__body-wrapper">        
<Slot name="sidebar"  parent_children={props.children} slots={props.slots} className="tiny-picker-panel__sidebar"></Slot>

        
<div ref={shortcut} v-ref="shortcut"  style={{display:state.shortcuts?'block':'none'}} className="tiny-picker-panel__sidebar">          

  {
    state.shortcuts.map((shortcut, key)=>(
      <button type="button"   key={key}  onClick={handleShortcutClick(shortcut)} title={shortcut.text} className={vc({
              'tiny-picker-panel__shortcut-selected':
                state.singleSelect && shortcut.type === state.shortcutType && shortcut.text === state.shortcutText
            },'tiny-picker-panel__shortcut')}>            
{shortcut.text}

          </button>
    ))
  }
  

        </div>

        
<div  className="tiny-picker-panel__body">          
<div  style={{display:state.showTime?'block':'none'}} className="tiny-date-range-picker__time-header">            
<span  className="tiny-date-range-picker__editors-wrap">              
<span  className="tiny-date-range-picker__time-picker-wrap">                
<tinyInput size="small" disabled={state.rangeState.selecting} ref={minInput} v-ref="minInput" placeholder={t('ui.datepicker.startDate')}  modelValue={state.minVisibleDate} onUpdate:modelValue={(val) => handleDateInput(val, 'min')} onChange={(val) => handleDateChange(val, 'min')} className="tiny-date-range-picker__editor"></tinyInput>

              </span>

              
<span  clickoutside className="tiny-date-range-picker__time-picker-wrap">                
<tinyInput size="small"  disabled={state.rangeState.selecting} placeholder={t('ui.datepicker.startTime')} modelValue={state.minVisibleTime} onFocus={state.minTimePickerVisible = true} onUpdate:modelValue={(val) => handleTimeInput(val, 'min')} onChange={(val) => handleTimeChange(val, 'min')} readonly={!timeEditable} className="tiny-date-range-picker__editor"></tinyInput>

                
<timePicker ref={minTimePicker} v-ref="minTimePicker" step={step} time-arrow-control={state.arrowControl} show={state.minTimePickerVisible} value={state.minDate} onPick={handleMinTimePick}>                </timePicker>

              </span>

            </span>

            
<span  className="tiny-icon-arrow-right"></span>

            
<span  className="tiny-date-range-picker__editors-wrap is-right">              
<span  className="tiny-date-range-picker__time-picker-wrap">                
<tinyInput size="small"  disabled={state.rangeState.selecting} placeholder={t('ui.datepicker.endDate')} modelValue={state.maxVisibleDate} readonly={!state.minDate} onUpdate:modelValue={(val) => handleDateInput(val, 'max')} onChange={(val) => handleDateChange(val, 'max')} className="tiny-date-range-picker__editor"></tinyInput>

              </span>

              
<span  clickoutside className="tiny-date-range-picker__time-picker-wrap">                
<tinyInput size="small"  disabled={state.rangeState.selecting} placeholder={t('ui.datepicker.endTime')} modelValue={state.maxVisibleTime} readonly={!state.minDate || !timeEditable} onFocus={state.minDate && (state.maxTimePickerVisible = true)} onUpdate:modelValue={(val) => handleTimeInput(val, 'max')} onChange={(val) => handleTimeChange(val, 'max')} className="tiny-date-range-picker__editor"></tinyInput>

                
<timePicker ref={maxTimePicker} v-ref="maxTimePicker" step={step} time-arrow-control={state.arrowControl} show={state.maxTimePickerVisible} value={state.maxDate} onPick={handleMaxTimePick}>                </timePicker>

              </span>

            </span>

          </div>

          
<div  className="tiny-picker-panel__content tiny-date-range-picker__content is-left">            
<div  className="tiny-date-range-picker__header">              
<button type="button" onClick={leftPrevYear}  className="tiny-picker-panel__icon-btn tiny-icon-d-arrow-left">                
<iconDouble ></iconDouble>

              </button>

              
<button type="button" onClick={leftPrevMonth}  className="tiny-picker-panel__icon-btn tiny-icon-arrow-left">                
<iconChevron ></iconChevron>

              </button>

              
<button type="button" onClick={leftNextYear} style={{display:state.unlinkPanels?'block':'none'}} disabled={!state.enableYearArrow}   className={vc({ 'is-disabled': !state.enableYearArrow },'tiny-picker-panel__icon-btn tiny-icon-d-arrow-right')}>                
<iconDouble ></iconDouble>

              </button>

              
<button type="button" onClick={leftNextMonth} style={{display:state.unlinkPanels?'block':'none'}} disabled={!state.enableMonthArrow}   className={vc({ 'is-disabled': !state.enableMonthArrow },'tiny-picker-panel__icon-btn tiny-icon-arrow-right')}>                
<iconChevron ></iconChevron>

              </button>

              
<div >{state.leftLabel}</div>

            </div>

            
<dateTable selection-mode="range" date={state.leftDate} default-value={state.defaultValue} min-date={state.minDate} max-date={state.maxDate} range-state={state.rangeState} disabled-date={state.disabledDate} cell-class-name={state.cellClassName} onChangerange={handleChangeRange} first-day-of-week={state.firstDayOfWeek} show-week-number={showWeekNumber} format-weeks={formatWeeks} onPick={handleRangePick}>            </dateTable>

          </div>

          
<div  className="tiny-picker-panel__content tiny-date-range-picker__content is-right">            
<div  className="tiny-date-range-picker__header">              
<button type="button" onClick={rightPrevYear} style={{display:state.unlinkPanels?'block':'none'}} disabled={!state.enableYearArrow}   className={vc({ 'is-disabled': !state.enableYearArrow },'tiny-picker-panel__icon-btn tiny-icon-d-arrow-left')}>                
<iconDouble ></iconDouble>

              </button>

              
<button type="button" onClick={rightPrevMonth} style={{display:state.unlinkPanels?'block':'none'}} disabled={!state.enableMonthArrow}   className={vc({ 'is-disabled': !state.enableMonthArrow },'tiny-picker-panel__icon-btn tiny-icon-arrow-left')}>                
<iconChevron ></iconChevron>

              </button>

              
<button type="button" onClick={rightNextYear}  className="tiny-picker-panel__icon-btn tiny-icon-d-arrow-right">                
<iconDouble ></iconDouble>

              </button>

              
<button type="button" onClick={rightNextMonth}  className="tiny-picker-panel__icon-btn tiny-icon-arrow-right">                
<iconChevron ></iconChevron>

              </button>

              
<div >{state.rightLabel}</div>

            </div>

            
<dateTable selection-mode="range" date={state.rightDate} default-value={state.defaultValue} min-date={state.minDate} max-date={state.maxDate} range-state={state.rangeState} disabled-date={state.disabledDate} cell-class-name={state.cellClassName} onChangerange={handleChangeRange} first-day-of-week={state.firstDayOfWeek} show-week-number={showWeekNumber} format-weeks={formatWeeks} onPick={handleRangePick}>            </dateTable>

          </div>

        </div>

      </div>

      
<div  style={{display:state.showTime?'block':'none'}} className="tiny-picker-panel__footer">        
<tinyButton size="mini" type="text"  onClick={handleClear} className="tiny-picker-panel__link-btn">          
{t('ui.datepicker.clear')}

        </tinyButton>

        
<tinyButton plain={state.confirmButtonProps.plain} size="mini" type={state.confirmButtonProps.type}  disabled={state.btnDisabled} onClick={handleConfirm(false)} className="tiny-picker-panel__link-btn">          
{t('ui.datepicker.confirm')}

        </tinyButton>

      </div>

    </div>

  </transition>


      );
    }
    