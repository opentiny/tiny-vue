
    import { renderless, api } from '@opentiny/vue-renderless/transfer-panel/vue'
    import '@opentiny/vue-theme/transfer-panel/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function transferPanel(props) {
      const {option} = props
      const defaultProps = {
        ...$props,
        ...props,
        option
      }
      const { ref, current: vm, parent } = useVm()
      const reference=useRef()
const plugin=useRef()
const pager=useRef()
      const { state,handleAllCheckedChange,setPosition,clearQuery,checkedEvent,state.render.on,sizesChange,handlePageChange } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[reference,plugin,pager]
      })
      return (
          
<div   className={vc([state.renderType === 'TinyTable' ? 'transferGrid' : ''],'tiny-transfer-panel')}>    
<p  className="tiny-transfer-panel__header">      
<tinyCheckbox value={state.allChecked} onChange={(e)=>state.allChecked = e.value} onChange={handleAllCheckedChange} indeterminate={state.isIndeterminate}>        
{title}

        
<div  style={{display:render && state.renderType !== 'TinyTable' && data.flag === 'sort'?'block':'none'}} className="headSort">          
<div  onClick={setPosition('up', $event)} className="sort-btn disabled up">            
<iconArrow ></iconArrow>

          </div>

          
<div  onClick={setPosition('down', $event)} className="sort-btn disabled down">            
<iconArrow ></iconArrow>

          </div>

        </div>

        
<span >{state.checkedSummary}</span>

      </tinyCheckbox>

    </p>

    
<div  ref={reference} v-ref="reference" className={vc(['tiny-transfer-panel__body', state.hasFooter ? 'is-with-footer' : ''])}>      
<tinyInput  value={state.query} onChange={(e)=>state.query = e.value} size="small" placeholder={placeholder} onMouseenter={state.inputHover = true} onMouseleave={state.inputHover = false} style={{display:filterable?'block':'none'}} className="tiny-transfer-panel__filter">        
<template slot>          
<i  onClick={clearQuery} className={vc(['tiny-input__icon', 'tiny-icon-' + state.inputIcon])}></i>

        </template>

      </tinyInput>

      
<div style={{display:!render?'block':'none'}} role="group" aria-label="checkbox-group"   className={vc({ 'is-filterable': filterable },'tiny-checkbox-group tiny-transfer-panel__list')}>        

  {
    state.filteredData.map(item=>(
      <label   onClick={checkedEvent(item[state.keyProp], item[state.disabledProp])} key={item[state.keyProp]}  className={vc([
            item[state.disabledProp] ? 'is-disabled' : '',
            state.checked.length > 0 && state.checked.indexOf(item[state.keyProp]) > -1 ? 'is-checked' : ''
          ],'tiny-checkbox tiny-transfer-panel__item')}>          
<span   className={vc([
              item[state.disabledProp] ? 'is-disabled' : '',
              state.checked.length > 0 && state.checked.indexOf(item[state.keyProp]) > -1 ? 'is-checked' : ''
            ],'tiny-checkbox__input')}>            
<span  className="tiny-checkbox__inner">              
<iconCheck style={{display:!(state.checked.length > 0 && state.checked.indexOf(item[state.keyProp]) > -1)?'block':'none'}}  className="tiny-svg-size"></iconCheck>

              
<iconChecked style={{display:!(!(state.checked.length > 0 && state.checked.indexOf(item[state.keyProp]) > -1))?'block':'none'}}  className="tiny-svg-size"></iconChecked>

            </span>

            
<input type="checkbox" aria-hidden="false" disabled={item[state.disabledProp]}  value={item[state.keyProp]} className="tiny-checkbox__original"></input>

          </span>

          
<span  className="tiny-checkbox__label">            
<optionContent option={optionRender(item)}></optionContent>

          </span>

        </label>
    ))
  }
  

      </div>

      
<Component ref={plugin} v-ref="plugin" style={{display:render && render.plugin?'block':'none'}} is={toRaw(render.plugin)} state.render {...state.render.on}></Component>

      
<tinyPager style={{display:showPager && state.renderType === 'TinyTable'?'block':'none'}} onSize={sizesChange} ref={pager} v-ref="pager" total={state.pagerTotal.length} current-page={state.currentPage} onUpdate:current={state.currentPage = $event} page-size={pagerOp.pageVO.pageSize} layout={pagerOp.pageVO.layout} page-sizes={pagerOp.pageVO.pageSizes} mode={pagerOp.mode} pager-count={pagerOp.pagerCount} onCurrent={handlePageChange}>      </tinyPager>


      
<p  style={{display:!render && state.hasNoMatch?'block':'none'}} className="tiny-transfer-panel__empty">        
{t('ui.transfer.noMatch')}

      </p>

      
<p  style={{display:!render && data.length === 0 && !state.hasNoMatch?'block':'none'}} className="tiny-transfer-panel__empty">        
{t('ui.transfer.noData')}

      </p>

    </div>

    
<p  style={{display:$parent.slots['left-footer'] || $parent.slots['right-footer']?'block':'none'}} className="tiny-transfer-panel__footer">      
<Slot  parent_children={props.children} slots={props.slots}></Slot>

    </p>

  </div>


      );
    }
    