
    import { renderless, api } from '@opentiny/vue-renderless/calendar/vue'
    import '@opentiny/vue-theme/calendar/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function calendar(props) {
      const {mode,year,month,events,showSelected} = props
      const defaultProps = {
        ...$props,
        ...props,
        mode,year,month,events,showSelected
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,toToday,toggeModel,selectDay,selectMonth } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div  className="tiny-calendar">    


    
<div  className="tiny-calendar__header">      
<div style={{display:showSelected && state.selectedTip?'block':'none'}}  className="tiny-calendar__selected">        
{state.selectedTip}

      </div>

      
<Slot name="tool" slot-scope={state} parent_children={props.children} slots={props.slots}>        
<ul  className="tiny-calendar__tool">          
<li >            
<Popover value={state.showYear} onChange={(e)=>state.showYear = e.value} placement="bottom-start" trigger="click" transition="tiny-transition-zoom-in-top" popper-class="tiny-calendar is-popover" visible-arrow={false}>              
<template slot>                
<div  className="tiny-calendar__input">                  
<input value={state.activeYear + t('ui.datepicker.year')} type="text" readonly></input>

                  
<div  className="tiny-calendar__input-btn">                    
<Component  is={state.showYear ? 'icon-chevron-up' : 'icon-chevron-down'} className="tiny-svg-size"></Component>

                  </div>

                </div>

              </template>

              
<template slot>                
<div  className="tiny-calendar__selector">                  
<ul  className="tiny-calendar__poplist">                    

  {
    state.dropdownYear.map(year=>(
      <li  key={year}  onClick={
                        () => {
                          state.activeYear = year
                          state.showYear = false
                        }
                      } title={year + t('ui.datepicker.year')} className={vc(['tiny-calendar__list-item', { 'is-selected': state.activeYear === year }])}>                      
{year + t('ui.datepicker.year')}

                    </li>
    ))
  }
  

                  </ul>

                </div>

              </template>

            </Popover>

          </li>

          
<li style={{display:state.displayMode === 'month'?'block':'none'}}>            
<Popover value={state.showMonth} onChange={(e)=>state.showMonth = e.value} transition="tiny-transition-zoom-in-top" placement="bottom-start" trigger="click" popper-class="tiny-calendar is-popover" visible-arrow={false}>              
<template slot>                
<div  className="tiny-calendar__input">                  
<input value={t('ui.datepicker.month' + state.activeMonth)} type="text" readonly></input>

                  
<div  className="tiny-calendar__input-btn">                    
<Component  is={state.showYear ? 'icon-chevron-up' : 'icon-chevron-down'} className="tiny-svg-size"></Component>

                  </div>

                </div>

              </template>

              
<template slot>                
<div  className="tiny-calendar__selector">                  
<ul  className="tiny-calendar__poplist">                    

  {
    12.map(month=>(
      <li  key={month}  onClick={
                        () => {
                          state.activeMonth = month
                          state.showMonth = false
                        }
                      } title={t('ui.datepicker.month' + month)} className={vc(['tiny-calendar__list-item', { 'is-selected': state.activeMonth === month }])}>                      
{t('ui.datepicker.month' + month)}

                    </li>
    ))
  }
  

                  </ul>

                </div>

              </template>

            </Popover>

          </li>

          
<li >            
<Button type="primary" onClick={toToday}>{state.displayMode === 'month' ? t('ui.datepicker.today') : t('ui.datepicker.currentMonth')}</Button>

          </li>

          
<li >            
<ul  className="tiny-calendar__tabs">              
<li  onClick={toggeModel('month')} className={vc({ active: state.displayMode === 'month' })}>                
{t('ui.datepicker.month')}

              </li>

              
<li  onClick={toggeModel('year')} className={vc({ active: state.displayMode === 'year' })}>                
{t('ui.calendar.showType.year')}

              </li>

            </ul>

          </li>

        </ul>

      </Slot>

    </div>


    
