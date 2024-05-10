
    import { renderless, api } from '@opentiny/vue-renderless/month-table/vue'
    import '@opentiny/vue-theme/month-table/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function monthTable(props) {
      const {date,defaultValue,disabledDate,maxDate,minDate,rangeState,selectionMode,value} = props
      const defaultProps = {
        ...$props,
        ...props,
        date,defaultValue,disabledDate,maxDate,minDate,rangeState,selectionMode,value
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,handleMouseMove,handleMonthTableClick } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<table  onMousemove={handleMouseMove} onClick={handleMonthTableClick} className="tiny-month-table">    
<tbody >      

  {
    state.rows.map((row, key)=>(
      <tr  key={key}>        

  {
    row.map((cell, key)=>(
      <td   key={key} className={vc([getCellStyle(cell))}>          
<div >            
<a  text className="cell"></a>

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
    