import { describe, expect, test, afterEach } from 'vitest'
import { setToolbarTitle } from '@opentiny/vue-renderless/fluent-editor'

const t = (key: string) => key

const createToolbar = (innerHTML: string) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = `
    <div class="ql-toolbar">
      ${innerHTML}
    </div>
    <div class="ql-container"></div>
  `
  document.body.appendChild(wrapper)

  const setTitle = setToolbarTitle({
    state: { quill: { container: wrapper.querySelector('.ql-container') } },
    t
  })

  return { wrapper, setTitle }
}

describe('fluent-editor toolbar title', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  test('should set title on individual align and checklist buttons', () => {
    const { wrapper, setTitle } = createToolbar(`
      <span class="ql-formats">
        <button class="ql-align" value=""></button>
        <button class="ql-align" value="center"></button>
        <button class="ql-align" value="right"></button>
        <button class="ql-list" value="check"></button>
      </span>
    `)

    setTitle()

    expect(wrapper.querySelector('.ql-align[value=""]')?.getAttribute('title')).toBe('ui.richText.alignPicker1')
    expect(wrapper.querySelector('.ql-align[value="center"]')?.getAttribute('title')).toBe('ui.richText.alignPicker2')
    expect(wrapper.querySelector('.ql-align[value="right"]')?.getAttribute('title')).toBe('ui.richText.alignPicker3')
    expect(wrapper.querySelector('.ql-list[value="check"]')?.getAttribute('title')).toBe('ui.richText.listCheck')
  })

  test('should set title on align picker items', () => {
    const { wrapper, setTitle } = createToolbar(`
      <span class="ql-formats">
        <span class="ql-align ql-picker">
          <span class="ql-picker-options">
            <span class="ql-picker-item"></span>
            <span class="ql-picker-item" data-value="center"></span>
            <span class="ql-picker-item" data-value="right"></span>
            <span class="ql-picker-item" data-value="justify"></span>
          </span>
        </span>
      </span>
    `)

    setTitle()

    expect(wrapper.querySelector('.ql-align.ql-picker')?.getAttribute('title')).toBe('ui.richText.align')
    expect(wrapper.querySelector('.ql-align .ql-picker-item:not([data-value])')?.getAttribute('title')).toBe(
      'ui.richText.alignPicker1'
    )
    expect(wrapper.querySelector('.ql-align .ql-picker-item[data-value="center"]')?.getAttribute('title')).toBe(
      'ui.richText.alignPicker2'
    )
    expect(wrapper.querySelector('.ql-align .ql-picker-item[data-value="right"]')?.getAttribute('title')).toBe(
      'ui.richText.alignPicker3'
    )
    expect(wrapper.querySelector('.ql-align .ql-picker-item[data-value="justify"]')?.getAttribute('title')).toBe(
      'ui.richText.alignPicker4'
    )
  })
})
