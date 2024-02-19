/** 该文件以Vue3版本的适配器为依据，编写了本声明，本文涉及以下术语：
 * instance     :  即一个Vue3组件实例， conext, attrs，emit等很多属性
 * vm，parentVm :  适配器封装的一个数据结构，具有大量$属性，以及组件上其它属性
 * emitter      :  适配器中，自己封装的一个EventBus对象，和instance.emit没关系。 vm.$emit 会同时触发 instance.emit和instance.$emitter。
 * subTree      :  instance.subTree 是组件当前的vnode描述
 */

// 使用vue3的声明，来代表hooks中所有函数的声明
import type * as hooks from 'vue'

/** hooks 变量: renderless的第二个参数 */
export type ISharedRenderlessParamHooks = typeof hooks

/** utils变量: renderless的第三个参数  */
export interface ISharedRenderlessParamUtils<CT = never> {
  /** 当前使用的框架 */
  framework: 'vue3' | 'vue2' | 'vue2.7'
  /** 组件前缀，默认为 Tiny  */
  $prefix: string

  /** 所有规范的配置 */
  globalDesignConfig: {
    components?: IComponentDesignConfig
    name?: string
    version?: string
  }
  /** 当前组件的规范配置 */
  designConfig: IComponentDesignConfig

  /** app的root上的i18n对象，renderless基本没有使用它 */
  i18n: any
  /** 组件内国际化，常用函数 */
  t: (path: string, options?: any) => string

  /** 组件模式。
   * @mark 等同于 vm.$mode, 取值为：pc  mobile  mobile-first */
  mode: 'pc' | 'mobile' | 'mobile-first'
  /** 是否为 mobile */
  isMobileMode: boolean
  /** 是否为 pc */
  isPCMode: boolean
  /** 是否为mobile-first */
  isMobileFirstMode: boolean

  /** vue组件实例的context.attrs */
  attrs: any
  /** 返回组件props._constants */
  constants: CT
  /** vue的内置nextTick， 其实可以从第二参 hooks中获取, 还可以通过当前vm.$nextTick来获取 */
  nextTick: typeof hooks.nextTick
  /** parentVm */
  parent: ITinyVm<CT>
  /** 当前vm */
  vm: ITinyVm<CT>
  /** 第一次mount加载后的所有refs，不会更新！ ⭐要避免使用 */
  refs: Record<string, any>
  /** 组件初化时的页面路由，不会更新！
   * @mark ⭐要避免使用, 请使用vm.$refs */
  route: any
  /** 当前的router实例。 从app的根上读取 */
  router: any

  /** 从app的根上读取: root?.$service,  用户必须引用服务适配器的包， 并传入app后，才有该变量 */
  service: any
  /** 调用从app的根上$getService:  root?.$getService(vm) */
  getService: any

  /** 返回 instance.slots。 vue2,vue3的这2个属性是同一个引用： scopedSlots===slots。  */
  slots: Record<string, Function>
  /** 返回 instance.slots */
  scopedSlots: Record<string, Function>

  /** 向实例的 subTree.children 深度遍历发送广播消息。 如果component找到了触发component.emit(eventName, params)
   * @param componentName 组件名
   */
  broadcast: (componentName: string, eventName: string, params?: any) => void
  /** 向实例的 parent开始查找componentName， 找到匹配第一个组件， 触发component.emit(eventName, params) */
  dispatch: (componentName: string, eventName: string, params?: any) => void
  /** 向实例的subTree 遍历。
   * 1、handler 是函数： handler入参{level,vm,el,options,isLevel1}. 给每个子节点遍历调用函数。
   * 2、handler 是非函数： 直接通过 instance.subTree 来生成一个同等树状的vm数据。
   * @mark ⭐全局有4个组件使用到`handler是函数`的用法 ，用于遍历子节点，将符合条件的信息收集到一个数组中。
   */
  childrenHandler: (handler?: (node: { level: number; vm: ITinyVm<CT>; el; options; isLevel1 }) => void) => void | any[]
  /** 向实例的 parent 遍历。
   * 1、handler 是函数： handler入参{level,vm,el,options}. 遍历父节点。若handler处理某个节点时，返回true，则停止！
   * 2、handler 是非函数： 直接返回{level,vm,el,options} 的数据体。
   * @mark ⭐全局未有使用该函数
   */
  parentHandler: (handler?: () => boolean) => void | any

