import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import { PopUpload } from '@opentiny/vue'
import { nextTick, ref } from 'vue'
import { randomValues } from './common/globalConfig'

randomValues(global)

describe('pop-upload', () => {
  test('size', async () => {
    const wrapper = mount(() => <PopUpload action="''" size="medium"></PopUpload>)
    expect(wrapper.find('.tiny-button--medium').exists()).toBe(true)
  })

  test('disabled', async () => {
    const wrapper = mount(() => <PopUpload action="''" disabled={true}></PopUpload>)
    expect(wrapper.find('.is-disabled').exists()).toBe(true)
  })
})
