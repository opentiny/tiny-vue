
    import { renderless, api } from '@opentiny/vue-renderless/year-table/vue'
    import '@opentiny/vue-theme/year-table/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function yearTable(props) {
      const {} = props
      const defaultProps = {
        ...$props,
        ...props,
        
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,handleMouseMove,handleYearTableClick } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<table  onMousemove={handleMouseMove} onClick={handleYearTableClick} className="tiny-year-table">    
<tbody >      

  {
    state.rows.map((row, key)=>(
      <tr  key={key}>        

  {
    row.map((cell, key)=>(
      <td    key={key} className={vc([getCellStyle(cell),'available]')}>          
<div >            
<a  className="cell">{cell.text}</a>

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
    