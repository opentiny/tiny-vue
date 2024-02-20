import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { test, describe, expect } from 'vitest'
import SkeletonItem from '@opentiny/vue-skeleton-item'
import { nextTick } from 'vue'

describe('PC Mode', () => {
  const mount = mountPcMode

  test('variant', async () => {
    const wrapper = mount(() => <SkeletonItem variant="circle"></SkeletonItem>)
    await nextTick()
    expect(wrapper.classes()).toContain('tiny-skeleton-item--circle')
  })

  test('size', async () => {
    const wrapper = mount(() => <SkeletonItem variant="image" size="small"></SkeletonItem>)
    await nextTick()
    expect(wrapper.classes()).toContain('tiny-skeleton-item--small')
  })
})
