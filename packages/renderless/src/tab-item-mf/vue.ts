export const renderless = (props, { inject, onBeforeUnmount, reactive, toRef, markRaw }, { slots, vm }) => {
  const tabs = inject('tabs', null)
  const { lazy } = props
  const item = reactive({
    title: toRef(props, 'title'),
    name: toRef(props, 'name'),
    slotDefault: slots.default,
    slotTitle: props.renderTitle ? toRef(props, 'renderTitle') : slots.title,
    slotSetting: props.renderSetting ? toRef(props, 'renderSetting') : slots.setting,
    lazy,
    selected: false,
    vm: markRaw(vm)
  })

  item.selected = (tabs.activeName || tabs.modelValue) === item.name

  tabs.addItem(item)

  onBeforeUnmount(() => tabs.removeItem(item.name, true))

  return {}
}
