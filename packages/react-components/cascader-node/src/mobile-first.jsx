
    import { renderless, api } from '@opentiny/vue-renderless/cascader-node/vue'
    import '@opentiny/vue-theme/cascader-node/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function cascaderNode(props) {
      const {node,nodeId} = props
      const defaultProps = {
        ...$props,
        ...props,
        node,nodeId
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,handleNodeClick } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div id={nodeId} role="menuitem" data-tag="tiny-cascader-node" onClick={handleNodeClick}  className={vc([
      m(
        gcls('cascader-node'),
        gcls(!state.isDisabled && state.config.checkStrictly ? 'is-selectable' : ''),
        gcls(!state.isDisabled && state.inActivePath ? 'in-active-path' : ''),
        gcls(!state.isDisabled && state.inCheckedPath ? 'in-checked-path' : ''),
        gcls(!state.isDisabled && state.isChecked ? 'in-active' : ''),
        gcls(state.isDisabled ? 'cascader-node_disabled' : ''),
        gcls(state.isDisabled ? 'in-active_disabled' : '')
      )
    )}>    
<span  className={vc([node ? gcls('cascader-node__label_disabled') : ''])}>{state.nodeLabel}</span>

    
<iconLoading style={{display:node.loading?'block':'none'}}  className={vc([gcls('cascader-node__postfix'))}></iconLoading>

    
<iconChevron style={{display:!(node.loading)?'block':'none'}}  className={vc([
        m(
          gcls('cascader-node__postfix'),
          gcls(!state.isDisabled && state.inActivePath ? 'node-active' : ''),
          gcls(!state.isDisabled && state.inCheckedPath ? 'node-active' : ''),
          gcls(!state.isDisabled && state.isChecked ? 'node-active' : '')
        )
      )}>></iconChevron>

  </div>


      );
    }
    