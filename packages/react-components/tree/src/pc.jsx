
    import { renderless, api } from '@opentiny/vue-renderless/tree/vue'
    import '@opentiny/vue-theme/tree/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function tree(props) {
      const {data,dataset,parentKey,expandIcon,shrinkIcon,expandIconColor,shrinkIconColor,emptyText,renderAfterExpand,nodeKey,checkStrictly,defaultExpandAll,expandOnClickNode,checkOnClickNode,checkDescendants,autoExpandParent,defaultCheckedKeys,defaultExpandedKeys,defaultExpandedKeysHighlight,currentNodeKey,renderContent,showCheckbox,draggable,allowDrag,allowDrop,props,lazy,highlightCurrent,load,filterNodeMethod,accordion,indent,icon,iconTriggerClickNode,showRadio,showContextmenu,showNumber,collapsible,nodeHeight,showCheckEasily,size,deleteDisabledKeys,editDisabledKeys,addDisabledKeys,theme,viewType,showAuxi,pathSplit,filterPlainMethod,afterLoad,lazyCurrent,baseIndent,showLine,onlyCheckChildren,deleteNodeMethod,showCheckedMark,willChangeView} = props
      const defaultProps = {
        ...$props,
        ...props,
        data,dataset,parentKey,expandIcon,shrinkIcon,expandIconColor,shrinkIconColor,emptyText,renderAfterExpand,nodeKey,checkStrictly,defaultExpandAll,expandOnClickNode,checkOnClickNode,checkDescendants,autoExpandParent,defaultCheckedKeys,defaultExpandedKeys,defaultExpandedKeysHighlight,currentNodeKey,renderContent,showCheckbox,draggable,allowDrag,allowDrop,props,lazy,highlightCurrent,load,filterNodeMethod,accordion,indent,icon,iconTriggerClickNode,showRadio,showContextmenu,showNumber,collapsible,nodeHeight,showCheckEasily,size,deleteDisabledKeys,editDisabledKeys,addDisabledKeys,theme,viewType,showAuxi,pathSplit,filterPlainMethod,afterLoad,lazyCurrent,baseIndent,showLine,onlyCheckChildren,deleteNodeMethod,showCheckedMark,willChangeView
      }
      const { ref, current: vm, parent } = useVm()
      const dropIndicator=useRef()
