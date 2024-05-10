
    import { renderless, api } from '@opentiny/vue-renderless/file-upload/vue'
    import '@opentiny/vue-theme/file-upload/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function fileUpload(props) {
      const {size,action,drag,headers,data,multiple,name,withCredentials,showFileList,accept,type,beforeUpload,beforeRemove,fileList,autoUpload,listType,httpRequest,disabled,limit,fileIconList,display,fileTitle,headerShow,successStatistics,uploadIcon} = props
      const defaultProps = {
        ...$props,
        ...props,
        size,action,drag,headers,data,multiple,name,withCredentials,showFileList,accept,type,beforeUpload,beforeRemove,fileList,autoUpload,listType,httpRequest,disabled,limit,fileIconList,display,fileTitle,headerShow,successStatistics,uploadIcon
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
    