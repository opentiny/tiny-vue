
    import { renderless, api } from '@opentiny/vue-renderless/popeditor/vue'
    import '@opentiny/vue-theme/popeditor/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function popeditor(props) {
      const {dataset,placeholder,autoLookup,beforeReset,textRenderSource,resize,size,trigger,conditions,disabled,gridOp,alwaysLoad,remoteSearch,treeOp,icon,iconSearch,initSelectedDatas,multi,pagerOp,popseletor,readonly,showClearBtn,showHistory,showPager,textField,textSplit,title,modelValue,valueField,valueSplit,width,dialogClass,tabindex,draggable,placement,popperAppendToBody,suggest,beforeClose,showSelectedBox,selectedBoxOp,tooltipConfig,autoReset,radioChangeClose} = props
      const defaultProps = {
        ...$props,
        ...props,
        dataset,placeholder,autoLookup,beforeReset,textRenderSource,resize,size,trigger,conditions,disabled,gridOp,alwaysLoad,remoteSearch,treeOp,icon,iconSearch,initSelectedDatas,multi,pagerOp,popseletor,readonly,showClearBtn,showHistory,showPager,textField,textSplit,title,modelValue,valueField,valueSplit,width,dialogClass,tabindex,draggable,placement,popperAppendToBody,suggest,beforeClose,showSelectedBox,selectedBoxOp,tooltipConfig,autoReset,radioChangeClose
      }
      const { ref, current: vm, parent } = useVm()
      const reference=useRef()
