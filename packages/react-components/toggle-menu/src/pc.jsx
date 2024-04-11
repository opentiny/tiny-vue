
    import { renderless, api } from '@opentiny/vue-renderless/toggle-menu/vue'
    import '@opentiny/vue-theme/toggle-menu/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function toggleMenu(props) {
      const {accordion,showCheckbox,defaultCheckedKeys,automaticFiltering,data,ellipsis,expandOnClickNode,draggable,defaultExpandAll,icon,placeholder,props,showFilter,wrap,getMenuDataSync,getMenuDataAsync} = props
      const defaultProps = {
        ...$props,
        ...props,
        accordion,showCheckbox,defaultCheckedKeys,automaticFiltering,data,ellipsis,expandOnClickNode,draggable,defaultExpandAll,icon,placeholder,props,showFilter,wrap,getMenuDataSync,getMenuDataAsync
      }
      const { ref, current: vm, parent } = useVm()
      const tree=useRef()
      const { state,searchNodeText,hideNodeText,nodeClick,nodeExpand,nodeCollapse,nodeDragEnd,nodeDragEnter,nodeDragLeave,nodeDragOver,nodeDragStart,nodeDrop,clickA } = useSetup({
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
      'is-toggle-right': !state.toggleIcon && !state.showNode ? true : false
    },'tiny-toggle-menu')}>    
<div  style={{display:showFilter?'block':'none'}} className="tiny-toggle-menu__filter">      
<tinyInput placeholder={state.placeholder} value={state.filterText} onChange={(e)=>state.filterText = e.value}></tinyInput>

      
<span  className="tiny-toggle-menu__filter-search">        
<tinyIcon onClick={searchNodeText}></tinyIcon>

      </span>

    </div>

    
<div  className="tiny-toggle-menu__wrap">      
<div   onClick={hideNodeText} className={vc({
          'tiny-toggle-menu__toggle-right': !state.toggleIcon && !state.showNode ? true : false
        },'tiny-toggle-menu__toggle')}>        
<tinyIcon style={{display:state.toggleIcon?'block':'none'}}></tinyIcon>

        
<tinyIcon style={{display:!(state.toggleIcon)?'block':'none'}}></tinyIcon>

      </div>

      
<tinyTree  show-checkbox={showCheckbox} data={state.datas} node-key="id" accordion={accordion} default-checked-keys={defaultCheckedKeys} icon={icon} props={props} default-expand-all={defaultExpandAll} draggable={draggable} expand-on-click-node={expandOnClickNode} filter-node-method={filterNode} onNode={nodeClick} onNode={nodeExpand} onNode={nodeCollapse} onNode={nodeDragEnd} onNode={nodeDragEnter} onNode={nodeDragLeave} onNode={nodeDragOver} onNode={nodeDragStart} onNode={nodeDrop} ref={tree} v-ref="tree" className={vc({
          'is-wrap': !ellipsis ? wrap : false,
          'is-overflow': ellipsis,
          'is-node-hide': !state.showNode
        })}>        
<template slot>          
<div  className="tiny-toggle-menu__link tiny-tree-node__label">            
<Component is={data.icons}  className="tiny-tree-node__expand-icon"></Component>

            
<a  title={data[props.label]} onClick={clickA(data.url)} className="tiny-toggle-menu__body">              
<span  className="tiny-toggle-menu__name">                
<Slot name="node" data={data} label={data[props.label]} parent_children={props.children} slots={props.slots}>                  
{data[props.label]}

                </Slot>

              </span>

            </a>

          </div>

        </template>

      </tinyTree>

    </div>

  </div>


      );
    }
    