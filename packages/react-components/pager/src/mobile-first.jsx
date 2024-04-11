
    import { renderless, api } from '@opentiny/vue-renderless/pager/vue'
    import '@opentiny/vue-theme/pager/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function pager(props) {
      const {accurateJumper,appendToBody,currentPage,disabled,hideOnSinglePage,isBeforePageChange,layout,mode,nextText,pageCount,pageSize,pageSizes,pagerCount,popperAppendToBody,showTotalLoading,customTotal,popperClass,prevText,total} = props
      const defaultProps = {
        ...$props,
        ...props,
        accurateJumper,appendToBody,currentPage,disabled,hideOnSinglePage,isBeforePageChange,layout,mode,nextText,pageCount,pageSize,pageSizes,pagerCount,popperAppendToBody,showTotalLoading,customTotal,popperClass,prevText,total
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
        
      );
    }
    