const popper=useRef()
const suggest=useRef()
const historyGrid=useRef()
const sourceGrid=useRef()
const selectedBox=useRef()
const selectedGrid=useRef()
const tree=useRef()
      const { state,handleOpen,doSuggesst,handleClear,closeSuggestPanel,doSuggesstNow,openDialog,doDestroy,sourceGridSelectAll,sourceGridSelectChange,suggestRadioChange,handleSearch,handleReset,radioChangeFn,handleSizeChange,handleNumberPageChange,selectedBoxClear,selectedBoxDelete,selectedBoxDrag,selectedGridSelectAll,selectedGridSelectChange,treeCheckChange,handleCancel,handleConfirm } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[reference,popper,suggest,historyGrid,sourceGrid,selectedBox,selectedGrid,tree]
      })
      return (
          
<div  className="tiny-popeditor">    
<tinyInput ref={reference} v-ref="reference" size={size} placeholder={placeholder}  onClick={handleOpen($event)} value={state.display} onChange={(e)=>state.display = e.value} disabled={state.disabled} readonly={state.readonly} tabindex={tabindex} validate-event={!state.open} onUpdate:modelValue={doSuggesst} onMouseover={state.inputHover = true} onMouseleave={state.inputHover = false} className={vc({ 'tiny-popeditor-readonly': state.readonly, suggest })}>      
<template slot>        
<span >          
<iconClose style="margin-right: 8px" style={{display:showClearBtn && state.commitValue && suggest && state.inputHover?'block':'none'}} onClick={handleClear}  className="tiny-svg-size tiny-svg__popeditor"></iconClose>

          
<iconChevron style={{display:suggest && state.showSuggestPanel?'block':'none'}} onClick={closeSuggestPanel(true)}  className="tiny-svg-size tiny-svg__popeditor tiny-chevron"></iconChevron>

          
<iconChevron style={{display:suggest && !state.showSuggestPanel?'block':'none'}} onClick={doSuggesstNow}  className="tiny-svg-size tiny-svg__popeditor tiny-chevron"></iconChevron>

          
<iconClose style={{display:showClearBtn && !!state.display && !suggest?'block':'none'}} onClick={handleClear}  className="tiny-svg-size tiny-svg__popeditor"></iconClose>

          
<Component style={{display:!(showClearBtn && !!state.display && !suggest) || (!suggest && !readonly)?'block':'none'}} is={icon} onClick={openDialog}  className="tiny-svg-size tiny-svg__popeditor"></Component>

        </span>

      </template>

    </tinyInput>

    
<transition name="tiny-zoom-in-top" onAfter={doDestroy}>      
<div ref={popper} v-ref="popper" style={{display:state.showSuggestPanel?'block':'none'}}>        
<tinyGrid ref={suggest} v-ref="suggest" style={{display:state.showSuggestPanel?'block':'none'}} auto-resize loading={state.loading} max-height="300px" highlight-current-row={true} columns={state.baseColumns} data={state.suggestList} row-id={valueField} select-config={{ checkRowKeys: state.selectedValues }} radio-config={{ checkRowKey: state.commitValue, trigger }} tooltip-config={tooltipConfig} onSelect={sourceGridSelectAll} onSelect={sourceGridSelectChange} onRadio={suggestRadioChange}></tinyGrid>

      </div>

    </transition>

    
<tinyDialog visible={state.open} onUpdate:visible={state.open = $event} resize={resize} draggable={draggable} append-to-body title={state.getTitle} close-on-click-modal={false} width={state.modalWidth} onClose={$parent.$emit('close')} onClosed={state.showContent = false} before-close={handleBeforeClose} dialog-class={dialogClass}>      
<template style={{display:state.showContent?'block':'none'}}>        
<div  style={{display:state.conditions.length && popseletor === 'grid'?'block':'none'}} className="tiny-popeditor-top">          
<Slot name="search" search-op={state.searchOp} parent_children={props.children} slots={props.slots}>            
<ul  className="tiny-popeditor__search-lists">              

  {
    conditions.map(item=>(
      <li   key={item.field} style={{ width: 100 * ((item.span || 6) / 12) + '%' }} className="tiny-popeditor__search-item">                
<label  title={item.label} style={{ width: item.labelWidth || '160px' }} className="tiny-popeditor__search-label">{item.label}</label>

                
<Component is={item.component || 'tiny-input'} value={state.search[item.field]} onChange={(e)=>state.search[item.field] = e.value} item.attrs  novalid={true} onKeydown={handleSearch} className="tiny-popeditor__search-input"></Component>

              </li>
    ))
  }
  

            </ul>

            
<div  style={{display:state.theme === 'saas'?'block':'none'}} className="tiny-popeditor__search-footer">              
<button type="button" onClick={handleReset}  className="tiny-button tiny-button--default">                
<span >{t('ui.popeditor.reset')}</span>

              </button>

              
<button type="button" onClick={handleSearch}  className="tiny-button tiny-button--primary">                
<span >{t('ui.popeditor.search')}</span>

              </button>

            </div>

            
<div  style={{display:!(state.theme === 'saas')?'block':'none'}} className="tiny-popeditor__search-footer">              
<button type="button" onClick={handleSearch}  className="tiny-button tiny-button--primary">                
<span >{t('ui.popeditor.search')}</span>

              </button>

              
<button type="button" onClick={handleReset}  className="tiny-button tiny-button--default">                
<span >{t('ui.popeditor.reset')}</span>

              </button>

            </div>

          </Slot>

        </div>

        
<div style={{display:popseletor === 'grid'?'block':'none'}}  className="tiny-popeditor-body">          
<div  className={vc(['tiny-popeditor-body__left', { 'tiny-popeditor-body__radio': !multi }])}>            
<div  className="tiny-popeditor__tabs">              
<div  className="tiny-popeditor__tabs-head">                
<ul >                  
<li style={{display:showHistory?'block':'none'}} onClick={state.activeName = 'history'}  className={vc({
                      'tiny-popeditor__tabs-selected': state.activeName === 'history'
                    })}>                    
<span >{t('ui.popeditor.historyLists')}</span>

                  </li>

                  
<li onClick={state.activeName = 'source'}  className={vc({
                      'tiny-popeditor__tabs-selected': state.activeName === 'source'
                    })}>                    
<span >{t('ui.popeditor.sourceLists')}</span>

                  </li>

                </ul>

              </div>

              
<div  className="tiny-popeditor__tabs-body">                
<div style={{display:state.activeName === 'history'?'block':'none'}}  className="tabs-body-item">                  
<tinyGrid ref={historyGrid} v-ref="historyGrid" height="290px" size="mini" highlight-current-row={true} columns={state.baseColumns} data={state.historyGridDataset} row-id={valueField} select-config={{ checkRowKeys: state.selectedValues }} tooltip-config={tooltipConfig} onSelect={sourceGridSelectAll} onSelect={sourceGridSelectChange}></tinyGrid>

                </div>

                
<div style={{display:state.activeName === 'source'?'block':'none'}}  className="tabs-body-item">                  
<tinyGrid style={{display:multi?'block':'none'}} auto-resize loading={state.loading} ref={sourceGrid} v-ref="sourceGrid" height="290px" size="mini" highlight-current-row={true} columns={state.baseColumns} data={state.sourceGridDataset} row-id={valueField} select-config={{ checkRowKeys: state.selectedValues }} tooltip-config={tooltipConfig} onSelect={sourceGridSelectAll} onSelect={sourceGridSelectChange}></tinyGrid>

                  
<tinyGrid style={{display:!(multi)?'block':'none'}} ref={sourceGrid} v-ref="sourceGrid" auto-resize loading={state.loading} height="290px" size="mini" highlight-current-row={true} columns={state.baseColumns} data={state.sourceGridDataset} row-id={valueField} radio-config={{ checkRowKey: state.commitValue, trigger }} tooltip-config={tooltipConfig} onRadio={radioChangeFn}></tinyGrid>

                  
<tinyPager style={{display:showPager?'block':'none'}} state.pagerConfig onCurrent={handleSizeChange} onSize={handleNumberPageChange}></tinyPager>

                </div>

              </div>

            </div>

          </div>

          
<div style={{display:multi?'block':'none'}}  className="tiny-popeditor-body__right">            
<div  className="tiny-popeditor__tabs">              
<div  className="tiny-popeditor__tabs-head">                
<ul >                  
<li  className="tiny-popeditor__tabs-selected">                    
<span >{t('ui.popeditor.selectionLists')}</span>

                  </li>

                </ul>

              </div>

              
<div  className="tiny-popeditor__tabs-body">                
<div  className="tabs-body-item">                  
<tinySelected style={{display:showSelectedBox?'block':'none'}} ref={selectedBox} v-ref="selectedBox" style="height: 290px" select={state.selectedDatas} onClear={selectedBoxClear} onDelete={selectedBoxDelete} onDrag={selectedBoxDrag} selectedBoxOp>                    
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

                  
<tinyGrid style={{display:!(slots.close)?'block':'none'}} ref={selectedGrid} v-ref="selectedGrid" auto-resize columns={state.baseColumns} data={state.selectedDatas} height="290px" size="mini" row-id={valueField} select-config={{ checkRowKeys: state.selectedValues }} tooltip-config={tooltipConfig} onSelect={selectedGridSelectAll} onSelect={selectedGridSelectChange}></tinyGrid>

                  
<div style={{display:showPager?'block':'none'}} style="height: 50px"></div>

                </div>

              </div>

            </div>

          </div>

        </div>

        
<div style={{display:popseletor === 'tree'?'block':'none'}}>          
<tinyInput  placeholder={t('ui.popeditor.filterNode')} value={state.filterText} onChange={(e)=>state.filterText = e.value} suffix-icon={iconSearch} className="tiny-popeditor_filter-input"></tinyInput>

          
<tinyTree ref={tree} v-ref="tree" state.treeOp onCheck={treeCheckChange}></tinyTree>

        </div>

      </template>

      
<template slot>        
<span  style={{display:state.theme === 'saas'?'block':'none'}} className="tiny-toolbar">          
<Slot name="footer" confirm={handleConfirm} cancel={handleCancel} parent_children={props.children} slots={props.slots}>            
<button type="button" onClick={handleCancel}  className="tiny-button tiny-button--default">              
<span >{t('ui.popeditor.cancel')}</span>

            </button>

            
<button type="button" onClick={handleConfirm}  className="tiny-button tiny-button--primary">              
<span >{t('ui.popeditor.confirm')}</span>

            </button>

          </Slot>

        </span>

        
<span  style={{display:!(state.theme === 'saas')?'block':'none'}} className="tiny-toolbar">          
<Slot name="footer" confirm={handleConfirm} cancel={handleCancel} parent_children={props.children} slots={props.slots}>            
<button type="button" onClick={handleConfirm}  className="tiny-button tiny-button--primary">              
<span >{t('ui.popeditor.confirm')}</span>

            </button>

            
<button type="button" onClick={handleCancel}  className="tiny-button tiny-button--default">              
<span >{t('ui.popeditor.cancel')}</span>

            </button>

          </Slot>

        </span>

      </template>

    </tinyDialog>

  </div>


      );
    }
    