
    import { renderless, api } from '@opentiny/vue-renderless/upload/vue'
    import '@opentiny/vue-theme/upload/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function upload(props) {
      const {accept,action,autoUpload,beforeUpload,data,disabled,drag,edmToken,fileList,headers,httpRequest,isFolder,limit,listType,multiple,name,onError,onExceed,onPreview,onProgress,onRemove,onStart,onSuccess,type,withCredentials,scale,sourceType,displayOnly,customClass,handleTriggerClick,mode,showTitle,isHwh5} = props
      const defaultProps = {
        ...$props,
        ...props,
        accept,action,autoUpload,beforeUpload,data,disabled,drag,edmToken,fileList,headers,httpRequest,isFolder,limit,listType,multiple,name,onError,onExceed,onPreview,onProgress,onRemove,onStart,onSuccess,type,withCredentials,scale,sourceType,displayOnly,customClass,handleTriggerClick,mode,showTitle,isHwh5
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
    