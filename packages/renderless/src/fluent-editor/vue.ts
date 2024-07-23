import {
  beforeUnmount,
  computePreviewOptions,
  stringToJson,
  doPreview,
  fileHandler,
  fileOperationToSev,
  getFileUploadUrl,
  handleDblclick,
  handlers,
  handleUploadFile,
  handleUploadImage,
  imageHandler,
  init,
  initContent,
  inputFileHandler,
  insertFileToEditor,
  insertImageToEditor,
  lineheightHandler,
  mounted,
  redoHandler,
  selectionChange,
  textChange,
  undoHandler,
  uploaderDflsHandler,
  uploadImageToSev,
  setToolbarTips,
  getOuterHTML,
  setToolbarTitle,
  addFullscreenchange,
  removeFullscreenchange,
  keyDownHandler,
  computeZIndex,
  handleComposition,
  handleCompositionstart,
  handleCompositionend,
  removeHandleComposition,
  checkTableISEndElement
} from './index'
import { defaultOption, iconOption, simpleToolbar } from './options'

export const api = ['state', 'init', 'initContent', 'selectionChange', 'textChange', 'doPreview', 'handleDblclick']

const initState = ({ api, reactive, computed, props }) => {
  const state = reactive({
    promises: [],
    promisesData: [],
    cbNum: 0,
    innerOptions: {},
    innerContent: '',
    fileUploadUrl: (props.fileUpload && props.fileUpload.url) || '',
    quill: null,
    fileInput: null,
    previewOptions: computed(() => api.computePreviewOptions()),
    previewImgUrl: '',
    showPreview: false,
    content: props.modelValue || props.content,
    isFullscreen: false,
    zIndex: computed(() => api.computeZIndex()),
    icons: [
      'IconEditorAlignCenter',
      'IconEditorAlignLeft',
      'IconEditorAlignRight',
      'IconEditorBackground',
      'IconEditorBold',
      'IconEditorCode',
      'IconEditorDeleteline',
      'IconEditorEraser',
      'IconEditorItalic',
      'IconEditorLeftBorder',
      'IconEditorList',
      'IconEditorListDot',
      'IconEditorListNum',
      'IconEditorMenuLeft',
      'IconEditorMenuRight',
      'IconEditorQuote',
      'IconEditorRedo',
      'IconEditorRightBorder',
      'IconEditorSub',
      'IconEditorSubtitle',
      'IconEditorSuper',
      'IconEditorTable',
      'IconEditorTextcolor',
      'IconEditorTitle',
      'IconEditorUnderline',
      'IconEditorUndo',
      'IconEditorVideo',
      'IconLink',
      'IconPicture',
      'IconCloudUpload',
      'IconFullscreen'
    ]
  })

  return state
}

const initApi = ({ api, state, service, emit, props, nextTick, FluentEditor, UploaderDfls, Delta, vm, t }) => {
  Object.assign(api, {
    state,
    getFileUploadUrl: getFileUploadUrl({ service }),
    selectionChange: selectionChange({ emit, state }),
    fileOperationToSev: fileOperationToSev({ state }),
    undoHandler: undoHandler({ state }),
    redoHandler: redoHandler({ state }),
    lineheightHandler: lineheightHandler({ state, FluentEditor }),
    inputFileHandler: inputFileHandler({ state, UploaderDfls }),
    insertFileToEditor: insertFileToEditor({ state, FluentEditor, Delta }),
    insertImageToEditor: insertImageToEditor({ state, FluentEditor, Delta }),
    uploadImageToSev: uploadImageToSev({ state }),
    doPreview: doPreview({ props, state, nextTick }),
    stringToJson: stringToJson({ props }),
    setToolbarTips: setToolbarTips({ api, vm, FluentEditor, iconOption }),
    getOuterHTML: getOuterHTML(),
    setToolbarTitle: setToolbarTitle({ state, t })
  })
}

const mergeApi = (args) => {
  let { api, state, service, emit, props, vm, i18n, watch, nextTick, useBreakpoint } = args
  let { constants, FluentEditor, UploaderDfls, Delta, defaultOptions } = args

  Object.assign(api, {
    init: init({ api, emit, props, service, state, FluentEditor, UploaderDfls, defaultOptions, vm, useBreakpoint, simpleToolbar }),
    initContent: initContent({ state, props, api, nextTick }),
    fileHandler: fileHandler({ api, state }),
    imageHandler: imageHandler({ api, state }),
    uploaderDflsHandler: uploaderDflsHandler({ api, modules: defaultOptions.modules }),
    handleUploadFile: handleUploadFile({ api, UploaderDfls }),
    handleUploadImage: handleUploadImage({ state, api, FluentEditor, Delta, UploaderDfls }),
    handlers: handlers({ api }),
    mounted: mounted({ api, props, state, i18n, watch }),
    beforeUnmount: beforeUnmount({ api, state, vm }),
    computePreviewOptions: computePreviewOptions({ props, state, constants, api }),
    handleDblclick: handleDblclick({ props, api }),
    textChange: textChange({ emit, vm, state, props, api }),
    keyDownHandler: keyDownHandler({ state }),
    computeZIndex: computeZIndex({ constants, props }),
    addFullscreenchange: addFullscreenchange({ api }),
    removeFullscreenchange: removeFullscreenchange({ api }),
    handleComposition: handleComposition({ state, api }),
    handleCompositionstart: handleCompositionstart({ state }),
    handleCompositionend: handleCompositionend({ state }),
    removeHandleComposition: removeHandleComposition({ state, api })
  })
}

const initWatch = ({ watch, state, api, props, vm }) => {
  watch(
    () => props.modelValue,
    (value) => {
      if (checkTableISEndElement(vm.$refs.editor.children[0])) {
        state.content = value + '<p><br></p><p><br></p>'
      } else {
        state.content = value
      }
      api.initContent()
    }
  )

  watch(
    () => props.content,
    (value) => {
      state.content = value
      api.initContent()
    }
  )

  watch(
    () => props.disabled,
    (value) => {
      if (state.quill) {
        state.quill.enable(!value)
      }
    }
  )
}

export const renderless = (
  props,
  { reactive, watch, onMounted, onBeforeUnmount, computed },
  { service, emit, i18n, constants, nextTick, vm, t, useBreakpoint },
  { FluentEditor }
) => {
  const api = {}
  const { DEFAULTS: UploaderDfls } = FluentEditor.imports['modules/uploader']
  const Delta = FluentEditor.imports['delta']
  const state = initState({ reactive, computed, api, props })
  const defaultOptions = defaultOption({ FluentEditor, state, mentionObj: props.mentionObj })

  initApi({ api, state, service, emit, props, nextTick, FluentEditor, UploaderDfls, Delta, vm, t })

  const args = { api, state, service, emit, props, vm, i18n, watch, nextTick, useBreakpoint }

  Object.assign(args, { constants, FluentEditor, UploaderDfls, Delta, defaultOptions })

  mergeApi(args)

  initWatch({ watch, state, api, props, vm })

  onMounted(api.mounted)
  onBeforeUnmount(() => {
    UploaderDfls.handler = null
    UploaderDfls.imagePasteFailCallback = null
    api.beforeUnmount()
  })

  return api
}
