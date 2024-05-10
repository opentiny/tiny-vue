
    import { renderless, api } from '@opentiny/vue-renderless/dept/vue'
    import '@opentiny/vue-theme/dept/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function dept(props) {
      const {size,modelValue,disabled,fetchDeptList,fetchDeptByValue,fetchDept,beforeConfirm,autoSelect,title,displayOnly} = props
      const defaultProps = {
        ...$props,
        ...props,
        size,modelValue,disabled,fetchDeptList,fetchDeptByValue,fetchDept,beforeConfirm,autoSelect,title,displayOnly
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,openDialog,closeDialog,searchChange,getCurrentList,selectChange,confirm,cancel } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div  className="tiny-dept">    
<tinyInput tiny_mode="pc" size={size} value={state.display} onChange={(e)=>state.display = e.value} disabled={disabled} readonly display-only={displayOnly}>      
<template slot>        
<iconPopup  onClick={openDialog} className="tiny-input__icon tiny-svg-icon"></iconPopup>

      </template>

    </tinyInput>

    
<tinyDialog  visible={state.open} onUpdate:visible={state.open = $event} close-on-click-modal={false} width="550px" append-to-body onClose={closeDialog} title={title} className="tiny-dept">      
<tinyRow  className="tiny-dept__search">        
<tinyCol  title={t('ui.dept.search')} span={3} className="tiny-dept__label">          
{t('ui.dept.search')}

        </tinyCol>

        
<tinyCol span={5}>          
<tinySelect  value={state.searchValue} onChange={(e)=>state.searchValue = e.value} placement="bottom-start" loading={state.loading} placeholder={t('ui.dept.input')} filterable clearable remote remote-method={searchMethod} onChange={searchChange} className="tiny-detp__select">            
<li  style="
                background: #f1f1f1;
                cursor: auto;
                border-bottom: solid 1px #d9d9d9;
                box-shadow: rgb(241, 241, 241) 0px -6px 0px 6px;
              " className="tiny-option tiny-select-dropdown__item">              
<span style="float: left; font-size: 12px">{t('ui.dept.code')}</span>

              
<span style="float: right">{t('ui.dept.name')}</span>

            </li>

            

  {
    state.searchOptions.map((option, index)=>(
      <tinyOption  key={index} label={option.hrName} value={option.hrCode}>              
<span style="float: left; font-size: 12px">{option.hrCode}</span>

              
<span style="float: right; color: #8492a6; font-size: 12px">{option.hrName}</span>

            </tinyOption>
    ))
  }
  

          </tinySelect>

        </tinyCol>

      </tinyRow>


      

  {
    deptState.map((dept, index)=>(
      <tinyRow   key={index} className="tiny-dept__item">        
<tinyCol  title={t('ui.dept.' + dept.title)} span={3} className="tiny-dept__label">          
{t('ui.dept.' + dept.title)}

        </tinyCol>

        
<tinyCol span={9}>          
<tinySelect  ref={'select' + index} value={dept.value} onChange={(e)=>dept.value = e.value} loading={state.loading} filterable default-first-option clearable disabled={!!index && dept.disable} onVisible={getCurrentList(index, $event)} onChange={selectChange({ level: index, value: $event })} className="tiny-detp__select">            

  {
    dept.options.map(option=>(
      <tinyOption  key={option.hrCode} label={option.hrName} value={option.hrCode}></tinyOption>
    ))
  }
  

          </tinySelect>

        </tinyCol>

      </tinyRow>
    ))
  }
  

      
<tinyRow >        
<p  className="tiny-dept__label is-selected">          
{t('ui.dept.selected')}

        </p>

        
<p  className="tiny-dept__selected-info">          
{state.labels.join(' > ')}

        </p>

        
<Slot name="hrapprover" slot-scope={state} parent_children={props.children} slots={props.slots}></Slot>

      </tinyRow>

      
<template slot>        
<span  className="tiny-toolbar">          
<button type="button" onClick={confirm}  className="tiny-button tiny-button--primary">            
<span >{t('ui.base.confirm')}</span>

          </button>

          
<button type="button" onClick={cancel}  className="tiny-button tiny-button--default">            
<span >{t('ui.base.cancel')}</span>

          </button>

        </span>

      </template>

    </tinyDialog>

  </div>


      );
    }
    