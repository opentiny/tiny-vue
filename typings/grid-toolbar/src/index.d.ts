declare const _default: import('vue').DefineComponent<
  {
    id: StringConstructor
    loading: {
      type: BooleanConstructor
      default: boolean
    }
    resizable: {
      type: (ObjectConstructor | BooleanConstructor)[]
      default: () => any
    }
    refresh: {
      type: (ObjectConstructor | BooleanConstructor)[]
      default: () => any
    }
    setting: {
      type: (ObjectConstructor | BooleanConstructor)[]
      default: () => any
    }
    fullScreen: {
      type: BooleanConstructor
      default: boolean
    }
    buttons: {
      type: ArrayConstructor
      default: () => any
    }
    size: StringConstructor
    data: ArrayConstructor
    customs: ArrayConstructor
    beforeOpenFullScreen: FunctionConstructor
    beforeCloseFullScreen: FunctionConstructor
  },
  {
    slots: Readonly<{
      [name: string]: import('vue').Slot | undefined
    }>
    tableListeners: any
  },
  {
    table: null
    isRefresh: boolean
    tableFullColumn: never[]
    initSettings: {
      pageSizes: never[]
      pageSize: number
      sortType: string
      showIndex: boolean
      multipleHistory: {
        tableMaxHeight: string
        showTitle: boolean
        title: string
        showSave: boolean
        saveDisabled: boolean
        saveText: string
        labelText: string
        selectPlaceholder: string
        selectDisabled: boolean
        showApply: boolean
        applyDisabled: boolean
        applyTitle: string
        applyIcon: null
        showEdit: boolean
        editDisabled: boolean
        editTitle: string
        editIcon: null
        showDel: boolean
        delDisabled: boolean
        delTitle: string
        delIcon: null
        storageKey: string
        remoteMethod: null
        userKey: string
        remoteSelectedMethod: null
      }
    }
    settingStore: {
      visible: boolean
      customVisible: boolean
    }
    isFull: boolean
  },
  {
    vSize(): any
    refreshOpts(): any
    resizableOpts(): any
    settingOpts(): any
  },
  {
    updateConf(): void
    closeSetting(): void
    openSetting(): void
    orderSetting(): any
    loadColWidth(): {} | undefined
    loadStorage(): void
    updateColumn(fullColumn: any): void
    updateCustoms(customs: any): void
    getStorageMap(key: any): any
    saveCustomSettings(columnConfigs: any): Promise<void>
    savePagerSettings(settingConfigs: any): Promise<void>
    saveColumnHide(): Promise<void>
    saveColumnWidth(isReset: any): Promise<void>
    resetResizable(): void
    updateResizable(isReset: any): any
    updateSetting(): Promise<void>
    applySettings({ columns, pageSize }: { columns: any; pageSize: any }): void
    handleSaveSettings(settingConfigs: any): void
    handleGlobalMousedownEvent(event: any): void
    handleGlobalBlurEvent(): void
    handleClickSettingEvent(): void
    handleClickCustomEvent(): void
    handleMouseenterSettingEvent(): void
    handleMouseleaveSettingEvent(): void
    handleWrapperMouseenterEvent(): void
    handleWrapperMouseleaveEvent(): void
    refreshEvent(): void
    btnEvent(event: any, item: any): void
    fullscreenEvent(): void
  },
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  ('button-click' | 'on-before-move')[],
  'button-click' | 'on-before-move',
  import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps,
  Readonly<
    import('vue').ExtractPropTypes<{
      id: StringConstructor
      loading: {
        type: BooleanConstructor
        default: boolean
      }
      resizable: {
        type: (ObjectConstructor | BooleanConstructor)[]
        default: () => any
      }
      refresh: {
        type: (ObjectConstructor | BooleanConstructor)[]
        default: () => any
      }
      setting: {
        type: (ObjectConstructor | BooleanConstructor)[]
        default: () => any
      }
      fullScreen: {
        type: BooleanConstructor
        default: boolean
      }
      buttons: {
        type: ArrayConstructor
        default: () => any
      }
      size: StringConstructor
      data: ArrayConstructor
      customs: ArrayConstructor
      beforeOpenFullScreen: FunctionConstructor
      beforeCloseFullScreen: FunctionConstructor
    }>
  > & {
    'onButton-click'?: ((...args: any[]) => any) | undefined
    'onOn-before-move'?: ((...args: any[]) => any) | undefined
  },
  {
    setting: boolean | Record<string, any>
    buttons: unknown[]
    loading: boolean
    resizable: boolean | Record<string, any>
    refresh: boolean | Record<string, any>
    fullScreen: boolean
  }
>
export default _default
