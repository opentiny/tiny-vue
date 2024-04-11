
    import { renderless, api } from '@opentiny/vue-renderless/tree-menu/vue'
    import '@opentiny/vue-theme/tree-menu/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function treeMenu(props) {
      const {placeholder,data,nodeKey,defaultExpandAll,suffixIcon,prefixIcon,searchIcon,draggable,emptyText,checkStrictly,lazy,load,showCheckbox,filterNodeMethod,defaultCheckedKeys,defaultExpandedKeys,defaultExpandedKeysHighlight,indent,allowDrag,allowDrop,expandOnClickNode,ellipsis,wrap,getMenuDataSync,accordion,showTitle,showFilter,showExpand,collapsible,showNumber,nodeHeight,onlyCheckChildren,menuCollapsible} = props
      const defaultProps = {
        ...$props,
        ...props,
        placeholder,data,nodeKey,defaultExpandAll,suffixIcon,prefixIcon,searchIcon,draggable,emptyText,checkStrictly,lazy,load,showCheckbox,filterNodeMethod,defaultCheckedKeys,defaultExpandedKeys,defaultExpandedKeysHighlight,indent,allowDrag,allowDrop,expandOnClickNode,ellipsis,wrap,getMenuDataSync,accordion,showTitle,showFilter,showExpand,collapsible,showNumber,nodeHeight,onlyCheckChildren,menuCollapsible
      }
      const { ref, current: vm, parent } = useVm()
      const tree=useRef()
      const { state,collapseChange,nodeDragStart,nodeDragEnter,nodeDragOver,nodeDragEnd,nodeDrop,nodeExpand,nodeCollapse,nodeClick,checkChange,check,currentChange,handleToggleMenu } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[tree]
      })
      return (
          
<div   className={vc({
      'is-collapsed': state.isCollapsed,
      'is-expand': state.isExpand,
      'tiny-tree-menu__show-filter': showFilter,
      'tiny-tree-menu__show-expand': showExpand
    },'tiny-tree-menu')}>    
<div style={{display:menuCollapsible?'block':'none'}}  onClick={collapseChange} className="tiny-tree-menu__toggle-button">      
<iconArrow ></iconArrow>

    </div>

    
<tinyInput style={{display:showFilter?'block':'none'}} value={state.filterText} onChange={(e)=>state.filterText = e.value} placeholder={placeholder || t('ui.treeMenu.placeholder')} prefix-icon={searchIcon}></tinyInput>

    
<tinyTree ref={tree} v-ref="tree"  tiny_mode="pc" theme="tiny" accordion={accordion} data={state.data} node-key={nodeKey || 'id'} empty-text={emptyText} filter-node-method={filterNodeMethod || filterNode} draggable={draggable} default-expand-all={defaultExpandAll} check-strictly={checkStrictly} lazy={lazy} load={load} show-checkbox={showCheckbox} show-number={showNumber} collapsible={collapsible} node-height={nodeHeight} indent={indent} default-checked-keys={defaultCheckedKeys} default-expanded-keys={state.defaultExpandedKeys} default-expanded-keys-highlight={defaultExpandedKeysHighlight} allow-drag={allowDrag} props={props} allow-drop={allowDrop} expand-on-click-node={expandOnClickNode} only-check-children={onlyCheckChildren} onNode={nodeDragStart} onNode={nodeDragEnter} onNode={nodeDragOver} onNode={nodeDragEnd} onNode={nodeDrop} onNode={nodeExpand} onNode={nodeCollapse} onNode={nodeClick} onCheck={checkChange} onCheck={check} onCurrent={currentChange} className={vc({
        'tiny-tree-menu__wrap': !ellipsis ? wrap : false,
        'tiny-tree-menu__overflow': ellipsis,
        'only-check-children': onlyCheckChildren
      })}>      
<template slot>        
<div  className="tree-node">          
<div  className="tree-menus-link tiny-tree-node__label">            
<a  title={getTitle(data.label)} href={data.url || void 0} className="tree-node-body">              
<span  className="tree-node-name">                
<Component style={{display:!data.customIcon && suffixIcon?'block':'none'}} is={suffixIcon}></Component>

                
<Component style={{display:data.customIcon?'block':'none'}} is={data.customIcon}></Component>

                
<Slot node={node} data={data} label={data.label} parent_children={props.children} slots={props.slots}>{data.label || node.label}
 </Slot>

              </span>

            </a>

          </div>

        </div>

      </template>

    </tinyTree>

    
<div style={{display:showExpand?'block':'none'}}  className="tiny-tree-menu__expand">      
<span >        
<iconEditor style={{display:!state.isExpand?'block':'none'}} onClick={handleToggleMenu('collapse')}></iconEditor>

        
<iconEditor style={{display:!(!state.isExpand)?'block':'none'}} onClick={handleToggleMenu('expand')}></iconEditor>

      </span>

    </div>

  </div>


      );
    }
    