export const renderless = (props, { inject }, { slots }) => {
  const tabs = inject('tabs', null)
  const { title, name } = props
  const item = { title, name, slotDefault: slots.default, slotTitle: slots.title, slotSetting: slots.setting }

  if (props.renderTitle) item.slotTitle = props.renderTitle

  if (props.renderSetting) item.slotSetting = props.renderSetting

  item.selected = (tabs.activeName || tabs.modelValue) === name

  tabs.addItem(item)

  return {}
}
