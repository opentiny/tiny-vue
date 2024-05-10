
    import { renderless, api } from '@opentiny/vue-renderless/transfer/vue'
    import '@opentiny/vue-theme/transfer/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function transfer(props) {
      const {data,titles,buttonTexts,filterPlaceholder,filterMethod,leftDefaultChecked,rightDefaultChecked,renderContent,modelValue,format,filterable,props,targetOrder,dropConfig,showAllBtn,toLeftDisable,toRightDisable,renderType,leftColumns,rightColumns,columns,pageVO,pagerOp,showPager,render,treeOp,beforeTransfer} = props
      const defaultProps = {
        ...$props,
        ...props,
        data,titles,buttonTexts,filterPlaceholder,filterMethod,leftDefaultChecked,rightDefaultChecked,renderContent,modelValue,format,filterable,props,targetOrder,dropConfig,showAllBtn,toLeftDisable,toRightDisable,renderType,leftColumns,rightColumns,columns,pageVO,pagerOp,showPager,render,treeOp,beforeTransfer
      }
      const { ref, current: vm, parent } = useVm()
      const leftPanel=useRef()
const rightPanel=useRef()
      const { state,onSourceCheckedChange,addToRight,addToLeft,onTargetCheckedChange } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[leftPanel,rightPanel]
      })
      return (
          
<div  className="tiny-transfer">    
<tinyTransfer id="leftPanel" style={{display:!slots['right-panel'] && !slots['left-panel']?'block':'none'}} $props option-render={state.optionRender} tree-op={treeOp} render={render} show-pager={showPager} pager-op={pagerOp} ref={leftPanel} v-ref="leftPanel" page-v-o={pageVO} render-type={renderType} columns={leftColumns || columns} data={state.sourceData} title={titles[0] || t('ui.transfer.titles.0')} default-checked={leftDefaultChecked} placeholder={filterPlaceholder || t('ui.transfer.filterPlaceholder')} onChecked={onSourceCheckedChange}>      
<Slot name="left-footer" parent_children={props.children} slots={props.slots}></Slot>

      
<Slot name="filter" parent_children={props.children} slots={props.slots}></Slot>

    </tinyTransfer>

    
<div style={{display:slots['left-panel'] && slots['right-panel']?'block':'none'}}  className="tiny-transfer-panel transfer-custom-left-panel">      
<Slot name="left-panel" parent_children={props.children} slots={props.slots}></Slot>

    </div>

    
<div  className="tiny-transfer__buttons">      
<Slot name="button-panel" parent_children={props.children} slots={props.slots}>        
<tinyButton style={{display:showAllBtn?'block':'none'}} type="primary" disabled={state.leftData.length === 0}  onClick={addToRight('all')} className="tiny-transfer__button">          
<iconDouble  className="tiny-svg-size"></iconDouble>

        </tinyButton>

        
<div  className="defaultButton">          
<tinyButton type="primary"  onClick={addToRight} disabled={toLeftDisable && state.leftChecked.length === 0} className={vc(['tiny-transfer__button', state.hasButtonTexts ? 'is-with-texts' : ''])}>            
<span style={{display:buttonTexts[1] !== undefined?'block':'none'}}>{buttonTexts[1]}</span>

            
<iconChevron  className="tiny-svg-size"></iconChevron>

          </tinyButton>

          
<tinyButton type="primary"  onClick={addToLeft} disabled={toRightDisable && state.rightChecked.length === 0} className={vc(['tiny-transfer__button', state.hasButtonTexts ? 'is-with-texts' : ''])}>            
<iconChevron  className="tiny-svg-size"></iconChevron>

            
<span style={{display:buttonTexts[0] !== undefined?'block':'none'}}>{buttonTexts[0]}</span>

          </tinyButton>

        </div>

        
<tinyButton style={{display:showAllBtn?'block':'none'}} type="primary" disabled={state.rightData.length === 0}  onClick={addToLeft('all')} className="tiny-transfer__button">          
<iconDouble  className="tiny-svg-size"></iconDouble>

        </tinyButton>

      </Slot>

    </div>

    
<tinyTransfer $props id="rightPanel" style={{display:!slots['right-panel'] && !slots['left-panel']?'block':'none'}} render={render} option-render={state.optionRender} tree-op={treeOp} show-pager={showPager} is-to-left={state.isToLeft} pager-op={pagerOp} ref={rightPanel} v-ref="rightPanel" page-v-o={pageVO} render-type={renderType} columns={rightColumns || columns} data={state.targetData} title={titles[1] || t('ui.transfer.titles.1')} default-checked={rightDefaultChecked} placeholder={filterPlaceholder || t('ui.transfer.filterPlaceholder')} onChecked={onTargetCheckedChange}>      
<Slot name="right-footer" parent_children={props.children} slots={props.slots}></Slot>

      
<Slot name="filter" parent_children={props.children} slots={props.slots}></Slot>

    </tinyTransfer>

    
<div style={{display:slots['left-panel'] && slots['right-panel']?'block':'none'}}  className="tiny-transfer-panel transfer-custom-right-panel">      
<Slot name="right-panel" parent_children={props.children} slots={props.slots}></Slot>

    </div>

  </div>


      );
    }
    