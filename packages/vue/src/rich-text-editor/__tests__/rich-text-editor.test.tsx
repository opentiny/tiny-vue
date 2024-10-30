import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test, vi } from 'vitest'
import RichTextEditor from '@opentiny/vue-rich-text-editor'

describe('PC Mode', () => {
  const mount = mountPcMode

  test('value', async () => {
    const text = 'Winter is coming'
    const wrapper = mount(() => <RichTextEditor modelValue={text} />)
    expect(wrapper.find('.tiny-rich-text-editor__container').exists()).toBe(true)
  })

  test('placeholder', async () => {
    const placeholderText = 'placeholder test'
    const wrapper = mount(() => <RichTextEditor placeholder={placeholderText} />)
    expect(wrapper.find('div .tiptap.ProseMirror').attributes()['data-placeholder']).toBe(placeholderText)
  })

  test('customToolBar', async () => {
    const customToolBar = ['bold', 'italic']
    const wrapper = mount(() => <RichTextEditor customToolBar={customToolBar} />)
    expect(wrapper.findAll('div .tiny-toolbar-menu__view').length).toBe(customToolBar.length)
  })

  test('collaboration', async () => {
    const wrapper = mount(() => <RichTextEditor collaboration />)
    expect(wrapper.findAll('div .tiny-collaboration-cursor__caret').length).not.toBe(0)
  })
})
