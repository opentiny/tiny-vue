import { renderless, api } from '@opentiny/vue-renderless/skeleton/vue'
import { If, Slot, useSetup, useVm, $props } from '@opentiny/react-common'
import SkeletonItem from '@opentiny/react-skeleton-item'

const $constants = {}
export default function Skeleton(props) {
  const {
    _constants = $constants,
    modelValue,
    loading = true,
    rows = 3,
    avatar = false,
    rowsWidth = [],
    active = true
  } = props
  const defaultProps = {
    ...$props,
    ...props,
    $constants,
    modelValue,
    loading,
    rows,
    avatar,
    rowsWidth,
    active
  }
  const { ref, current: vm, parent } = useVm()

  const { toPxStyle } = useSetup({
    props: defaultProps,
    renderless,
    api,
    constants: _constants,
    vm,
    parent
  })
  return (
    <div className="tiny-skeleton" ref={ref}>
      <If v-if={loading}>
        <Slot name="placeholder" slots={props.slots}>
          <div className="tiny-skeleton__article">
            {avatar && <SkeletonItem variant="circle" className="tiny-skeleton__avatar" v-if="avatar"></SkeletonItem>}
            <div className="tiny-skeleton__section">
              <SkeletonItem className="tiny-skeleton-item__title"></SkeletonItem>
              <div className="tiny-skeleton-item__rows">
                {Array(rows)
                  .fill(1)
                  .map((_, index) => index + 1)
                  .map((item, index) => (
                    <SkeletonItem key={item} style={{ width: toPxStyle(rowsWidth[index]) }}></SkeletonItem>
                  ))}
              </div>
            </div>
          </div>
        </Slot>
      </If>
      <If v-if={!loading}>
        <Slot slots={props.slots} parent-children={props.children}></Slot>
      </If>
    </div>
  )
}
