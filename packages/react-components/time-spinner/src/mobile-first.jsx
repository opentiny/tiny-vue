
    import { renderless, api } from '@opentiny/vue-renderless/time-spinner/vue'
    import '@opentiny/vue-theme/time-spinner/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function timeSpinner(props) {
      const {date,defaultValue,showSeconds,arrowControl,amPmMode,step} = props
      const defaultProps = {
        ...$props,
        ...props,
        date,defaultValue,showSeconds,arrowControl,amPmMode,step
      }
      const { ref, current: vm, parent } = useVm()
      const hours=useRef()
const minutes=useRef()
const seconds=useRef()
      const { state,emitSelectRange,adjustCurrentSpinner,handleClick } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[hours,minutes,seconds]
      })
      return (
          
<div data-tag="tiny-time-spinner"  className={vc(['flex', { 'has-seconds': showSeconds }])}>    
<template style={{display:!arrowControl?'block':'none'}}>      
<tinyScrollbar onMouseenter={emitSelectRange('hours')} onMousemove={adjustCurrentSpinner('hours')}  data-tag="tiny-time-spinner__wrapper" wrap-style="max-height: inherit;" data-view-class="tiny-time-spinner__list" view-class={gcls('list')} noresize tag="div" ref={hours} v-ref="hours" className={vc([gcls('wrapper'), state.animationName])}>        

  {
    state.hoursList.map({ disabled, hour }=>(
      <div onClick={handleClick('hours', { value: hour, disabled })}  data-tag="li" key={hour}  className={vc([gcls('item')])}>          
<span  className={vc([m(gcls('text'), { [gcls('active')]: hour === state.hours, [gcls('disabled')]: disabled }))}>{('0' + (amPmMode ? hour % 12 || 12 : hour)).slice(-2)}
{amPm(hour)}</span>

        </div>
    ))
  }
  

      </tinyScrollbar>

      
<tinyScrollbar onMouseenter={emitSelectRange('minutes')} onMousemove={adjustCurrentSpinner('minutes')}  data-tag="tiny-time-spinner__wrapper" wrap-style="max-height: inherit;" data-view-class="tiny-time-spinner__list" view-class={gcls('list')} noresize tag="div" ref={minutes} v-ref="minutes" className={vc([gcls('wrapper'), state.animationName + '-up'])}>        

  {
    state.minutesList.map({ disabled, minute }=>(
      <div onClick={handleClick('minutes', { value: minute, disabled: false })}  key={minute} data-tag="li"  className={vc([gcls('item')])}>          
<span  className={vc([m(gcls('text'), { [gcls('active')]: minute === state.minutes, [gcls('disabled')]: !disabled }))}>{('0' + minute).slice(-2)}</span>

        </div>
    ))
  }
  

      </tinyScrollbar>

      
<tinyScrollbar style={{display:showSeconds?'block':'none'}} onMouseenter={emitSelectRange('seconds')} onMousemove={adjustCurrentSpinner('seconds')}  data-tag="tiny-time-spinner__wrapper" wrap-style="max-height: inherit;" data-view-class="tiny-time-spinner__list" view-class={gcls('list')} noresize tag="div" ref={seconds} v-ref="seconds" className={vc([gcls('wrapper'), state.animationName])}>        

  {
    state.secondsList.map({ second }=>(
      <div onClick={handleClick('seconds', { value: second, disabled: false })}  data-tag="li"  key={second} className={vc([gcls('item')])}>          
<span  className={vc([m(gcls('text'), { [gcls('active')]: second === state.seconds }))}>{('0' + second).slice(-2)}</span>

        </div>
    ))
  }
  

      </tinyScrollbar>

    </template>

    
<template style={{display:arrowControl?'block':'none'}}>      
<div onMouseenter={emitSelectRange('hours')} data-tag="tiny-time-spinner__wrapper is-arrow"  className={vc([gcls(['wrapper', 'is-arrow']))}>        
<i data-tag="tiny-time-spinner__arrow tiny-icon-arrow-up" repeat-click>          
<iconChevron ></iconChevron>

        </i>

        
<i data-tag="tiny-time-spinner__arrow tiny-icon-arrow-down" repeat-click>          
<iconChevron ></iconChevron>

        </i>


        
<ul data-tag="tiny-time-spinner__list" ref={hours} v-ref="hours"  className={vc([state.animationName])}>          

  {
    state.arrowHourList.map((hour, key)=>(
      <div data-tag="li"  key={key}>            
<span  className={vc([
                m(gcls('text'), {
                  [gcls('active')]: hour === state.hours,
                  [gcls('disabled')]:
                    state.hoursList.find((item) => item.hour === hour) &&
                    state.hoursList.find((item) => item.hour === hour).disabled
                })
              )}>{hour === undefined ? '' : ('0' + (amPmMode ? hour % 12 || 12 : hour)).slice(-2) + amPm(hour)}</span>

          </div>
    ))
  }
  

        </ul>

      </div>

      
<div onMouseenter={emitSelectRange('minutes')} data-tag="tiny-time-spinner__wrapper is-arrow"  className={vc([gcls(['wrapper', 'is-arrow']))}>        
<i data-tag="tiny-time-spinner__arrow tiny-icon-arrow-up" repeat-click>          
<iconChevron ></iconChevron>

        </i>

        
<i data-tag="tiny-time-spinner__arrow tiny-icon-arrow-down" repeat-click>          
<iconChevron ></iconChevron>

        </i>

        
<ul data-tag="tiny-time-spinner__list" ref={minutes} v-ref="minutes"  className={vc([state.animationName + '-up'])}>          

  {
    state.arrowMinuteList.map((minute, key)=>(
      <div data-tag="li"  key={key}>            
<span  className={vc([m(gcls('text'), { [gcls('active')]: minute === state.minutes }))}>{minute === undefined ? '' : ('0' + minute).slice(-2)}</span>

          </div>
    ))
  }
  

        </ul>

      </div>

      
<div onMouseenter={emitSelectRange('seconds')} data-tag="tiny-time-spinner__wrapper is-arrow" style={{display:showSeconds?'block':'none'}}  className={vc([gcls(['wrapper', 'is-arrow']))}>        
<i data-tag="tiny-time-spinner__arrow tiny-icon-arrow-up" repeat-click>          
<iconChevron ></iconChevron>

        </i>

        
<i data-tag="tiny-time-spinner__arrow tiny-icon-arrow-down" repeat-click>          
<iconChevron ></iconChevron>

        </i>

        
<ul data-tag="tiny-time-spinner__list" ref={seconds} v-ref="seconds"  className={vc([state.animationName])}>          

  {
    state.arrowSecondList.map((second, key)=>(
      <div  data-tag="li" key={key}>            
<span  className={vc([m(gcls('text'), { [gcls('active')]: second === state.seconds }))}>{second === undefined ? '' : ('0' + second).slice(-2)}</span>

          </div>
    ))
  }
  

        </ul>

      </div>

    </template>

  </div>


      );
    }
    