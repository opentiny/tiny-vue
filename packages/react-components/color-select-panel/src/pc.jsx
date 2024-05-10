
    import { renderless, api } from '@opentiny/vue-renderless/color-select-panel/vue'
    import '@opentiny/vue-theme/color-select-panel/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function colorSelect(props) {
      const {modelValue,visible,alpha,history,predefine} = props
      const defaultProps = {
        ...$props,
        ...props,
        modelValue,visible,alpha,history,predefine
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,onHueUpdate,onSVUpdate,onAlphaUpdate,onCancel,onConfirm } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div   style={{display:state.isShow?'block':'none'}} clickoutside className="tiny-color-select-panel">    
<hueSelect color={state.color} onHue={onHueUpdate} onSv={onSVUpdate}></hueSelect>

    
<alphaSelect style={{display:alpha?'block':'none'}} color={state.color} onAlpha={onAlphaUpdate}></alphaSelect>

    
<div  className="tiny-color-select-panel__tools">      
<tinyInput value={state.res} onChange={(e)=>state.res = e.value}></tinyInput>

      
<tinyButton >        
<tinyButton type="text" onClick={onCancel}>          
{t('ui.colorSelectPanel.cancel')}

        </tinyButton>

        
<tinyButton onClick={onConfirm}>          
{t('ui.colorSelectPanel.confirm')}

        </tinyButton>

      </tinyButton>

    </div>

    
<tinyCollapse >      
<tinyCollapse title={t('ui.colorSelectPanel.history')} name="history" style={{display:state.enableHistory?'block':'none'}}>        
<div  className="tiny-color-select-panel__history">          

  {
    state.stack.map(color=>(
      <div  style={{display:state.stack.length?'block':'none'}}  style={{
              background: color
            }} onClick={() => onHistoryClick(color)} className="tiny-color-select-panel__history__color-block"></div>
    ))
  }
  

          
<span style={{display:!(state.stack.length)?'block':'none'}}>{t('ui.colorSelectPanel.empty')}</span>

        </div>

      </tinyCollapse>

      
<tinyCollapse title={t('ui.colorSelectPanel.predefine')} name="predefine" style={{display:state.enablePredefineColor?'block':'none'}}>        
<div  className="tiny-color-select-panel__predefine">          

  {
    state.predefineStack.map(color=>(
      <div  style={{display:state.predefineStack.length?'block':'none'}}  style={{
              background: color
            }} onClick={() => onPredefineColorClick(color)} className="tiny-color-select-panel__predefine__color-block"></div>
    ))
  }
  

          
<span style={{display:!(state.predefineStack.length)?'block':'none'}}>{t('ui.colorSelectPanel.empty')}</span>

        </div>

      </tinyCollapse>

    </tinyCollapse>

  </div>


      );
    }
    