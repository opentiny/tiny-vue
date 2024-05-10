
    import { renderless, api } from '@opentiny/vue-renderless/calendar-view/vue'
    import '@opentiny/vue-theme/calendar-view/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function calendarView(props) {
      const {modelValue,showMark,showNewSchedule,setDayBgColor,disabled,mode,modes,year,month,dayTimes,events,height,markColor,multiSelect} = props
      const defaultProps = {
        ...$props,
        ...props,
        modelValue,showMark,showNewSchedule,setDayBgColor,disabled,mode,modes,year,month,dayTimes,events,height,markColor,multiSelect
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
          
<div  className="tiny-calendar-view">    
<div  className="tiny-calendar-view__header">      
<tinyButton onClick={toToday}>{t('ui.calendarView.backToday')}</tinyButton>

      
<tinyDate value={state.currentDate} onChange={(e)=>state.currentDate = e.value}  shape="filter" type="month" clearable={false} onChange={currentDateChange} format={t('ui.calendarView.dateFormat')} className="tiny-calendar-view__picker"></tinyDate>

      
<div  className="tiny-calendar-view__tool">        
<Slot name="tool" parent_children={props.children} slots={props.slots}></Slot>

      </div>

      
<tinyRadio style={{display:modes.length?'block':'none'}} value={state.mode} onChange={(e)=>state.mode = e.value} size="mini"  className="tiny-calendar-view__radio">        

  {
    modes.map(mode=>(
      <tinyRadio  key={mode} label={mode}>          
<Component is={state.modesIcon[mode]}  className={vc([state.mode === mode && 'fill-brand')}></Component>

        </tinyRadio>
    ))
  }
  

      </tinyRadio>

    </div>

    
<div style={{display:state.mode === 'month'?'block':'none'}}  className="tiny-calendar-view-month">      
<div  className="tiny-calendar-view-month__header">        
<div  onClick={goPrevMonth} className="header-left">          
<iconChevron ></iconChevron>

        </div>

        
<ul  className="header-main">          

  {
    state.weekDays.map(day=>(
      <li  key={day}>            
<span >{t(`ui.calendarView.weekDays.${day}`)}</span>

          </li>
    ))
  }
  

        </ul>

        
<div  onClick={goNextMonth} className="header-right">          
<iconChevron ></iconChevron>

        </div>

      </div>

      
<div  className="tiny-calendar-view-month__main">        
<div  className="main-container">          

  {
    undefined.map((item, index) of state.calendar=>(
      <ul  key={index}>            

  {
    undefined.map((day, i) of item=>(
      <li  key={i} onClick={selectDay(day)} style={{ 'width': '14.2857%' }}  className={vc([
                i === 0 || i === 6 ? 'is-weekends' : '',
                day.isLast || day.isNext || day.disabled ? '' : isSelectedDate(day) ? 'is-selected' : 'not-selected',
                'bg-' + getDayBgColor(day)
              ])}>              
<div style={{display:multiSelect && isSelectedDate(day)?'block':'none'}}  className="day-selected">                
<iconChecked ></iconChecked>

              </div>

              
<div   className={vc([
                  day.isLast || day.isNext
                    ? 'is-next-or-last'
                    : isToday(day) || isSelectedDate(day)
                      ? 'is-selected'
                      : '',
                  day.disabled ? 'is-disabled' : ''
                ],'date')}>                
{isToday(day) ? t('ui.datepicker.today') : day.value}

              </div>

              
<div  style="max-height: calc(100% - 26px)" className="day-events">                

  {
    undefined.map((event, idx) of getEventByTime(day, _constants.DAY_START_TIME, _constants.DAY_END_TIME)=>(
      <div  key={idx} onMouseenter={handleMouseenter($event, event)} onMouseleave={handleMouseleave($event, event)}  className="events-container">                  
<div style={{display:
                      isStartOrEndDay('start', day.value, _constants.DAY_START_TIME, _constants.DAY_END_TIME, event)
                    ?'block':'none'}}   className={vc([event.dayNumber > 1 && 'multi-day','events-start]')}>                    
<span   className={vc([event.theme ? 'theme-' + event.theme : '','events-title]')}>                      
{event.title}

                    </span>

                  </div>

                  
<div style={{display:!(
                      isStartOrEndDay('start', day.value, _constants.DAY_START_TIME, _constants.DAY_END_TIME, event)
                    )?'block':'none'}}   className={vc([
                      isStartOrEndDay('end', day.value, _constants.DAY_START_TIME, _constants.DAY_END_TIME, event)
                        ? 'is-end'
                        : '',
                      event.theme ? 'bg-' + event.theme : ''
                    ],'events-end')}></div>

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

    
<div style={{display:!(!(
                      isStartOrEndDay('start', day.value, _constants.DAY_START_TIME, _constants.DAY_END_TIME, event)
                    ))?'block':'none'}}  className="tiny-calendar-view-week">      
<div  className="tiny-calendar-view-week__header">        
<div  onClick={getPrevWeek} className="header-left">          
<iconChevron ></iconChevron>

        </div>

        
<ul  className="header-main">          

  {
    state.weekDates.map((date, index)=>(
      <li  key={date.value}>            
<Slot name="header" slot-scope={{
                date: date.value,
                weekDay: t(`ui.calendarView.weekDays.${index}`)
              }} parent_children={props.children} slots={props.slots}>              
<span   className={vc([dateIsToday(date.value) && 'is-today','date]')}>                
<span >{date.value.split('-')[2]}</span>

                
<span style={{display:isShowMark(date.value)?'block':'none'}}   className={vc([date.value.split('-')[2] > 9 ? 'is-two-digit' : '', markColor ? `mark-${markColor}` : ''],'mark')}></span>

              </span>

              
<span   className={vc([dateIsToday(date.value) && 'is-today','week-day]')}>{dateIsToday(date.value) ? t('ui.datepicker.today') : t(`ui.calendarView.weekDays.${index}`)}</span>

            </Slot>

          </li>
    ))
  }
  

        </ul>

        
<div  onClick={getNextWeek} className="header-right">          
<iconChevron ></iconChevron>

        </div>

      </div>

      
<div style={{display:state.mode === 'timeline'?'block':'none'}}  style={{ 'height': height }} className="tiny-calendar-view-week__timeline">        
<div  className="day-times">          
<ul >            

  {
    state.dayTimes.map((item, i)=>(
      <li  key={item.time}  className={vc([i % 2 === 1 && 'is-odd-num')}>              
<span >{item.text.includes('30') ? '' : item.text}</span>

            </li>
    ))
  }
  

          </ul>

        </div>

        
<div  className="day-events">          
<ul >            

  {
    state.weekDates.map((date, index)=>(
      <li  key={date.value} style="width: calc((100% - 10px) / 7)"  className={vc([index === 0 || index === 6 ? 'is-weekends' : '')}>              
<Slot name={'timeline' + (index + 1)} slot-scope={{
                  date: date.value,
                  events: state.curWeekEvents[date.value]
                }} parent_children={props.children} slots={props.slots}>                
<ul  className="events-list">                  

  {
    state.dayTimes.map((item, i)=>(
      <li  key={date.value + item.time}  className={vc([i % 2 === 0 && 'is-even-num')}>                    

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
                      }} className={vc([`theme-${event.theme || 'blue'}`],'events-item')}>                      
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

      
<div style={{display:state.mode === 'schedule'?'block':'none'}}  style={{ 'height': height }} className="tiny-calendar-view-week__schedule">        
<ul >          

  {
    state.weekDates.map((date, index)=>(
      <li  key={date.value} style="width: 14.28%">            
<Slot name={'weekday' + (index + 1)} slot-scope={{
                date: date.value,
                events: state.curWeekEvents[date.value]
              }} parent_children={props.children} slots={props.slots}>              

  {
    undefined.map((event, idx) of state.curWeekEvents[date.value] || []=>(
      <div  key={idx}  className="day-events">                
<div  className="title">{event.title}</div>

                
<div  className="date">                  
{getEventShowTime('start', event, date.value)}
 - 
{getEventShowTime('end', event, date.value)}

                </div>

                
<p  className="content">{event.content || ''}</p>

              </div>
    ))
  }
  

            </Slot>

            
<div style={{display:isShowNewSchedule(date.value)?'block':'none'}}  onClick={newSchedule(date.value)} className="new-schedule">              
<iconPlus ></iconPlus>

              
<span >{t('ui.calendarView.new')}</span>

            </div>

          </li>
    ))
  }
  

        </ul>

      </div>

    </div>

    
<tinyTooltip ref={tooltip} v-ref="tooltip" value={state.eventTipVisible} onChange={(e)=>state.eventTipVisible = e.value} popper-class="tiny-calendar-view-tooltip" manual={true} effect="light" placement="right">      
<template slot>        
<div  className="tooltip-main">          
<div  className="title">{state.eventTipContent.title}</div>

          
<div  className="date">            
{state.eventTipContent.startDay}
 
{state.eventTipContent.startTime}
 ~
            
{state.eventTipContent.endDay}
 
{state.eventTipContent.endTime}

          </div>

          
<p  className="content">{state.eventTipContent.content || ''}</p>

        </div>

      </template>

    </tinyTooltip>

  </div>


      );
    }
    