  /** 给 instance.parent 的ctx 赋值,同时给parentVm 赋值。 适配器的内部方法⭐要避免使用 */
  setParentAttribute: ({ name, value }) => void
  /** 给 vm 和 instance.ctx 同时添加属性。
   * @param props Object.defineProperties的第2参, 格式：{ property1: {value: 42,writable: true},property2: {...} }
   */
  defineInstanceProperties: (props: PropertyDescriptorMap & ThisType<any>) => void
  /** 给parentVm 添加属性。 */
  defineParentInstanceProperties: (props: PropertyDescriptorMap & ThisType<any>) => void
  /** 返回 context.emit */
  emit: (event, ...args) => void
  /** Tiny 适配器中，自行封装的一个 EventBus模型的工厂函数。⭐每次调用才返回一个新的模型对象。
   * @mark vm中，会给instance添加一个$emitter=emitter() ,就是该函数返回的模型。 vm中的$on, $off,$once 都是该模型的方法。
   * @mark ⭐所以不要直接使用该函数。
   */
  emitter: () => {
    emit: (eventname: string) => void
    on: (eventname: string, callback: Function, once?: boolean) => void
    off: (eventname: string, callback: Function) => void
    once: (eventname: string, callback: Function) => void
  }
  /** 合并 tailwind 类 */
  mergeClass: (...cssClasses) => string
}

/** vue.ts的一个混合上下文，也是index.ts 文件中二层函数的入参混合体。 */
export type ISharedRenderlessFunctionParams<CT = null> = {
  api: object
  props: object
  state: object
} & ISharedRenderlessParamHooks &
  ISharedRenderlessParamUtils<CT>

/** 单个组件的规范的配置 */
interface IComponentDesignConfig {
  icons?: Record<string, any>
  renderless?: (
    props: any,
    hooks: ISharedRenderlessParamHooks,
    utils: ISharedRenderlessParamUtils<any>,
    sdk: any
  ) => any
  [otherKey: string]: any
}

/** Tiny-Vue的Adapter 内部为组件创建的Vm */
export interface ITinyVm<CT = never> {
  /** 从instance.attrs上， 过滤出所有的非函数的attrs */
  $attrs: Record<string, any>
  /** 从instance.attrs上， 过滤出所有的函数的attrs, 并对大驼峰属性名转化为下划线名 */
  $listeners: Record<string, Function>
  /** 返回instance.subTree的同等树状的vm数据 */
  $children: any[]
  /** 返回 instance.props._constants */
  $constants: CT
  /** 返回 instance.vnode.el */
  $el: HTMLElement
  /** 返回 instance._tiny_mode */
  $mode: 'pc' | 'mobile' | 'mobile-first'
  /** 即 hooks.nextTick */
  $nextTick: typeof hooks.nextTick
  /** 自动触发 instance.emit 和 instance.$emitter 两处地方 */
  $emit: (...args) => void
  /** instance.$emitter.off, 不传任何参数则是移除所有事件 */
  $off: (eventname?: string, callback?: Function) => void
  /** instance.$emitter.on */
  $on: (eventname: string, callback: Function) => void
  /** instance.$emitter.once */
  $once: (eventname: string, callback: Function) => void
  /** 返回 instance.type.componentName。
   * @mark instance.type 可能是字符串，也可能是组件类，所以只有组件类的时候，才能返回组件的真实名字 */
  $options: { componentName: string | undefined }
  /** 返回 instance.parent  */
  $parent: hooks.ComponentPublicInstance
  /** 返回 instance.refs,
   * @mark ⭐ 尽量使用这个，每次都会是最新的refs */
  $refs: Record<string, any>
  /** 返回 instance.slots */
  $slots: Record<string, Function>
  /** 返回 instance.slots */
  $scopedSlots: Record<string, Function>

  /** 给target赋值。 vue2是调用instance.$set
   * @mark vue3是响应数据，直接转为 target[propertyName] = value。
   * @mark vue2 可能有数据修改不触发响应，就要调用$set去修改值。
   * @whenUse ⭐ Vue2组件中修改数据不触发响应时，要使用该$set. instance.$set
   */
  $set: (target, propertyName, value) => void
  /** 返回 props.tiny_renderless */
  $renderless: Function
  /** 返回 props.tiny_template */
  $template: any

  /** 适配器或组件内，可能会赋值很多其它属性 */
  [otherProps: string]: any
}
