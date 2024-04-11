
    import { renderless, api } from '@opentiny/vue-renderless/query-builder/vue'
    import '@opentiny/vue-theme/query-builder/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function queryBuilder(props) {
      const {config,query,onQueryChange,maxHeight} = props
      const defaultProps = {
        ...$props,
        ...props,
        config,query,onQueryChange,maxHeight
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state, } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div  style={style} className="tiny-query-builder">    
<queryBuilder key="queryIC" config independent-combinators query={query} validator={validator} on-query-change={onQueryChange}></queryBuilder>

  </div>


      );
    }
    