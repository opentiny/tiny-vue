
    import { renderless, api } from '@opentiny/vue-renderless/date-range/vue'
    import '@opentiny/vue-theme/date-range/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function dateRange(props) {
      const {emitter,step,showWeekNumber,formatWeeks} = props
      const defaultProps = {
        ...$props,
        ...props,
        emitter,step,showWeekNumber,formatWeeks
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
<div style={{display:state.visible?'block':'none'}} data-tag="tiny-picker-panel tiny-date-range-picker tiny-popper"  ref={refDateRange} v-ref="refDateRange" className={vc([
        m(
          gcls(['picker-panel', 'date-range-picker']),
          state.popperClass
        )
      )}>      
<div data-tag="tiny-picker-panel__body-wrapper"  className="relative">        
<Slot name="sidebar" data-tag="tiny-picker-panel__sidebar"  parent_children={props.children} slots={props.slots} className={vc([gcls('sidebar'))}></Slot>

        
<div style={{display:state.shortcuts?'block':'none'}} ref={shortcut} v-ref="shortcut" data-tag="tiny-picker-panel__sidebar"  className={vc([gcls('sidebar'))}>          

  {
    state.shortcuts.map((shortcut, key)=>(
      <button type="button" data-tag="tiny-picker-panel__shortcut"  key={key}  onClick={handleShortcutClick(shortcut)} className={vc([
              m(
                gcls('shortcut'),
                state.singleSelect &&
                  shortcut.type === state.shortcutType &&
                  shortcut.text === state.shortcutText &&
                  gcls('shortcut-selected')
              )
            )}>            
{shortcut.text}

          </button>
    ))
  }
  

        </div>

        
<div data-tag="tiny-picker-panel__body">          
<div style={{display:state.showTime?'block':'none'}} data-tag="tiny-date-range-picker__time-header"  className={vc([gcls('time-header'))}>            
<span data-tag="tiny-date-range-picker__editors-wrap"  className={vc([gcls(['editors-wrap', 'is-left']))}>              
<span data-tag="tiny-date-range-picker__time-picker-wrap"  className={vc([gcls(['time-picker-wrap', 'time-picker-wrap-left']))}>                
<tinyInput size="small" disabled={state.rangeState.selecting} ref={minInput} v-ref="minInput" placeholder={t('ui.datepicker.startDate')} data-tag="tiny-date-range-picker__editor" custom-class={gcls('editor')} modelValue={state.minVisibleDate} onUpdate:modelValue={(val) => handleDateInput(val, 'min')} onChange={(val) => handleDateChange(val, 'min')}></tinyInput>

              </span>

              
<span data-tag="tiny-date-range-picker__time-picker-wrap" clickoutside  className={vc([gcls('time-picker-wrap'))}>                
<tinyInput size="small" data-tag="tiny-date-range-picker__editor" custom-class={gcls('editor')} disabled={state.rangeState.selecting} placeholder={t('ui.datepicker.startTime')} modelValue={state.minVisibleTime} onFocus={state.minTimePickerVisible = true} onUpdate:modelValue={(val) => handleTimeInput(val, 'min')} onChange={(val) => handleTimeChange(val, 'min')}></tinyInput>

                
<timePicker ref={minTimePicker} v-ref="minTimePicker" step={step} time-arrow-control={state.arrowControl} show={state.minTimePickerVisible} value={state.minDate} onPick={handleMinTimePick}>                </timePicker>

              </span>

            </span>

            
<span data-tag="tiny-icon-arrow-right"></span>

            
<span data-tag="tiny-date-range-picker__editors-wrap is-right"  className={vc([gcls(['editors-wrap', 'is-right']))}>              
<span data-tag="tiny-date-range-picker__time-picker-wrap"  className={vc([gcls(['time-picker-wrap', 'time-picker-wrap-left']))}>                
<tinyInput size="small" data-tag="tiny-date-range-picker__editor" custom-class={gcls('editor')} disabled={state.rangeState.selecting} placeholder={t('ui.datepicker.endDate')} modelValue={state.maxVisibleDate} readonly={!state.minDate} onUpdate:modelValue={(val) => handleDateInput(val, 'max')} onChange={(val) => handleDateChange(val, 'max')}></tinyInput>

              </span>

              
<span data-tag="tiny-date-range-picker__time-picker-wrap" clickoutside  className={vc([gcls('time-picker-wrap'))}>                
<tinyInput size="small" data-tag="tiny-date-range-picker__editor" custom-class={gcls('editor')} disabled={state.rangeState.selecting} placeholder={t('ui.datepicker.endTime')} modelValue={state.maxVisibleTime} readonly={!state.minDate} onFocus={state.minDate && (state.maxTimePickerVisible = true)} onUpdate:modelValue={(val) => handleTimeInput(val, 'max')} onChange={(val) => handleTimeChange(val, 'max')}></tinyInput>

                
<timePicker ref={maxTimePicker} v-ref="maxTimePicker" step={step} time-arrow-control={state.arrowControl} show={state.maxTimePickerVisible} value={state.maxDate} onPick={handleMaxTimePick}>                </timePicker>

              </span>

            </span>

          </div>

          
<div data-tag="tiny-picker-panel__content tiny-date-range-picker__content is-left"  className={vc([gcls(['content', 'is-left']))}>            
<div data-tag="tiny-date-range-picker__header"  className={vc([gcls('header'))}>              
<button type="button" onClick={leftPrevYear} data-tag="tiny-picker-panel__icon-btn tiny-icon-d-arrow-left"  className={vc([gcls(['icon-btn', 'arrow-left']))}>                
<iconDouble ></iconDouble>

              </button>

              
<button type="button" onClick={leftPrevMonth} data-tag="tiny-picker-panel__icon-btn tiny-icon-arrow-left"  className={vc([gcls(['icon-btn', 'arrow-left']))}>                
<iconChevron ></iconChevron>

              </button>

              
<button type="button" onClick={leftNextYear} style={{display:state.unlinkPanels?'block':'none'}} disabled={!state.enableYearArrow}  data-tag="tiny-picker-panel__icon-btn tiny-icon-d-arrow-right" className={vc({ 'is-disabled': !state.enableYearArrow })}>                
<iconDouble ></iconDouble>

              </button>

              
<button type="button" onClick={leftNextMonth} style={{display:state.unlinkPanels?'block':'none'}} disabled={!state.enableMonthArrow}  data-tag="tiny-picker-panel__icon-btn tiny-icon-arrow-right" className={vc({ 'is-disabled': !state.enableMonthArrow })}>                
<iconChevron ></iconChevron>

              </button>

              
<div  className="mx-12">{state.leftLabel}</div>

            </div>

            
<dateTable selection-mode="range" date={state.leftDate} default-value={state.defaultValue} min-date={state.minDate} max-date={state.maxDate} range-state={state.rangeState} disabled-date={state.disabledDate} cell-class-name={state.cellClassName} onChangerange={handleChangeRange} first-day-of-week={state.firstDayOfWeek} show-week-number={showWeekNumber} format-weeks={formatWeeks} onPick={handleRangePick}>            </dateTable>

          </div>

          
<div data-tag="tiny-picker-panel__content tiny-date-range-picker__content is-right"  className={vc([gcls(['content', 'is-right']))}>            
<div data-tag="tiny-date-range-picker__header"  className={vc([gcls('header'))}>              
<button type="button" onClick={rightPrevYear} style={{display:state.unlinkPanels?'block':'none'}} disabled={!state.enableYearArrow}  data-tag="tiny-picker-panel__icon-btn tiny-icon-d-arrow-left" className={vc([m(gcls(['icon-btn', 'arrow-left']), !state.enableYearArrow && gcls('is-disabled')))}>                
<iconDouble ></iconDouble>

              </button>

              
<button style={{display:state.unlinkPanels?'block':'none'}} data-tag="tiny-picker-panel__icon-btn tiny-icon-arrow-left" type="button" disabled={!state.enableMonthArrow}  onClick={rightPrevMonth} className={vc([m(gcls(['icon-btn', 'arrow-left']), !state.enableMonthArrow && gcls('is-disabled')))}>                
<iconChevron ></iconChevron>

              </button>

              
<button type="button" onClick={rightNextYear} data-tag="tiny-picker-panel__icon-btn tiny-icon-d-arrow-right"  className={vc([gcls(['icon-btn', 'arrow-right']))}>                
<iconDouble ></iconDouble>

              </button>

              
<button type="button" onClick={rightNextMonth} data-tag="tiny-picker-panel__icon-btn tiny-icon-arrow-right"  className={vc([gcls(['icon-btn', 'arrow-right']))}>                
<iconChevron ></iconChevron>

              </button>

              
<div >{state.rightLabel}</div>

            </div>

            
<dateTable selection-mode="range" date={state.rightDate} default-value={state.defaultValue} min-date={state.minDate} max-date={state.maxDate} range-state={state.rangeState} disabled-date={state.disabledDate} cell-class-name={state.cellClassName} onChangerange={handleChangeRange} first-day-of-week={state.firstDayOfWeek} show-week-number={showWeekNumber} format-weeks={formatWeeks} onPick={handleRangePick}>            </dateTable>

          </div>

        </div>

      </div>

      
<div data-tag="tiny-picker-panel__footer" style={{display:state.showTime?'block':'none'}}  className={vc([gcls('footer'))}>        
<tinyButton size="mini" type="text" data-tag="tiny-picker-panel__link-btn" onClick={handleClear} custom-class="text-left pl-0">          
{t('ui.datepicker.clear')}

        </tinyButton>

        
<tinyButton type="primary" size="mini" data-tag="tiny-picker-panel__link-btn" custom-class="float-right" disabled={state.btnDisabled} onClick={handleConfirm(false)}>          
{t('ui.datepicker.confirm')}

        </tinyButton>

      </div>

    </div>

  </transition>


      );
    }
    