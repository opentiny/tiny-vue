
    import { renderless, api } from '@opentiny/vue-renderless/dialog-select/vue'
    import '@opentiny/vue-theme/dialog-select/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function dialogSelect(props) {
      const {dialogOp,visible,popseletor,multi,gridOp,textField,textSplit,valueField,valueSplit,remoteSearch,showPager,pagerOp,showSelectedBox,selectedBoxOp,treeOp,beforeClose,autoLookup,lookupMethod,mainHeight} = props
      const defaultProps = {
        ...$props,
        ...props,
        dialogOp,visible,popseletor,multi,gridOp,textField,textSplit,valueField,valueSplit,remoteSearch,showPager,pagerOp,showSelectedBox,selectedBoxOp,treeOp,beforeClose,autoLookup,lookupMethod,mainHeight
      }
      const { ref, current: vm, parent } = useVm()
      const multiGrid=useRef()
const multiTree=useRef()
const selectedBox=useRef()
const pager=useRef()
      const { state,multiGridSelectAll,multiGridSelectChange,multiGridRadioChange,doMultiTreeFilter,multiTreeLeavePlain,multiTreeCheck,multiTreeRadio,selectedBoxClear,selectedBoxDelete,selectedBoxDrag,onFooterCancel,onFooterConfirm } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[multiGrid,multiTree,selectedBox,pager]
      })
      return (
          
<tinyDialog  visible={visible} onUpdate:visible={$emit('update:visible', $event)} modal draggable append-to-body modal-append-to-body close-on-press-escape={false} close-on-click-modal={false} dialogOp onOpen={$emit('open', $event)} onClose={$emit('close', $event)} onOpened={$emit('opened', $event)} onClosed={$emit('closed', $event)} onDrag={$emit('drag-start', $event)} onDrag={$emit('drag-end', $event)} onDrag={$emit('drag-move', $event)} className={vc(['tiny-dialog-select', { 'radio-check': !multi }])}>    


    
<template style={{display:slots.title?'block':'none'}} slot>      
<Slot name="title" params parent_children={props.children} slots={props.slots}></Slot>

    </template>

    


    
<div  className="tiny-dialog-select__body">      
<div style={{display:popseletor === 'grid' && slots.search?'block':'none'}}  className="tiny-dialog-select__body-search">        
<Slot name="search" parent_children={props.children} slots={props.slots}></Slot>

      </div>

      
<div  className="tiny-dialog-select__body-selector">        
<tinySplit value={state.splitValue} onChange={(e)=>state.splitValue = e.value} trigger-simple style={`height:${mainHeight}px`} disabled={!multi}>          
<template slot>            
<div style={{display:popseletor === 'grid'?'block':'none'}} style={`height:${mainHeight}px`}  className="tiny-dialog-select__body-grid">              
<tinyGrid style={{display:visible || state.multiGridStore.inited?'block':'none'}} ref={multiGrid} v-ref="multiGrid" gridOp border={state.theme !== 'saas'} stripe={false} auto-resize height={`${mainHeight}px`} loading={state.multiGridStore.loading} row-id={valueField} columns={state.gridColumns} select-config={state.multiGridStore.selectConfig} radio-config={state.multiGridStore.radioConfig} onSelect={multiGridSelectAll} onSelect={multiGridSelectChange} onRadio={multiGridRadioChange}></tinyGrid>

            </div>

            
<div style={{display:popseletor === 'tree'?'block':'none'}} style={`height:${mainHeight}px`}  className="tiny-dialog-select__body-tree">              
<tinyInput placeholder={t('ui.dialogSelect.treeSearch')} value={state.multiTreeStore.filterText} onChange={(e)=>state.multiTreeStore.filterText = e.value} onChange={doMultiTreeFilter} clearable></tinyInput>

              
<div style="height: calc(100% - 28px)"  className="tiny-dialog-select__body-tree-wrapper">                
<tinyTree style={{display:visible || state.multiTreeStore.inited?'block':'none'}} ref={multiTree} v-ref="multiTree" show-checkbox={multi} show-radio={!multi} lazy-current lazy after-load={multiTreeAfterLoad} view-type={state.multiTreeStore.viewType} default-expanded-keys={state.multiTreeStore.expandedKeys} default-expanded-keys-highlight={state.multiTreeStore.highlight} filter-node-method={multiTreeFilterNode} filter-plain-method={multiTreeFilterPlain} default-checked-keys={state.multiTreeStore.checkedKeys} treeOp onLeave={multiTreeLeavePlain} onCheck={multiTreeCheck} onNode={multiTreeCheck} onNode={multiTreeCheck} onCheck={multiTreeCheck} onCheck={multiTreeRadio}></tinyTree>

              </div>

            </div>

          </template>

          
<template slot>            
<div style={{display:multi?'block':'none'}} style={`height:${mainHeight}px`}  className="tiny-dialog-select__body-box">              
<tinySelected style={{display:showSelectedBox?'block':'none'}} ref={selectedBox} v-ref="selectedBox" select={state.selectedDatas} selectedBoxOp onClear={selectedBoxClear} onDelete={selectedBoxDelete} onDrag={selectedBoxDrag}>                
<template style={{display:slots.select?'block':'none'}} slot>                  
<Slot name="select" params parent_children={props.children} slots={props.slots}></Slot>

                </template>

                
<template style={{display:slots.button?'block':'none'}} slot>                  
<Slot name="button" params parent_children={props.children} slots={props.slots}></Slot>

                </template>

                
<template style={{display:slots.clear?'block':'none'}} slot>                  
<Slot name="clear" params parent_children={props.children} slots={props.slots}></Slot>

                </template>

                
<template style={{display:slots.option?'block':'none'}} slot>                  
<Slot name="option" params parent_children={props.children} slots={props.slots}></Slot>

                </template>

                
<template style={{display:slots.close?'block':'none'}} slot>                  
<Slot name="close" params parent_children={props.children} slots={props.slots}></Slot>

                </template>

              </tinySelected>

            </div>

          </template>

        </tinySplit>

      </div>

    </div>

    


    
<template slot>      
<Slot name="footer" params parent_children={props.children} slots={props.slots}>        
<div  className="tiny-dialog-select__footer">          
<div  className="tiny-dialog-select__footer-pager">            
<tinyPager style={{display:popseletor === 'grid' && showPager?'block':'none'}} ref={pager} v-ref="pager" pagerOp pager-count={7} onSize={$emit('size-change', $event)} onCurrent={$emit('current-change', $event)} onPrev={$emit('prev-click', $event)} onNext={$emit('next-click', $event)} onBefore={$emit('before-page-change', $event)}></tinyPager>

          </div>

          
<div  className="tiny-dialog-select__footer-buttons">            
<tinyButton onClick={onFooterCancel}>{t('ui.button.cancel')}</tinyButton>

            
<tinyButton onClick={onFooterConfirm} type="primary">{t('ui.button.confirm')}</tinyButton>

          </div>

        </div>

      </Slot>

    </template>

  </tinyDialog>


      );
    }
    