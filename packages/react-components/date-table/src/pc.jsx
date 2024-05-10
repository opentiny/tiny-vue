
    import { renderless, api } from '@opentiny/vue-renderless/date-table/vue'
    import '@opentiny/vue-theme/date-table/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function dateTable(props) {
      const {cellClassName,date,defaultValue,disabledDate,firstDayOfWeek,maxDate,minDate,rangeState,selectionMode,showWeekNumber,value,formatWeeks} = props
      const defaultProps = {
        ...$props,
        ...props,
        cellClassName,date,defaultValue,disabledDate,firstDayOfWeek,maxDate,minDate,rangeState,selectionMode,showWeekNumber,value,formatWeeks
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,handleMouseMove,handleClick } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<table  cellspacing="0" onMousemove={handleMouseMove} cellpadding="0" onClick={handleClick} className={vc(['tiny-date-table', { 'is-week-mode': selectionMode === 'week' }])}>    
<tbody >      
<tr >        
<th style={{display:showWeekNumber?'block':'none'}}>          
{t('ui.datepicker.week')}

        </th>

        

  {
    state.weeks.map((weekDay, key)=>(
      <th  key={key}>          
{t(`ui.datepicker.weeks.${weekDay}`)}

        </th>
    ))
  }
  

      </tr>

      

  {
    state.rows.map((row, key)=>(
      <tr   key={key} className={vc(['tiny-date-table__row', { current: isWeekActive(row[1]) }])}>        

  {
    row.map((cellValue, key)=>(
      <td  key={key}  className={vc([getCellClasses(cellValue))}>          
<div >            
<span >              
{cellValue.text}

            </span>

          </div>

        </td>
    ))
  }
  

      </tr>
    ))
  }
  

    </tbody>

  </table>


      );
    }
    