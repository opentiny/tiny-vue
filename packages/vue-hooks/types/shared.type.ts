export interface ISharedRenderlessFunctionParams<T> {
  vm: any
  props: any
  slots: any
  emit: Function
  parent: any
  nextTick: Function
  watch: Function
  reactive: Function
  toRefs: Function
  onBeforeUnmount: Function
  onMounted: Function
  onDeactivated: Function
  popperVmRef: any
}