<div  className={vc(['tiny-calendar__main', state.displayMode])}>      


      
<table style={{display:state.displayMode === 'month'?'block':'none'}} style="table-layout: fixed">        
<tr >          
<th >{t('ui.datepicker.weeks.sun')}</th>

          
<th >{t('ui.datepicker.weeks.mon')}</th>

          
<th >{t('ui.datepicker.weeks.tue')}</th>

          
<th >{t('ui.datepicker.weeks.wed')}</th>

          
<th >{t('ui.datepicker.weeks.thu')}</th>

          
<th >{t('ui.datepicker.weeks.fri')}</th>

          
<th >{t('ui.datepicker.weeks.sat')}</th>

        </tr>

        

  {
    undefined.map((item, index) of state.calendar=>(
      <tr  key={index}>          

  {
    undefined.map((day, i) of item=>(
      <td  key={i} onClick={selectDay(day)} width="14.2857%">            
<div  className={vc([
                'tiny-calendar__day',
                {
                  selected: !(day.isLast || day.isNext) && state.selectedDate === getTime(day.value),
                  disable: day.isLast || day.isNext,
                  today: isToday(day)
                }
              ])}>              
<div  className="label">{day.value}</div>

              
<ul  style={{display:!(day.isLast || day.isNext)?'block':'none'}} className="tiny-calendar__events tiny-min-scrollbar">                

  {
    undefined.map((
                    { type, title, content, parseTime: { year, month, day, hours, minutes } }, j
                  ) of getEventByDay(day.value)=>(
      <li  key={j}>                  
<Slot name="day" slot-scope={{
                      type,
                      title,
                      content,
                      year,
                      month,
                      day,
                      hours,
                      minutes
                    }} parent_children={props.children} slots={props.slots}>                    
<tooltip type={type} placement="right"  popper-class="tiny-calendar__tip" mode="hover" className="tiny-calendar__tip">                      
<template slot>                        
<div >                          
<div  className="tiny-calendar__tip-header">                            
<div  className="tiny-calendar__tip-year">                              
{`${year}-${month}-${day}`}

                            </div>

                            
<div  className="tiny-calendar__tip-hours">                              
{`${hours}:${minutes}`}

                            </div>

                          </div>

                          
<div  className={vc(['tiny-calendar__tip-title', type || 'info'])}>                            
{title}

                          </div>

                          
<div  className="tiny-calendar__tip-content">                            
{content}

                          </div>

                        </div>

                      </template>

                      
<div  className={vc(['event', type || 'info'])}>{title}</div>

                    </tooltip>

                  </Slot>

                </li>
    ))
  }
  

              </ul>

            </div>

          </td>
    ))
  }
  

        </tr>
    ))
  }
  

      </table>


      


      
<table style={{display:state.displayMode === 'year'?'block':'none'}} style="table-layout: fixed">        

  {
    undefined.map((item, i) of genMonths()=>(
      <tr  key={i}>          

  {
    undefined.map((mth, j) of item=>(
      <td  key={j} onClick={selectMonth(mth)} width="25%">            
<div  className={vc([
                'tiny-calendar__day',
                {
                  selected: state.activeMonth === mth,
                  'this-month': isThisMonth(mth)
                }
              ])}>              
<div  className="label">{t('ui.datepicker.month' + mth)}</div>

              
<ul  className="tiny-calendar__events tiny-min-scrollbar">                

  {
    undefined.map((
                    { type, title, content, parseTime: { year, month, day, hours, minutes } }, k
                  ) of getEventByMonth(mth)=>(
      <li  key={k}>                  
<Slot name="month" slot-scope={{
                      type,
                      title,
                      content,
                      year,
                      month,
                      day,
                      hours,
                      minutes
                    }} parent_children={props.children} slots={props.slots}>                    
<tooltip type={type}  placement="right" popper-class="tiny-calendar__tip" mode="hover" className="tiny-calendar__tip">                      
<template slot>                        
<div >                          
<div  className="tiny-calendar__tip-header">                            
<div  className="tiny-calendar__tip-year">                              
{`${year}-${month}-${day}`}

                            </div>

                            
<div  className="tiny-calendar__tip-hours">                              
{`${hours}:${minutes}`}

                            </div>

                          </div>

                          
<div  className={vc(['tiny-calendar__tip-title', type || 'info'])}>                            
{title}

                          </div>

                          
<div  className="tiny-calendar__tip-content">                            
{content}

                          </div>

                        </div>

                      </template>

                      
<div  className={vc(['event', type || 'info'])}>{title}</div>

                    </tooltip>

                  </Slot>

                </li>
    ))
  }
  

              </ul>

            </div>

          </td>
    ))
  }
  

        </tr>
    ))
  }
  

      </table>

    </div>

  </div>


      );
    }
    