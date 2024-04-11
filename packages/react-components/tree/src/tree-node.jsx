
    import { renderless, api } from '@opentiny/vue-renderless/tree/vue'
    import '@opentiny/vue-theme/tree/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function tree(props) {
      const {} = props
      const defaultProps = {
        ...$props,
        ...props,
        
      }
      const { ref, current: vm, parent } = useVm()
      const node=useRef()
const checkbox=useRef()
const editInput=useRef()
const menuContext=useRef()
      const { state,handleClick,handleDragStart,handleDragOver,handleDragEnd,handleDrop,handleContentClick,handleExpandIconClick,handleCheckChange,saveEdit,openEdit,deleteNode,addNode,handleChildNodeExpand } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[node,checkbox,editInput,menuContext]
      })
      return (
          
<div  className="tiny-tree-node__wrapper">    
<div   role="treeitem" tabindex="-1" style={{display:node.visible?'block':'none'}} aria-expanded={state.expanded} aria-disabled={node.disabled} aria-checked={node.checked} draggable={state.tree.draggable} onClick={handleClick} onContextmenu={($event) => handleContextMenu($event)} onDragstart={handleDragStart} onDragover={handleDragOver} onDragend={handleDragEnd} onDrop={handleDrop} ref={node} v-ref="node" className={vc({
        'is-indeterminate': !node.disabled && node.indeterminate,
        'is-current': node.isCurrent,
        'is-hidden': !node.visible,
        'is-checked': !node.disabled && node.checked,
        'is-focusable': !node.disabled,
        'is-expanded': state.expanded,
        'is-loading': node.loading,
        'is-disabled': node.disabled,
        'is-leaf': node.isLeaf,
        'is-root': node.level === 1,
        'show-line': showLine,
        'show-checkbox': showCheckbox
      },'tiny-tree-node')}>      
<div  style={{
          'height': nodeHeight ? nodeHeight + 'px' : undefined,
          'line-height': nodeHeight ? nodeHeight + 'px' : undefined
        }} onClick={handleContentClick(node, currentRadio)} className={vc({
          'tiny-tree-node__content': true,
          'tiny-tree-node__content-number': showNumber
        })}>        

  {
    showLine ? 1 : node.level - 1.map(i=>(
      <span   key={i} style={{ width: state.computedIndent, flexShrink: 0 }} className="tiny-tree-node__content-indent"></span>
    ))
  }
  

        
<div  className="tiny-tree-node__content-left">          
<template style={{display:showNumber?'block':'none'}}>            
<span  className="tree-node-number">{node.data.number}</span>

          </template>

          
<template style={{display:!(showNumber)?'block':'none'}}>            
<span style={{display:!node.isLeaf?'block':'none'}}  onClick={handleExpandIconClick($event, node)} className={vc(['tree-node-icon', { 'is-disabled': node.disabled }])}>              
<template style={{display:state.expandIcon !== undefined && state.shrinkIcon !== undefined?'block':'none'}}>                
<Component is={state.expanded ? state.shrinkIcon : state.expandIcon} fill={state.expanded ? state.shrinkIconColor : state.expandIconColor}  className={vc(['tiny-tree-node__expand-icon', { 'is-leaf': node.isLeaf }])}></Component>

              </template>

              
<template style={{display:!(state.expandIcon !== undefined && state.shrinkIcon !== undefined)?'block':'none'}}>                
<Component is={state.computedExpandIcon}  className={vc([
                    'tiny-tree-node__expand-icon',
                    {
                      'is-leaf': node.isLeaf,
                      expanded: !node.isLeaf && state.expanded,
                      'is-saas-theme': state.isSaaSTheme
                    }
                  ])}></Component>

              </template>

            </span>

          </template>


          
<tinyCheckbox style={{display:showCheckbox?'block':'none'}} model-value={node.checked} ref={checkbox} v-ref="checkbox" indeterminate={node.indeterminate} disabled={!!node.disabled} validate-event={false} onChange={handleCheckChange} onClick={handleClick($event, 'checkbox')}>          </tinyCheckbox>

          
<tinyRadio style={{display:showRadio?'block':'none'}} model-value={currentRadio.value} onUpdate:modelValue={$emit('radio-change', $event)} validate-event={false} label={node.id} disabled={!!node.disabled}></tinyRadio>

          
<svg style={{display:node.loading?'block':'none'}}  viewBox="25 25 50 50" className="tiny-tree-node__loading tiny-svg circular">            
<circle  cx="50" cy="50" r="24" fill="none" className="path"></circle>

          </svg>

          
<Slot name="prefix" node={node} parent_children={props.children} slots={props.slots}></Slot>

          
<template style={{display:action.type === 'edit' && action.node && action.node === node?'block':'none'}}>            
<tinyInput value={action.label} onChange={(e)=>action.label = e.value} ref={editInput} v-ref="editInput" autofocus clearable onKeyup={saveEdit($event)} onBlur={saveEdit($event)} onClick={($event) => $event.stopPropagation()}></tinyInput>

          </template>

          
<div style={{display:!(action.type === 'edit' && action.node && action.node === node)?'block':'none'}}  className="tiny-tree-node__content-box">            
<nodeContent node={node} render-content={renderContent}></nodeContent>

          </div>

          
<Slot name="suffix" node={node} parent_children={props.children} slots={props.slots}></Slot>

        </div>

        
<div  className={vc(['tiny-tree-node__content-right', { 'is-disabled': node.disabled }])}>          
<span  style={{display:showCheckedMark && !showCheckbox && !node.disabled && node.isCurrent?'block':'none'}} className="tiny-tree-node__checked-mark">            
<iconFinish > </iconFinish>

          </span>

          
<Slot name="operation" node={node} parent_children={props.children} slots={props.slots}></Slot>

          
<template style={{display:action.show?'block':'none'}}>            
<span title={t('ui.tree.edit')}>              
<iconEdit style={{display:!action.editDisabled.includes(node.data[nodeKey])?'block':'none'}} onClick={openEdit(node)}></iconEdit>

            </span>

            
<span title={t('ui.tree.delete')}>              
<iconMinus style={{display:!action.deleteDisabled.includes(node.data[nodeKey])?'block':'none'}} onClick={deleteNode($event, node)}></iconMinus>

            </span>

            
<span title={t('ui.tree.newNodeTitle')}>              
<iconPlus style={{display:!node.data._isNewNode && !action.addDisabled.includes(node.data[nodeKey])?'block':'none'}} onClick={addNode(node)}></iconPlus>

            </span>

          </template>

        </div>

      </div>


      
<template style={{display:node.childNodes.length?'block':'none'}}>        
<collapseTransition >          
<div  style={{display:!renderAfterExpand || state.childNodeRendered?'block':'none'}} style={{display:state.expanded?'block':'none'}} role="group" aria-expanded={state.expanded} style={{
              'margin-left': showLine ? state.computedIndent : 0
            }} className="tiny-tree-node__children">            
<span style={{display:showLine?'block':'none'}}  style={{ width: state.computedIndent, left: `-${state.computedIndent}` }} className="tiny-tree-node__children-indent"></span>

            

  {
    node.childNodes.map(child=>(
      <treeNode  action={action} show-radio={showRadio} theme={theme} current-radio={currentRadio} render-content={renderContent} expand-icon={state.expandIcon} shrink-icon={state.shrinkIcon} expand-icon-color={state.expandIconColor} shrink-icon-color={state.shrinkIconColor} render-after-expand={renderAfterExpand} show-checkbox={showCheckbox} show-number={showNumber} node-height={nodeHeight} show-checked-mark={showCheckedMark} key={getNodeKey(child)} node-key={nodeKey} check-easily={checkEasily} node={child} show-line={showLine} onNode={handleChildNodeExpand} onRadio={$emit('radio-change', $event)}>              
<template slot>                
<Slot name="prefix" node={slotScoped.node} parent_children={props.children} slots={props.slots}></Slot>

              </template>

              
<template slot>                
<Slot name="suffix" node={slotScoped.node} parent_children={props.children} slots={props.slots}></Slot>

              </template>

              
<template slot>                
<Slot name="operation" node={slotScoped.node} parent_children={props.children} slots={props.slots}></Slot>

              </template>

            </treeNode>
    ))
  }
  

          </div>

        </collapseTransition>

      </template>

    </div>

    
<div ref={menuContext} v-ref="menuContext"  style={state.menuposition} style={{display:state.showMenu && TreeRoot.showContextmenu?'block':'none'}} clickoutside   className="tiny-tree-node__menu">      
<menuContext node={node}></menuContext>

    </div>

  </div>


      );
    }
    