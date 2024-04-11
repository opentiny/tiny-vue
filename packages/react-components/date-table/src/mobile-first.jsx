
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
          
<table cellpadding="0" cellspacing="0" data-tag="tiny-date-table"  onMousemove={handleMouseMove} onClick={handleClick} className={vc(['table-fixed w-full'])}>    
<tbody >      
<tr >        
<th style={{display:showWeekNumber?'block':'none'}}>          
<div  className={vc([gcls('th'))}>{t('ui.datepicker.week')}</div>

        </th>

        

  {
    state.weeks.map((week, key)=>(
      <th  key={key}>          
<div  className={vc([gcls('th'))}>{t('ui.datepicker.weeks.' + week)}</div>

        </th>
    ))
  }
  

      </tr>

      

  {
    state.rows.map((row, key)=>(
      <tr data-tag="tiny-date-table__row"  key={key}  className={vc({ current: isWeekActive(row[1]) })}>        

  {
    row.map((cell, key)=>(
      <td  key={key} data-tag={getCellClasses(cell)}  className={vc([gcls('td'))}>          
<div  className={vc([
              m(
                gcls('cell'),
                gcls(getCssToken(cell, 'cell-')),
                { 'rounded-l': key === 0 },
                { 'rounded-r': key === 6 }
              )
            )}>            
<span text  className={vc([m(gcls('text'), gcls(getCellClasses(cell).split(' '))))}></span>

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
    