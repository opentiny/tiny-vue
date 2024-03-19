import { renderless, api } from '@opentiny/vue-renderless/time-line/vue'
import { useSetup, useVm, $props, vc, Slot } from '@opentiny/react-common'
import '@opentiny/vue-theme/steps/index.less'
import { $constants } from './index'
import TinyTimelineItem from '@opentiny/react-timeline-item'

export default function TimeLine(props) {
  const {
    vertical = false,
    horizontal = true,
    showNumber = true,
    nameField = 'name',
    timeField = 'time',
    start = 1,
    data = [],
    space = '',
    active = -1,
    reverse = false,
    showStatus = false,
    size,
    textPosition,
    showDivider,
    onlyNumber = false,
    lineWidth = '',
    shape = 'circle',
    _constants = $constants
  } = props
  const defaultProps = {
    ...$props,
    ...props,
    vertical,
    horizontal,
    showNumber,
    nameField,
    timeField,
    start,
    data,
    space,
    active,
    reverse,
    showStatus,
    size,
    textPosition,
    showDivider,
    onlyNumber,
    lineWidth,
    shape,
    _constants
  }
  const { ref, parent, current: vm } = useVm()

  const { state, handleClick } = useSetup({
    props: defaultProps,
    renderless,
    constants: _constants,
    api,
    vm,
    parent
  })
  const listeners = {
    click(index, node) {
      handleClick({ index, node })
    }
  }
  if (defaultProps.children?.length) {
    const children = []
    defaultProps.children.forEach((item, index, arr) => {
      const data = {}
      for (const key in item) {
        if (key === 'props') {
          data.props = { ...item[key] }
          if (data.props.node) {
            data.props.node.index = data.props.node.index || index
          }
          data.props.nodeLength = arr.length
        } else if (typeof item[key] === 'object') {
          data[key] = { ...item[key] }
        } else {
          data[key] = item[key]
        }
      }
      if (props.slots) {
        data.props.slots = props.slots
      }
      children.push(data)
    })
    defaultProps.children = children
  }
  return (
    <div
      ref={ref}
      className={vc([
        'tiny-timeline tiny-steps',
        { 'is-horizontal': horizontal && !vertical, 'tiny-steps--mini': size === 'mini' }
      ])}>
      <div className={vc([state.computedWrapperClass])}>
        <Slot slots={defaultProps.slots} parent_children={defaultProps.children}>
          {state.nodes.map((node, index) => (
            <TinyTimelineItem
              key={index}
              node={node}
              space={space}
              line-width={lineWidth}
              shape={shape}
              listeners={listeners}
              slots={defaultProps.slots}></TinyTimelineItem>
          ))}
        </Slot>
      </div>
      {textPosition === 'right' && showDivider && <div className="tiny-steps__bottom-divider" />}
    </div>
  )
}
