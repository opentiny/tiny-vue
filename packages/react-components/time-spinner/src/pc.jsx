
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
          
<div   className={vc({ 'has-seconds': showSeconds },'tiny-time-spinner')}>    
<template style={{display:!arrowControl?'block':'none'}}>      
<tinyScrollbar onMouseenter={emitSelectRange('hours')} onMousemove={adjustCurrentSpinner('hours')}   wrap-style="max-height: inherit;" view-class="tiny-time-spinner__list" noresize tag="ul" ref={hours} v-ref="hours" className={vc([state.animationName],'tiny-time-spinner__wrapper')}>        

  {
    state.hoursList.map({ disabled, hour }=>(
      <li onClick={handleClick('hours', { value: hour, disabled })}   data-tag="li" key={hour}  className={vc({ active: hour === state.hours, disabled },'tiny-time-spinner__item')}>          
<span >{('0' + (amPmMode ? hour % 12 || 12 : hour)).slice(-2)}
{amPm(hour)}</span>

        </li>
    ))
  }
  

      </tinyScrollbar>

      
<tinyScrollbar onMouseenter={emitSelectRange('minutes')} onMousemove={adjustCurrentSpinner('minutes')}   wrap-style="max-height: inherit;" view-class="tiny-time-spinner__list" noresize tag="ul" ref={minutes} v-ref="minutes" className={vc([state.animationName + '-up'],'tiny-time-spinner__wrapper')}>        

  {
    state.minutesList.map({ disabled, minute }=>(
      <li onClick={handleClick('minutes', { value: minute, disabled: false })}  key={minute}  data-tag="li"  className={vc({ active: minute === state.minutes, disabled: !disabled },'tiny-time-spinner__item')}>          
<span >{('0' + minute).slice(-2)}</span>

        </li>
    ))
  }
  

      </tinyScrollbar>

      
<tinyScrollbar style={{display:showSeconds?'block':'none'}} onMouseenter={emitSelectRange('seconds')} onMousemove={adjustCurrentSpinner('seconds')}   wrap-style="max-height: inherit;" view-class="tiny-time-spinner__list" noresize tag="ul" ref={seconds} v-ref="seconds" className={vc([state.animationName],'tiny-time-spinner__wrapper')}>        

  {
    state.secondsList.map({ second }=>(
      <li onClick={handleClick('seconds', { value: second, disabled: false })}    data-tag="li" key={second} className={vc({ active: second === state.seconds },'tiny-time-spinner__item')}>          
<span >{('0' + second).slice(-2)}</span>

        </li>
    ))
  }
  

      </tinyScrollbar>

    </template>

    
<template style={{display:arrowControl?'block':'none'}}>      
<div onMouseenter={emitSelectRange('hours')}  className="tiny-time-spinner__wrapper is-arrow">        
<i  repeat-click className="tiny-time-spinner__arrow tiny-icon-arrow-up">          
<iconChevron ></iconChevron>

        </i>

        
<i  repeat-click className="tiny-time-spinner__arrow tiny-icon-arrow-down">          
<iconChevron ></iconChevron>

        </i>


        
<ul  ref={hours} v-ref="hours"  className={vc([state.animationName],'tiny-time-spinner__list')}>          

  {
    state.arrowHourList.map((hour, key)=>(
      <li  data-tag="li"   key={key} className={vc({
              active: hour === state.hours,
              disabled:
                state.hoursList.find((item) => item.hour === hour) &&
                state.hoursList.find((item) => item.hour === hour).disabled
            },'tiny-time-spinner__item')}>            
<span >{hour === undefined ? '' : ('0' + (amPmMode ? hour % 12 || 12 : hour)).slice(-2) + amPm(hour)}</span>

          </li>
    ))
  }
  

        </ul>

      </div>

      
<div onMouseenter={emitSelectRange('minutes')}  className="tiny-time-spinner__wrapper is-arrow">        
<i  repeat-click className="tiny-time-spinner__arrow tiny-icon-arrow-up">          
<iconChevron ></iconChevron>

        </i>

        
<i  repeat-click className="tiny-time-spinner__arrow tiny-icon-arrow-down">          
<iconChevron ></iconChevron>

        </i>

        
<ul  ref={minutes} v-ref="minutes"  className={vc([state.animationName + '-up'],'tiny-time-spinner__list')}>          

  {
    state.arrowMinuteList.map((minute, key)=>(
      <li  data-tag="li"   key={key} className={vc({ active: minute === state.minutes },'tiny-time-spinner__item')}>            
<span >{minute === undefined ? '' : ('0' + minute).slice(-2)}</span>

          </li>
    ))
  }
  

        </ul>

      </div>

      
<div onMouseenter={emitSelectRange('seconds')}  style={{display:showSeconds?'block':'none'}} className="tiny-time-spinner__wrapper is-arrow">        
<i  repeat-click className="tiny-time-spinner__arrow tiny-icon-arrow-up">          
<iconChevron ></iconChevron>

        </i>

        
<i  repeat-click className="tiny-time-spinner__arrow tiny-icon-arrow-down">          
<iconChevron ></iconChevron>

        </i>

        
<ul  ref={seconds} v-ref="seconds"  className={vc([state.animationName],'tiny-time-spinner__list')}>          

  {
    state.arrowSecondList.map((second, key)=>(
      <li   data-tag="li"  key={key} className={vc({ active: second === state.seconds },'tiny-time-spinner__item')}>            
<span >{second === undefined ? '' : ('0' + second).slice(-2)}</span>

          </li>
    ))
  }
  

        </ul>

      </div>

    </template>

  </div>


      );
    }
    