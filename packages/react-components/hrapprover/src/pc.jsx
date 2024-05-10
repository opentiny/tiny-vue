
    import { renderless, api } from '@opentiny/vue-renderless/hrapprover/vue'
    import '@opentiny/vue-theme/hrapprover/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function hrapprover(props) {
      const {modelValue,disabled,approvalPerson,category,fetchDeptList,fetchHrapprover,fetchDeptByValue,fetchDept,title,displayOnly} = props
      const defaultProps = {
        ...$props,
        ...props,
        modelValue,disabled,approvalPerson,category,fetchDeptList,fetchHrapprover,fetchDeptByValue,fetchDept,title,displayOnly
      }
      const { ref, current: vm, parent } = useVm()
      const dept=useRef()
      const { state,resetPerson,hrChange,selectedDept,cancel } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[dept]
      })
      return (
          
<dept ref={dept} v-ref="dept"  value={state.dept} onChange={(e)=>state.dept = e.value} fetch-dept-list={fetchDeptList} fetch-dept-by-value={fetchDeptByValue} fetch-dept={fetchDept} display-only={displayOnly} onClose={resetPerson} onConfirm={hrChange} disabled={disabled} onSelected={selectedDept} title={title} onCancel={cancel} className="tiny-hrapprover">    
<template slot>      
<div  loading className="tiny-hrapprover__list">        
<table style={{display:state.hrList.length?'block':'none'}} width="100%">          
<thead >            
<tr >              
<th width="50px"></th>

              
<th >{t('ui.hrapprover.approver')}</th>

              
<th >{t('ui.hrapprover.remark')}</th>

            </tr>

          </thead>

          
<tbody >            

  {
    state.hrList.map((hr, index)=>(
      <tr  key={index}>              
<td style="text-align: center">                
<radio value={state.approvalPerson} onChange={(e)=>state.approvalPerson = e.value} label={hr.approval_person}> </radio>

              </td>

              
<td >{hr.approval_person}</td>

              
<td >{hr.remarks}</td>

            </tr>
    ))
  }
  

          </tbody>

        </table>

        
<div style={{display:!(state.hrList.length)?'block':'none'}}>          
<div  className="tiny-hrapprover__error">            
{t('ui.hrapprover.noapprover')}

          </div>

        </div>

      </div>

    </template>

  </dept>


      );
    }
    