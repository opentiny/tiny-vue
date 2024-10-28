import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test, vi } from 'vitest'
import RichTextEditor from '@opentiny/vue-rich-text-editor'

describe('PC Mode', () => {
  const mount = mountPcMode

  // TODO
  test('value', async () => {
    const text = 'Winter is coming'
    const wrapper = mount(() => <RichTextEditor modelValue={text} />)
    expect(wrapper.find('.tiny-rich-text-editor__container').exists()).toBe(true)
  })
})
