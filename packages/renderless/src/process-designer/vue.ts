import type {
  ISharedRenderlessParamUtils,
  ISharedRenderlessParamHooks,
  IProcessDesignerExpose,
  IProcessDesignerState
} from '@/types'
import type { IProcessDesignerProps } from '@/types'
import { onImportFail, onImportSuccess } from '.'

export const api = ['render', 'properties', 'state']
export const renderless = (
  props: IProcessDesignerProps,
  ctx: ISharedRenderlessParamHooks,
  utils: ISharedRenderlessParamUtils<null>,
  extend: Record<string, Function>
) => {
  const render = ctx.ref()
  const properties = ctx.ref()
  const expose = ctx.reactive<IProcessDesignerExpose>({
    modeler: null,
    eventBus: null,
    on: null,
    canvas: null
  })
  const state = ctx.reactive<IProcessDesignerState>({
    showProperties: props.showProperties
  })
  const api = {
    render,
    properties,
    expose,
    state
  }
  let keyboardService: any = null
  ctx.watch(
    () => props.showProperties,
    () => {
      state.showProperties = props.showProperties ?? false
    }
  )
  ctx.nextTick(() => {
    const { canvas, modeler, eventBus, on, importXML } = extend.useBPMN({
      container: render.value,
      propertiesPanel: {
        parent: '#properties'
      },
      additionalModules: [
        extend.BpmnPropertiesPanelModule,
        extend.BpmnPropertiesProviderModule,
        ...(props.additionalModules ?? [])
      ],
      modeler: props.modeler,
      onImportXmlSuccess: (warnings: string[]) => onImportSuccess(utils.emit, warnings),
      onImportXmlError: (err) => onImportFail(utils.emit, err),
      xmlContent: props.data,
      readonly: props.readonly
    })
    if (props.data) {
      ctx.watch(
        () => props.data,
        () => {
          importXML(props.data)
        }
      )
    }
    if (props.getData) {
      props
        .getData()
        .then((content) => {
          importXML(content)
        })
        .catch(() => {})
    }
    ctx.watch(
      () => props.keyboard,
      () => {
        try {
          // 有些modeler不会注入keyboard service,比如view
          // 获取一个不存在的service会抛出错误
          keyboardService = modeler.get('keyboard')
        } catch {
          return
        }
        if (!keyboardService) {
          return
        }
        if (!props.keyboard) {
          keyboardService.unbind()
          return
        }
        if (document) {
          keyboardService.bind(document)
        }
      },
      { immediate: true }
    )
    const propertiesPanel = !props.readonly ? modeler.get('propertiesPanel') : undefined
    ctx.watch(
      () => state.showProperties,
      (show) => {
        if (props.readonly) {
          return
        }
        if (show) {
          propertiesPanel.attachTo('#properties')
        } else {
          propertiesPanel.detach()
        }
      },
      { immediate: true }
    )
    expose.modeler = modeler
    expose.on = on
    expose.eventBus = eventBus
    expose.canvas = canvas
    utils.emit('mounted', expose)
  })
  return api
}
