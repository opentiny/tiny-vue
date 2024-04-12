type VueApi = {
  name: string
  type: string
  props: Array<{
    name: string
    type: string
    defaultValue: string
    desc: {
      'zh-CN': string
      'en-US': string
    }
    mode: Array<string>
    pcDemo?: string
    mobileDemo?: string
    mfDemo?: string
    typeAnchorName?: string
  }>
  events: Array<{
    name: string
    type: string
    defaultValue: string
    desc: {
      'zh-CN': string
      'en-US': string
    }
    mode: Array<string>
    pcDemo?: string
    mobileDemo?: string
    mfDemo: string
  }>
  methods: Array<{
    name: string
    type: string
    defaultValue: string
    desc: {
      'zh-CN': string
      'en-US': string
    }
    mode: Array<string>
    mfDemo: string
  }>
  slots: Array<{
    name: string
    defaultValue: string
    desc: {
      'zh-CN': string
      'en-US': string
    }
    mode: Array<string>
    pcDemo: string
    type?: string
    mobileDemo?: string
    mfDemo?: string
  }>
}

type ReactApi = {
  name: string
  type: string
  properties: Array<{
    name: string
    type: string
    defaultValue: string
    desc: {
      'zh-CN': string
      'en-US': string
    }
    demoId: string
  }>
  events: Array<{
    name: string
    type: string
    defaultValue: string
    desc: {
      'zh-CN': string
      'en-US': string
    }
    demoId: string
  }>
  slots: Array<{
    name: string
    type: string
    defaultValue: string
    desc: {
      'zh-CN': string
      'en-US': string
    }
    demoId: string
  }>
}

export function transformApi(vueApi: VueApi): ReactApi {
  return {
    name: vueApi.name,
    type: vueApi.type,
    // at this moment, we only migrate PC examples
    properties: vueApi.props
      .filter((v) => v.mode.includes('pc'))
      .map((v) => ({
        name: v.name,
        type: v.type,
        defaultValue: v.defaultValue,
        desc: v.desc,
        demoId: v.pcDemo || '',
      })),
    events: vueApi.events
      .filter((v) => v.mode.includes('pc'))
      .map((v) => ({
        name: v.name,
        type: v.type,
        defaultValue: v.defaultValue,
        desc: v.desc,
        demoId: v.pcDemo || '',
      })),
    slots: vueApi.slots
      .filter((v) => v.mode.includes('pc'))
      .map((v) => ({
        name: v.name,
        type: v.type || '',
        defaultValue: v.defaultValue,
        desc: v.desc,
        demoId: v.pcDemo || '',
      })),
  }
}
