
    import { renderless, api } from '@opentiny/vue-renderless/calendar-view/vue'
    import '@opentiny/vue-theme/calendar-view/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function calendarView(props) {
      const {_constants,modelValue,showMark,showNewSchedule,setDayBgColor,disabled,mode,modes,year,month,dayTimes,events,height,mark-color,multi-select} = props
      const defaultProps = {
        ...$props,
        ...props,
        _constants,modelValue,showMark,showNewSchedule,setDayBgColor,disabled,mode,modes,year,month,dayTimes,events,height,mark-color,multi-select
      }
      const { ref, current: vm, parent } = useVm()
      const tooltip=useRef()
      const { state,toToday,currentDateChange,goPrevMonth,goNextMonth,selectDay,handleMouseenter,handleMouseleave,getPrevWeek,getNextWeek,newSchedule } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[tooltip]
      })
      return (
          
<div data-tag="tiny-calendar-view"  className="w-full h-auto">    
<tinyTooltip ref={tooltip} v-ref="tooltip" value={state.eventTipVisible} onChange={(e)=>state.eventTipVisible = e.value} popper-class="absolute max-w-[theme(spacing.80)]" manual={true} effect="light" placement="right">      
<template slot>        
<div  className="p-2">          
<div  className="px-1.5 mb-1.5 border-l-2 border-color-brand">{state.eventTipContent.title}</div>

          
<div  className="mb-1.5 px-2 text-color-text-placeholder">            
{state.eventTipContent.startDay}
 
{state.eventTipContent.startTime}
 ~
            
{state.eventTipContent.endDay}
 
{state.eventTipContent.endTime}

          </div>

          
<p  className="px-2 text-color-icon-primary">{state.eventTipContent.content || ''}</p>

        </div>

      </template>

    </tinyTooltip>

    
<div data-tag="tiny-calendar-view-today"  className="flex justify-around items-center mb-3">      
<tinyButton onClick={toToday}>{t('ui.calendarView.backToday')}</tinyButton>

      
<tinyDate value={state.currentDate} onChange={(e)=>state.currentDate = e.value}  shape="filter" type="month" clearable={false} onChange={currentDateChange} format={t('ui.calendarView.dateFormat')} className="ml-5 shrink-0"></tinyDate>

      
<div  data-tag="tiny-calendar-view-tool" className="flex-1 mx-5">        
<Slot name="tool" parent_children={props.children} slots={props.slots}></Slot>

      </div>

      
<tinySlider style={{display:modes.length?'block':'none'}} value={state.mode} onChange={(e)=>state.mode = e.value} type="icon"  className="shrink-0">        

  {
    modes.map(mode=>(
      <tinySlider  key={mode} label={mode}>          
<Component is={state.modesIcon[mode]}></Component>

        </tinySlider>
    ))
  }
  

      </tinySlider>

    </div>

    
<div data-tag="tiny-calendar-view-monthbox" style={{display:state.mode === 'month'?'block':'none'}}  className="shadow-sm">      
<div data-tag="tiny-calendar-view-month"  className="flex relative justify-around h-10 shadow-sm">        
<div data-tag="tiny-calendar-view-prevmonth"  onClick={goPrevMonth} className="absolute left-3 top-2.5 cursor-pointer">          
<iconChevron ></iconChevron>

        </div>

        
<ul data-tag="tiny-calendar-view-monthlist"  className="flex justify-around flex-1 h-full">          

  {
    state.weekDays.map(day=>(
      <li data-tag="tiny-calendar-view-monthitem"  key={day}  className="leading-10">            
<span  className="text-sm text-color-text-primary">{t(`ui.calendarView.weekDays.${day}`)}</span>

          </li>
    ))
  }
  

        </ul>

        
<div data-tag="tiny-calendar-view-nextmonth"  onClick={goNextMonth} className="absolute right-3 top-2.5 cursor-pointer">          
<iconChevron ></iconChevron>

        </div>

      </div>

      
<div data-tag="tiny-calendar-view-calendarbox"  className="w-full overflow-hidden">        
<div  className="w-full mt-0.5">          

  {
    undefined.map((item, index) of state.calendar=>(
      <ul data-tag="tiny-calendar-view-calendarlist"  key={index}  className="w-full flex justify-around border-b border-color-bg-2">            

  {
    undefined.map((day, i) of item=>(
      <li data-tag="tiny-calendar-view-calendaritem"  key={i} onClick={selectDay(day)} style={{ 'width': '14.2857%' }}   className={vc([
                m(
                  i === 0 || i === 6 ? 'bg-color-bg-6' : 'bg-color-bg-1',
                  day.isLast || day.isNext || day.disabled
                    ? ''
                    : isSelectedDate(day)
                      ? 'bg-color-brand-hover-subtle hover:bg-color-brand-hover-subtle'
                      : 'hover:bg-color-brand-hover-subtler',
                  gcls('bg-' + getDayBgColor(day))
                )
              ,'py-0.5 relative h-20 overflow-hidden border-r border-color-bg-2]')}>              
<div data-tag="tiny-calendar-view-multiselect" style={{display:multiSelect && isSelectedDate(day)?'block':'none'}}  className="absolute top-0 right-0 bg-color-brand h-4 w-4 overflow-hidden rounded-bl-lg">                
<iconChecked  className="fill-color-brand relative -right-px -top-0.5"></iconChecked>

              </div>

              
<div data-tag="tiny-calendar-view-daytag"   className={vc([
                  m(
                    day.isLast || day.isNext
                      ? 'text-color-text-primary opacity-30'
                      : isToday(day) || isSelectedDate(day)
                        ? 'text-color-brand'
                        : 'text-color-text-primary',
                    day.disabled ? 'text-color-none-hover' : ''
                  )
                ,'py-1.5 pl-2]')}>                
{isToday(day) ? t('ui.datepicker.today') : day.value}

              </div>

              
<div data-tag="tiny-calendar-view-timebox"  style="max-height: calc(100% - 26px)" className="overflow-y-auto scrollbar-size-0 w-full">                

  {
    undefined.map((event, idx) of getEventByTime(day, _constants.DAY_START_TIME, _constants.DAY_END_TIME)=>(
      <div  key={idx} onMouseenter={handleMouseenter($event, event)} onMouseleave={handleMouseleave($event, event)}  className="mb-0.5">                  
<div style={{display:
                      isStartOrEndDay('start', day.value, _constants.DAY_START_TIME, _constants.DAY_END_TIME, event)
                    ?'block':'none'}}   className={vc([event.dayNumber > 1 ? 'pr-0' : 'pr-0.5'],'pl-0.5')}>                    
<span data-tag="tiny-calendar-view-time"   className={vc([gcls('theme-' + event.theme)],'px-1.5 inline-block rounded-sm leading-5 line-clamp-1')}>                      
{event.title}

                    </span>

                  </div>

                  
<div data-tag="tiny-calendar-view-theme" style={{display:!(
                      isStartOrEndDay('start', day.value, _constants.DAY_START_TIME, _constants.DAY_END_TIME, event)
                    )?'block':'none'}}   className={vc([
                      isStartOrEndDay('end', day.value, _constants.DAY_START_TIME, _constants.DAY_END_TIME, event)
                        ? 'mr-0.5'
                        : 'mr-0',
                      gcls('bg-' + event.theme)
                    ],'h-5 leading-5')}></div>

                </div>
    ))
  }
  

              </div>

            </li>
    ))
  }
  

          </ul>
    ))
  }
  

        </div>

      </div>

    </div>

    
<div data-tag="tiny-calendar-view-not-month" style={{display:!(!(
                      isStartOrEndDay('start', day.value, _constants.DAY_START_TIME, _constants.DAY_END_TIME, event)
                    ))?'block':'none'}}  className="shadow-sm">      
<div  className="flex justify-around items-center h-10 shadow-sm">        
<div  data-tag="tiny-calendar-view-prevweek" onClick={getPrevWeek} className="w-7 shrink-0 text-right cursor-pointer">          
<iconChevron ></iconChevron>

        </div>

        
<ul data-tag="tiny-calendar-view-weekdates"  className="flex justify-around flex-1 h-full">          

  {
    state.weekDates.map((date, index)=>(
      <li data-tag="tiny-calendar-view-weekitem"  key={date.value}  className="leading-10">            
<Slot name="header" slot-scope={{
                date: date.value,
                weekDay: t(`ui.calendarView.weekDays.${index}`)
              }} parent_children={props.children} slots={props.slots}>              
<span   className={vc([dateIsToday(date.value) ? 'text-color-brand' : 'text-color-text-primary'],'relative mr-2.5 text-base')}>                
<span >{date.value.split('-')[2]}</span>

                
<span style={{display:isShowMark(date.value)?'block':'none'}}   className={vc([date.value.split('-')[2] > 9 ? 'left-2' : 'left-0.5', gcls(`mark-${markColor}`)],'w-1.5 h-1.5 absolute -bottom-2 rounded-full')}></span>

              </span>

              
<span   className={vc([dateIsToday(date.value) ? 'text-color-brand' : 'text-color-text-placeholder'],'text-sm')}>{dateIsToday(date.value) ? t('ui.datepicker.today') : t(`ui.calendarView.weekDays.${index}`)}</span>

            </Slot>

          </li>
    ))
  }
  

        </ul>

        
<div data-tag="tiny-calendar-view-nextvweek"  onClick={getNextWeek} className="w-7 shrink-0 text-left cursor-pointer">          
<iconChevron ></iconChevron>

        </div>

      </div>

      
<div data-tag="tiny-calendar-view-timeline" style={{display:state.mode === 'timeline'?'block':'none'}}  style={{ 'height': height }} className="w-full h-112 flex overflow-y-auto mt-1">        
<div  data-tag="tiny-calendar-view-timelinelist" className="w-12">          
<ul >            

  {
    state.dayTimes.map((item, i)=>(
      <li data-tag="tiny-calendar-view-timelineitem"  key={item.time}   className={vc([i % 2 === 1 ? 'border-color-bg-2' : 'border-color-bg-1'],'h-5 text-center border-b')}>              
<span  className="text-sm text-color-text-primary">{item.text.includes('30') ? '' : item.text}</span>

            </li>
    ))
  }
  

          </ul>

        </div>

        
<div  data-tag="tiny-calendar-view-timelinelist" className="flex-1">          
<ul  className="w-full flex justify-around">            

  {
    state.weekDates.map((date, index)=>(
      <li data-tag="tiny-calendar-view-timelineitem"  key={date.value}  style="width: calc((100% - 10px) / 7)"  className={vc([index === 0 || index === 6 ? 'bg-color-bg-6' : ''],'relative')}>              
<Slot name={'timeline' + (index + 1)} slot-scope={{
                  date: date.value,
                  events: state.curWeekEvents[date.value]
                }} parent_children={props.children} slots={props.slots}>                
<ul >                  

  {
    state.dayTimes.map((item, i)=>(
      <li  key={date.value + item.time}   className={vc([i % 2 === 0 ? 'border-dashed' : 'border-solid'],'relative h-5 p-0.5 list-none border-b border-color-bg-2')}>                    

  {
    undefined.map((event, idx) of getEventByTime(
                        date.value,
                        item.time,
                        state.dayTimes[i + 1] && state.dayTimes[i + 1].time
                      )=>(
      <div  key={idx}   style={{
                        'height': event.height + 'px',
                        'left': event.left + 'px',
                        'width': `calc(92% - ${event.left}px)`
                      }} className={vc([gcls(`theme-${event.theme || blue}`)],'w-11/12 flex items-center px-1.5 absolute top-0 left-0 z-10 leading-normal rounded-sm')}>                      
<span >{event.title}</span>

                    </div>
    ))
  }
  

                  </li>
    ))
  }
  

                </ul>

              </Slot>

            </li>
    ))
  }
  

          </ul>

        </div>

      </div>

      
<div data-tag="tiny-calendar-view-schedule" style={{display:state.mode === 'schedule'?'block':'none'}}  style={{ 'height': height }} className="w-full px-6 pb-4 overflow-y-auto h-112">        
<ul  data-tag="tiny-calendar-view-schedulelist" className="flex w-full">          

  {
    state.weekDates.map((date, index)=>(
      <li data-tag="tiny-calendar-view-scheduleitem"  key={date.value}  style="width: 14.28%" className="h-full py-3 px-2">            
<Slot name={'weekday' + (index + 1)} slot-scope={{
                date: date.value,
                events: state.curWeekEvents[date.value]
              }} parent_children={props.children} slots={props.slots}>              

  {
    undefined.map((event, idx) of state.curWeekEvents[date.value] || []=>(
      <div data-tag="tiny-calendar-view-curWeek"  key={idx}  className="py-1.5 h-auto border border-color-border-separator rounded mb-2 shadow-sm">                
<div  className="px-1.5 mb-1.5 border-l-2 border-color-brand">{event.title}</div>

                
<div  className="mb-1.5 px-2 text-color-text-placeholder">                  
{getEventShowTime('start', event, date.value)}
 - 
{getEventShowTime('end', event, date.value)}

                </div>

                
<p  className="px-2 text-color-icon-primary line-clamp-2">{event.content || ''}</p>

              </div>
    ))
  }
  

            </Slot>

            
<div data-tag="tiny-calendar-view-newschedule" style={{display:isShowNewSchedule(date.value)?'block':'none'}}  onClick={newSchedule(date.value)} className="h-8 text-center leading-8 w-full mt-2 border border-color-border-separator rounded cursor-pointer">              
<iconPlus  className="align-sub fill-color-text-placeholder"></iconPlus>

              
<span  className="ml-1 text-color-text-placeholder">{t('ui.calendarView.new')}</span>

            </div>

          </li>
    ))
  }
  

        </ul>

      </div>

    </div>

  </div>


      );
    }
    