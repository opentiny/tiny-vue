
    import { renderless, api } from '@opentiny/vue-renderless/table/vue'
    import '@opentiny/vue-theme/table/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function table(props) {
      const {columns,data,width,defaultChecked,keys} = props
      const defaultProps = {
        ...$props,
        ...props,
        columns,data,width,defaultChecked,keys
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,togeSelectAll,selectRow,togeSelected } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div  className="tiny-table simple">    
<table width={width}>      
<colgroup >        

  {
    columns.map((col, rowIndex)=>(
      <col  key={rowIndex} width={col.width}></col>
    ))
  }
  

      </colgroup>

      
<thead  className="tiny-table-header">        
<tr >          

  {
    columns.map((col, colIndex)=>(
      <th  key={colIndex}  className={vc({ overflow: col.showOverflow })}>            
<div  className="tiny-table-cell">              
<Component style={{display:col.type === 'selection'?'block':'none'}} is={`icon-${state.selectCls}`}  onClick={togeSelectAll} className={vc(['tiny-svg-size', { 'is-check': state.selectCls !== 'check' }])}></Component>

              
<template style={{display:!col.type?'block':'none'}}>                
<div style={{display:colIndex !== columns.length - 1?'block':'none'}}  className="tiny-table-header__line"></div>

                
{col.title}

              </template>

            </div>

          </th>
    ))
  }
  

        </tr>

      </thead>

      
<tbody >        

  {
    data.map((row, rowIndex)=>(
      <tr  key={rowIndex}  className={vc(['handlerCls', state.selectedKeys.indexOf(row[keys]) > -1 ? '' : 'is-disabled'])}>          

  {
    columns.map((col, colIndex)=>(
      <td  key={colIndex}>            
<div  title={col.showOverflow ? row[col.field] : ''} style={{ width: col.width ? col.width + 'px' : '' }} className={vc(['tiny-table-cell', { overflow: col.showOverflow }])}>              
<div style={{display:col.type === 'index'?'block':'none'}}>{rowIndex + 1}</div>

              
<Component style={{display:!(col.type === 'index')?'block':'none'}} is={state.selectedRow === row ? 'icon-radioselected' : 'icon-radio'}  onClick={selectRow(row)} className="tiny-svg-size"></Component>

              
<Component style={{display:!(!(col.type === 'index'))?'block':'none'}} is={state.selected.indexOf(row) === -1 ? 'icon-check' : 'icon-checked-sur'}  onClick={togeSelected(row)} className={vc([
                  'tiny-svg-size',
                  { 'is-check': state.selected.indexOf(row) > -1 },
                  { 'is-disabled': state.selectedKeys.indexOf(keys) > -1 }
                ])}></Component>

              
<template style={{display:!(!(!(col.type === 'index')))?'block':'none'}}>{row[col.field]}</template>

            </div>

          </td>
    ))
  }
  

        </tr>
    ))
  }
  

        
<tr style={{display:data && data.length === 0?'block':'none'}}  className="noData">          
<td colspan={columns.length}>            
{t('ui.transfer.noData')}

          </td>

        </tr>

      </tbody>

    </table>

  </div>


      );
    }
    