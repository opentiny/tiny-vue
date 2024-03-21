import { renderless, api } from '@opentiny/vue-renderless/skeleton-item/vue'
import { vc, useSetup, useVm, $props } from '@opentiny/react-common'
import { IconRichTextImage } from '@opentiny/react-icon'

const $constants = {}
export default function SkeletonItem(props) {
  const { _constants = $constants, modelValue, variant = 'square', size = 'medium' } = props
  const defaultProps = {
    ...$props,
    ...props,
    _constants,
    modelValue,
    variant,
    size
  }
  const { ref, current: vm, parent } = useVm()

  const { state } = useSetup({
    props: defaultProps,
    renderless,
    api,
    constants: _constants,
    vm,
    parent
  })
  return (
    <div
      ref={ref}
      className={vc([
        'tiny-skeleton-item',
        variant ? 'tiny-skeleton-item--' + variant : '',
        size && variant !== 'square' ? 'tiny-skeleton-item--' + size : '',
        state.isActive ? 'tiny-skeleton-item--active' : ''
      ])}>
      {variant === 'image' && <IconRichTextImage></IconRichTextImage>}
    </div>
  )
}
