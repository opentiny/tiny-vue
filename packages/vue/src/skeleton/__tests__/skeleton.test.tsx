import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { test, describe, expect } from 'vitest'
import Skeleton from '@opentiny/vue-skeleton'
import { nextTick } from 'vue'

describe('PC Mode', () => {
  const mount = mountPcMode

  test('base usage', () => {
    const wrapper = mount(() => <Skeleton></Skeleton>)
    expect(wrapper.exists()).toBe(true)
  })

  test('active', async () => {
    const wrapper = mount(() => <Skeleton></Skeleton>)
    await nextTick()
    expect(wrapper.find('.tiny-skeleton-item').classes()).toContain('tiny-skeleton-item--active')
  })

  test('loading & rows', async () => {
    const wrapper = mount(() => <Skeleton loading rows={3}></Skeleton>)
    await nextTick()
    expect(wrapper.find('.tiny-skeleton').exists()).toBe(true)
    expect(wrapper.findAll('.tiny-skeleton-item').length).toBe(4)
  })

  test('slot', async () => {
    const wrapper = mount(() => (
      <Skeleton
        v-slots={{
          placeholder: () => <div class="tiny-placeholder">加载中</div>
        }}></Skeleton>
    ))
    await nextTick()
    expect(wrapper.find('.tiny-placeholder').exists()).toBe(true)
  })

  test('avatar', async () => {
    const wrapper = mount(() => <Skeleton avatar></Skeleton>)
    await nextTick()
    expect(wrapper.find('.tiny-skeleton__avatar').exists()).toBe(true)
  })

  test('rows-width', async () => {
    const widths = ['200px', '100px', '50px']
    const wrapper = mount(<Skeleton></Skeleton>, {
      props: {
        'rows-width': widths
      }
    })
    await nextTick()
    const skeletonItems = wrapper.findAll('.tiny-skeleton-item')

    expect(skeletonItems).toHaveLength(4)

    skeletonItems.shift()

    skeletonItems.forEach((item, index) => {
      const computedStyles = getComputedStyle(item.element)
      const width = computedStyles.width

      expect(width).toBe(widths[index])
    })
  })
})
