import {
  initContent,
  initQuill,
  setToolbarTips,
  setPlaceholder,
  getFileUploadUrl,
  selectionChange,
  textChange,
  mounted,
  beforeUnmount,
  maxLength,
  handlePaste,
  isDisplayOnly
} from './index'

export const api = [
  'state',
  'initContent',
  'initQuill',
  'setToolbarTips',
  'setPlaceholder',
  'selectionChange',
  'textChange',
  'handlePaste'
]

const initState = ({ reactive, props, computed, api }) => {
  const state = reactive({
    innerOptions: {},
    innerContent: '',
    fileUploadUrl: (props.fileUpload && props.fileUpload.url) || '',
    content: props.modelValue || props.content,
    maxLength: computed(() => api.maxLength()),
    pasteCanceled: false,
    isDisplayOnly: computed(() => api.isDisplayOnly())
  })

  return state
}

const initApi = (args) => {
  let { api, props, state, emit, service, nextTick, t, vm, i18n, watch, constants, parent } = args
  let { Quill, ImageDrop, ImageUpload, FileUpload, Modal } = args

  Object.assign(api, {
    state,
    initContent: initContent({ state, props, nextTick }),
    initQuill: initQuill({ service, emit, props, api, state, vm, ImageDrop, FileUpload, ImageUpload, Quill }),
    setToolbarTips: setToolbarTips({ t, vm }),
    setPlaceholder: setPlaceholder({ state, props }),
    getFileUploadUrl: getFileUploadUrl({ service }),
    selectionChange: selectionChange({ emit, state }),
    textChange: textChange({ emit, vm, state, Modal, t }),
    mounted: mounted({ api, props, state, i18n, watch }),
    beforeUnmount: beforeUnmount({ api, state }),
    maxLength: maxLength({ props, constants }),
    handlePaste: handlePaste({ state }),
    isDisplayOnly: isDisplayOnly({ state, props, parent, nextTick })
  })
}

const initWatch = ({ watch, props, api, state }) => {
  watch(
    () => props.modelValue,
    (val) => {
      state.content = val
      api.initContent()
    }
  )

  watch(
    () => props.content,
    (val) => {
      state.content = val
      api.initContent()
    }
  )

  watch(
    () => props.disabled,
    (param) => {
      if (state.quill) {
        state.quill.enable(!param)
      }
    }
  )

  watch(
    () => props.options.placeholder,
    () => {
      api.setPlaceholder()
    }
  )
}

export const renderless = (
  props,
  { reactive, watch, onMounted, onBeforeUnmount, computed, inject },
  { service, emit, t, nextTick, vm, i18n, constants, parent },
  { Quill, ImageDrop, ImageUpload, FileUpload, Modal }
) => {
  parent.auiForm = parent.auiForm || inject('form', null)
  const api = {}
  const state = initState({ reactive, props, computed, api, parent })
  const args = { api, props, state, emit, service, nextTick, t, vm, i18n, watch, constants, parent }

  Object.assign(args, { Quill, ImageDrop, ImageUpload, FileUpload, Modal })

  initApi(args)

  initWatch({ watch, props, api, state })
  onMounted(api.mounted)
  onBeforeUnmount(api.beforeUnmount)

  return api
}
