export interface IComponentConfig {
  /**
   * 组件示例通过多少列呈现
   */
  column: string

  /**
   * 组件责任人
   */
  owner: string

  /**
   * 是否展示在官网文档中
   */
  show: boolean

  /**
   * 是否是规范内的组件
   */
  cloud: boolean

  meta: {
    /**
     * 不推荐使用，未来会移除
     */
    deprecated: string

    /**
     * 实验性版本
     */
    experimental: string

    /**
     * 稳定版本
     */
    stable: string

    /**
     * 即将在未来三个 Minor 版本后移除
     */
    toBeRemoved: string
  }
  demos: {
    demoId: string
    name: {
      'zh-CN': string
      'en-US': string
    }
    desc: {
      'zh-CN': string
      'en-US': string
    }
    codeFiles: string[]
  }[]

  /**
   * 组件特性列表
   */
  features: {
    id: string
    name: string
    description: string

    /**
     * 当前是否支持该特性，用于记录正在开发或者计划开发的新特性
     */
    support: {
      value: boolean
    }

    /**
     * 是否是规范内的特性
     */
    cloud: {
      value: boolean

      /**
       * 有些特性并非全部在规范内，所以需要进行备注
       */
      remark: string
    }

    /**
     * 该特性涉及到哪些 API
     */
    apis: string[]

    /**
     * 该特性在哪些 Demo 中体现
     */
    demos: string[]
  }[]
}
