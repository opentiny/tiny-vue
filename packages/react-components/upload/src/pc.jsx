
    import { renderless, api } from '@opentiny/vue-renderless/upload/vue'
    import '@opentiny/vue-theme/upload/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function upload(props) {
      const {accept,action,autoUpload,beforeUpload,pasteUpload,data,disabled,drag,edmToken,fileList,headers,httpRequest,isFolder,limit,listType,multiple,name,onError,onExceed,onPreview,onProgress,onRemove,onStart,onSuccess,type,withCredentials,isHidden,handleTriggerClick} = props
      const defaultProps = {
        ...$props,
        ...props,
        accept,action,autoUpload,beforeUpload,pasteUpload,data,disabled,drag,edmToken,fileList,headers,httpRequest,isFolder,limit,listType,multiple,name,onError,onExceed,onPreview,onProgress,onRemove,onStart,onSuccess,type,withCredentials,isHidden,handleTriggerClick
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
    