const deletePopover=useRef()
const deleteCheckbox=useRef()
      const { state,handleNodeExpand,handleCheckPlainNode,handleClickPlainNode,switchToggle,cancelDelete,deleteAction } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[dropIndicator,deletePopover,deleteCheckbox]
      })
      return (
          
<div   role="tree" className={vc({
      'tiny-tree--highlight-current': highlightCurrent,
      'is-dragging': !!state.dragState.draggingNode,
      'is-drop-not-allow': !state.dragState.allowDrop,
      'is-drop-inner': state.dragState.dropType === 'inner',
      'tiny-tree--small': size === 'small'
    },'tiny-tree')}>    


    
<template style={{display:viewType === 'tree'?'block':'none'}}>      

  {
    state.root.childNodes.map(child=>(
      <treeNode  action={state.action} show-radio={showRadio} theme={theme} show-number={showNumber} collapsible={collapsible} node-height={nodeHeight} current-radio={state.currentRadio} onRadio={state.currentRadio.value = $event} expand-icon={expandIcon} shrink-icon={shrinkIcon} expand-icon-color={expandIconColor} shrink-icon-color={shrinkIconColor} node={child} props={props} render-after-expand={renderAfterExpand} show-checkbox={showCheckbox} key={getNodeKey(child)} node-key={nodeKey} render-content={renderContent} onNode={handleNodeExpand} check-easily={state.checkEasily} show-line={showLine} show-checked-mark={showCheckedMark}>        
<template slot><Slot name="prefix" node={slotScoped.node} parent_children={props.children} slots={props.slots}></Slot></template>

        
<template slot><Slot name="suffix" node={slotScoped.node} parent_children={props.children} slots={props.slots}></Slot></template>

        
<template slot><Slot name="operation" node={slotScoped.node} parent_children={props.children} slots={props.slots}></Slot></template>

      </treeNode>
    ))
  }
  

    </template>


    


    
<template style={{display:!(viewType === 'tree')?'block':'none'}}>      

  {
    state.plainNodeStore.filteredNodes.map((plainNode, i)=>(
      <div  key={`${plainNode.nodeKeyPath}-${i}`}  className="tiny-tree__plain-node">        
<div  className="tiny-tree__plain-node-title">          
<tinyCheckbox style={{display:showCheckbox?'block':'none'}} model-value={plainNode.node.checked} indeterminate={plainNode.node.indeterminate} disabled={!!plainNode.node.disabled} onChange={handleCheckPlainNode($event, plainNode)}></tinyCheckbox>

          
<tinyRadio style={{display:showRadio?'block':'none'}} value={state.currentRadio.value} onChange={(e)=>state.currentRadio.value = e.value} validate-event={false} label={plainNode.node.id} disabled={!!plainNode.node.disabled} onChange={handleCheckPlainNode($event === plainNode.node.id, plainNode)}></tinyRadio>

          
<Slot name="prefix" node={plainNode.node} parent_children={props.children} slots={props.slots}></Slot>

          
<Slot name="default" node={plainNode.node} parent_children={props.children} slots={props.slots}>            
<span  className="tiny-tree__plain-node-title-txt">{plainNode.title}</span>

          </Slot>

          
<Slot name="suffix" node={plainNode.node} parent_children={props.children} slots={props.slots}>            
<span  className="tiny-tree__plain-node-title-loc">              
<iconMark onClick={handleClickPlainNode($event, plainNode)}></iconMark>

            </span>

          </Slot>

        </div>

        
<div style={{display:showAuxi && plainNode.auxi?'block':'none'}}  className="tiny-tree__plain-node-auxi">          
<div >{plainNode.auxi}</div>

        </div>

      </div>
    ))
  }
  

    </template>


    
<div  style={{display:state.isEmpty?'block':'none'}} className="tiny-tree__empty-block">      
<Slot name="empty" parent_children={props.children} slots={props.slots}>        
<span  className="tiny-tree__empty-text">{state.loaded ? state.showEmptyText : t('ui.tree.loading')}</span>

      </Slot>

    </div>

    
<div style={{display:state.dragState.showDropIndicator?'block':'none'}}  ref={dropIndicator} v-ref="dropIndicator" className="tiny-tree__drop-indicator"></div>

    
<div  style={{display:state.store.checkStrictly && showCheckEasily?'block':'none'}} className="tiny-tree__strict-bottom">      
<div  className="tiny-tree__strict-bottom-content">        
<tinySwitch mini onChange={switchToggle} value={state.checkEasily} onChange={(e)=>state.checkEasily = e.value}></tinySwitch>

        
<div  className="tiny-tree__bottom-text">          
<Slot name="switchText" parent_children={props.children} slots={props.slots}>            
<span >{t('ui.tree.switchText')}</span>

          </Slot>

        </div>

      </div>

    </div>


    
<tinyPopover ref={deletePopover} v-ref="deletePopover" style={{display:state.action.show?'block':'none'}} style={{display:state.action.popoverVisible?'block':'none'}} value={state.action.popoverVisible} onChange={(e)=>state.action.popoverVisible = e.value} popper-class="tiny-tree__del-popover" placement="top" width={state.action.isLeaf ? 200 : 270} trigger="manual" reference={state.action.referenceElm}>      
<div  clickoutside className="tiny-tree__del-body">        
<div  className="tiny-tree__del-icon">          
<iconWarning ></iconWarning>

        </div>

        
<div  className="tiny-tree__del-content">          
<template style={{display:state.action.isLeaf?'block':'none'}}>            
<div >{t('ui.tree.deleteTip1')}</div>

          </template>

          
<template style={{display:!(state.action.isLeaf)?'block':'none'}}>            
<div >{t('ui.tree.deleteTip2')}</div>

            
<div  className="tiny-tree__del-checkbox">              
<tinyCheckbox value={state.action.isSaveChildNode} onChange={(e)=>state.action.isSaveChildNode = e.value} ref={deleteCheckbox} v-ref="deleteCheckbox">{t('ui.tree.deleteTip3')}</tinyCheckbox>

            </div>

          </template>

        </div>

      </div>

      
<div  className="tiny-tree__del-footer">        
<tinyButton onClick={cancelDelete}>{t('ui.base.cancel')}</tinyButton>

        
<tinyButton type="primary" onClick={deleteAction}>{t('ui.base.confirm')}</tinyButton>

      </div>

    </tinyPopover>

  </div>


      );
    }
    