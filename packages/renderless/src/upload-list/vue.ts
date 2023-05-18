import {
  parsePercentage,
  handleClick,
  picturefilePreview,
  getDeleteData,
  downloadFile,
  play,
  pause,
  handleLoadedmetadata,
  handleTimeupdate,
  destroyed,
  showOperatePanel,
  getFileType,
  getFileIcon,
  mounted,
  calcUploadListLiWidth,
  reUpload,
  remove
} from './index'
import { getToken, initService } from '../file-upload'
import { getApi } from '../file-upload/vue'

export const api = [
  't',
  'state',
  'parsePercentage',
  'handleClick',
  'handlePreview',
  'picturefilePreview',
  'getDeleteData',
  'downloadFile',
  'play',
  'pause',
  'handleLoadedmetadata',
  'handleTimeupdate',
  'showOperatePanel',
  'getFileType',
  'getFileIcon',
  'reUpload',
  'remove'
]

export const renderless = (
  props,
  { reactive, onMounted, onUnmounted, watch },
  { t, parent, mode, emit, service, vm, nextTick },
  { Modal }
) => {
  const api = { getApi }
  parent = parent.$parent
  const constants = parent.$constants
  const $service = initService({ props, service })

  const state = reactive({
    focusing: false,
    shows: false,
    startPostion: 0,
    screenType: mode === 'mobile' ? true : false,
    showPanel: false
  })

  parent.getToken = getToken({ constants, props: parent, state: parent.state, t, Modal })

  Object.assign(api, {
    state,
    getDeleteData: getDeleteData(emit),
    parsePercentage: parsePercentage(),
    downloadFile: downloadFile($service),
    picturefilePreview: picturefilePreview(state),
    handleClick: handleClick({ props, api, parent }),
    play: play({ vm, api }),
    pause: pause({ vm }),
    handleLoadedmetadata: handleLoadedmetadata({ vm }),
    handleTimeupdate: handleTimeupdate(),
    destroyed: destroyed({ api, props, vm }),
    showOperatePanel: showOperatePanel({ state }),
    getFileType: getFileType(),
    getFileIcon: getFileIcon(),
    mounted: mounted({ api, vm }),
    calcUploadListLiWidth: calcUploadListLiWidth({ vm, nextTick, props, constants }),
    reUpload: reUpload({ emit, props, parent }),
    remove: remove({ emit })
  })

  props.listType === constants.LIST_TYPE.DRAG_SINGLE &&
    watch(
      () => props.files && props.files[0],
      (file) => {
        if (file && file.status === constants.FILE_STATUS.FAIL) {
          setTimeout(() => {
            api.remove({ file })
          }, 2000)
        }
      },
      { immediate: true, deep: true }
    )

  watch(() => props.files, api.calcUploadListLiWidth)

  onMounted(api.mounted)

  onUnmounted(api.destroyed)

  return api
}
