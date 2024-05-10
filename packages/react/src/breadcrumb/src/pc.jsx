import { renderless, api } from '@opentiny/vue-renderless/breadcrumb/vue'
import BreadcrumbItem from '@opentiny/react-breadcrumb-item'
import { useSetup, useVm, Slot, $props } from '@opentiny/react-common'
import '@opentiny/vue-theme/breadcrumb/index.less'

export const $constants = {
  EVENT_NAME: {
    breadcrumbItemSelect: 'breadcrumbItemSelect'
  }
}
export default function (props) {
  const { _constants = $constants, separator = '>', separatorIcon, textField = 'label', options = [] } = props
  const defaultProps = {
    ...$props,
    _constants,
    separator,
    separatorIcon,
    textField,
    options
  }
  const { ref, parent, current: vm } = useVm()
  const { provide } = useSetup({
    props: defaultProps,
    renderless,
    api,
    vm,
    parent,
    constants: _constants
  })
  provide('breadcrumb', defaultProps)
  return (
    <div className="tiny-breadcrumb" aria-label="Breadcrumb" role="navigation" ref={ref}>
      <Slot slots={props.slots} parent_children={props.children}>
        {options.map((item, index) => (
          <BreadcrumbItem
            option={item}
            label={item[textField]}
            to={item.to}
            replace={item.replace}
            key={index}></BreadcrumbItem>
        ))}
      </Slot>
    </div>
  )
}
