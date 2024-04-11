
    import { renderless, api } from '@opentiny/vue-renderless/calendar-bar/vue'
    import '@opentiny/vue-theme/calendar-bar/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function calendarBar(props) {
      const {modelValue,config,cascaderPosition} = props
      const defaultProps = {
        ...$props,
        ...props,
        modelValue,config,cascaderPosition
      }
      const { ref, current: vm, parent } = useVm()
      const weekPanel=useRef()
const calendarPanel=useRef()
      const { state,setCascaderVisible,touchstart,touchend,touchmove,handleClickDay,handleDraggerClick,handleDraggerMousedown,handleDraggerTouchstart,handleDraggerTouchend,throttledHandleDraggerTouchmove,handleCascaderChange } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[weekPanel,calendarPanel]
      })
      return (
          
<div data-tag="tiny-calendar-bar"  className="select-none">    
<div data-tag="tiny-calendar-bar-content"  className={vc([
        'w-full h-11 flex items-center text-sm text-color-text-primary',
        'border-b-0.5 border-solid border-color-border-separator',
        {
          'justify-start': cascaderPosition === 'start',
          'justify-center': cascaderPosition === 'center',
          'justify-end': cascaderPosition === 'end'
        }
      ])}>      
<div data-tag="tiny-calendar-bar-visible"  onClick={setCascaderVisible(true)} className="w-max h-6 flex items-center cursor-pointer space-x-1.5">        
<span >{i18nYearMonth()}</span>

        
<span  className="-translate-y-px fill-color-icon-primary">          
<iconChevron  className={vc({ 'rotate-180': state.cascaderVisible })}></iconChevron>

        </span>

      </div>

    </div>

    
<div data-tag="tiny-calendar-bar-gridbox"  ref={weekPanel} v-ref="weekPanel" className="w-full h-max overflow-hidden">      
<div  className="grid grid-cols-7">        

  {
    state.weekDays.map(weekDay=>(
      <div data-tag="tiny-calendar-bar-weekday"  key={weekDay} style={state.minSize2}  className="text-xs">          
<calendarItem text={t(`ui.calendarBar.week.${weekDay}`)} day={`${weekDay}`} config={config}></calendarItem>

        </div>
    ))
  }
  

      </div>

      
<div  onTouchstart={touchstart} onTouchend={touchend} onTouchmove={touchmove} style={{
          'width': ' 300%',
          'transform': `translateX(${state.delta}px)`,
          'transition-duration': `${state.duration}ms`
        }} className="h-max flex relative right-full will-change-transform">        
<div  ref={calendarPanel} v-ref="calendarPanel" className="w-full flex">          

  {
    state.data.map((calendarDays, idx)=>(
      <div   key={idx} style="width: 33.33%" className="grid grid-cols-7">            

  {
    calendarDays.map(calendarDay=>(
      <div  key={calendarDay.dateStr} style={state.minSize3}  className={vc([
                m(
                  'text-sm',
                  (calendarDay.isCurMon || state.showWeek) && calendarDay.isWorkday
                    ? config.workdayColorClass || 'text-color-icon-primary'
                    : config.holidayColorClass || 'text-color-icon-placeholder',
                  { [config.disabledColorClass || 'text-color-icon-disabled']: calendarDay.disabled },
                  {
                    [config.currentColorClass || 'text-color-icon-inverse']:
                      calendarDay.type === 'cur' && calendarDay.isCur
                  }
                )
              )}>              
<calendarItem text={`${calendarDay.dateArr[2]}`} day={calendarDay} config={config} onClickday={handleClickDay}></calendarItem>

            </div>
    ))
  }
  

          </div>
    ))
  }
  

        </div>

      </div>

      
<div  className="w-full h-4 flex justify-center items-center">        
<div  onClick={handleDraggerClick} onMousedown={handleDraggerMousedown} onTouchstart={handleDraggerTouchstart} onTouchend={handleDraggerTouchend} onTouchmove={throttledHandleDraggerTouchmove} className="w-6 h-full flex justify-center items-center">          
<div  className={vc([
              'box-content w-6 h-px cursor-pointer bg-color-border-separator rounded-sm',
              'border-y border-solid border-color-border-separator'
            ])}></div>

        </div>

      </div>

    </div>

    
<tinyCascader value={state.cascaderCurrent} onChange={(e)=>state.cascaderCurrent = e.value} cycle-roll options={state.cascaderOptions} visible={state.cascaderVisible} onUpdate:modelValue={handleCascaderChange} onUpdate:visible={setCascaderVisible} config.cascaderOp></tinyCascader>

  </div>


      );
    }
    