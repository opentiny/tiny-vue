
    import { renderless, api } from '@opentiny/vue-renderless/detail-page/vue'
    import '@opentiny/vue-theme/detail-page/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function detailPage(props) {
      const {modelValue,valueTitle,title,textSplit,dialogTitle,labelTitle,tips,saveButton,cancelButton} = props
      const defaultProps = {
        ...$props,
        ...props,
        modelValue,valueTitle,title,textSplit,dialogTitle,labelTitle,tips,saveButton,cancelButton
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,showDialog,checkAllHander,checkValueHiddenItem,saveHandler,closeDialog } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div  className="tiny-detail-page">    
<div  className="tiny-detail-page__header">      
<span >{state.title}</span>

      
<div  onClick={showDialog} className="tiny-detail-page__header-icon">        
<IconSetting  className="setIconStyle"></IconSetting>

      </div>

    </div>

    
<ul  className="tiny-detail-page__content">      

  {
    state.value.map((item, index)=>(
      <li   key={index} style={{display:!item.hidden?'block':'none'}} className="tiny-detail-page__content-item">        
<span  className="tiny-detail-page__content-item-span">{item.label}
{state.textSplit}</span>
{item.value}

      </li>
    ))
  }
  

    </ul>

    
<tinyModal value={state.isShowDialog} onChange={(e)=>state.isShowDialog = e.value}  lock-scroll={false} title={state.dialogTitle} className="tiny-detail-dialog__wrapper">      
<div  className="tiny-detail-dialog">        
<div  className="tiny-detail-dialog__header">          
<span >{state.labelTitle}</span>

          
<div  className="tiny-detail-dialog__header-check">            
<tinyCheckbox value={state.checkAll} onChange={(e)=>state.checkAll = e.value} onChange={checkAllHander} indeterminate={state.indeterminate}>{state.valueTitle}</tinyCheckbox>

          </div>

        </div>

        
<ul  className="tiny-detail-dialog__content">          

  {
    state.cloneValue.map((item, index)=>(
      <li  key={index}  className={vc(['tiny-detail-dialog__content-item', { active: item.hidden }])}>            
<span >{item.label}</span>

            
<tinyCheckbox value={item.hidden} onChange={(e)=>item.hidden = e.value} onClick={checkValueHiddenItem(index)} style="margin-right: 113px"></tinyCheckbox>

          </li>
    ))
  }
  

        </ul>

        
<div  className="tiny-detail-dialog__footer">          
<tinyButton type="primary" onClick={saveHandler}>{state.saveButton}</tinyButton>

          
<tinyButton onClick={closeDialog}>{state.cancelButton}</tinyButton>

        </div>

      </div>

    </tinyModal>

  </div>


      );
    }
    