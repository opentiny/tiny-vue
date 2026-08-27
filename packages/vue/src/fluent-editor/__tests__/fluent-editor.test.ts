import { describe, expect, test, afterEach, vi } from 'vitest'
import { setToolbarTitle, syncTableControlPanelPosition } from '@opentiny/vue-renderless/fluent-editor'

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
        <button class="ql-align"></button>
        <button class="ql-align" value="center"></button>
        <button class="ql-align" value="right"></button>
        <button class="ql-list" value="check"></button>
      </span>
    `)

    setTitle()

    expect(wrapper.querySelector('.ql-align[value=""]')?.getAttribute('title')).toBe('ui.richText.alignPicker1')
    expect(wrapper.querySelector('.ql-align:not([value])')?.getAttribute('title')).toBe('ui.richText.alignPicker1')
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

const mockRect = (top: number, height = 80) =>
  ({
    top,
    left: 0,
    bottom: top + height,
    right: 200,
    width: 200,
    height,
    x: 0,
    y: top,
    toJSON: () => ({})
  }) as DOMRect

const createTableEditor = () => {
  const container = document.createElement('div')
  container.className = 'ql-container'
  container.style.position = 'relative'
  Object.defineProperty(container, 'clientHeight', { configurable: true, value: 400 })
  container.innerHTML = `
    <div class="ql-editor"></div>
    <div class="qlbt-modules-container">
      <div class="qlbt-table-control-panel" style="position:absolute;top:0;">
        <div class="qlbt-row-control-panel"></div>
      </div>
      <div class="qlbt-table-scroll-bar-panel" style="position:absolute;top:200px;display:block;"></div>
    </div>
  `
  const tableWrapper = document.createElement('div')
  tableWrapper.className = 'quill-better-table-wrapper'
  const table = document.createElement('table')
  table.className = 'quill-better-table'
  tableWrapper.appendChild(table)
  container.querySelector('.ql-editor')!.appendChild(tableWrapper)
  document.body.appendChild(container)

  const panel = container.querySelector('.qlbt-table-control-panel') as HTMLElement
  const scrollBarPanel = container.querySelector('.qlbt-table-scroll-bar-panel') as HTMLElement
  container.getBoundingClientRect = () => mockRect(100, 400)
  tableWrapper.getBoundingClientRect = () => mockRect(160)
  table.getBoundingClientRect = () => mockRect(160)

  const betterTable = {
    columnTool: {
      table,
      domNode: panel
    },
    tableScrollBar: {
      table,
      domNode: scrollBarPanel
    },
    tableSelection: {
      selectedTds: [] as { domNode: HTMLElement }[],
      refreshHelpLinesPosition: vi.fn()
    }
  }

  const quill = {
    root: container.querySelector('.ql-editor'),
    getModule: () => betterTable
  }

  return { container, panel, scrollBarPanel, table, tableWrapper, quill }
}

describe('fluent-editor table control panel scroll', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  test('should keep row control panel aligned with table after content area scrolls', () => {
    const { panel, tableWrapper, quill } = createTableEditor()

    syncTableControlPanelPosition(quill)

    expect(panel.style.top).toBe('35px')
    expect(panel.style.marginTop).toBe('0px')

    tableWrapper.getBoundingClientRect = () => mockRect(70)
    syncTableControlPanelPosition(quill)

    expect(panel.style.top).toBe('-55px')
    expect(panel.style.marginTop).toBe('0px')
  })

  test('should include container scrollTop when the editor container is the scroller', () => {
    const { container, panel, quill } = createTableEditor()
    Object.defineProperty(container, 'scrollTop', { configurable: true, value: 40 })

    syncTableControlPanelPosition(quill)

    expect(panel.style.top).toBe('75px')
  })

  test('should move table scroll bar with the table when content area scrolls', () => {
    const { scrollBarPanel, table, quill } = createTableEditor()

    syncTableControlPanelPosition(quill)

    expect(scrollBarPanel.style.display).toBe('block')
    expect(scrollBarPanel.style.top).toBe('139px')
    expect(scrollBarPanel.style.marginTop).toBe('0px')

    table.getBoundingClientRect = () => mockRect(70)
    syncTableControlPanelPosition(quill)

    expect(scrollBarPanel.style.top).toBe('49px')
  })

  test('should hide table scroll bar when the table is scrolled out of view', () => {
    const { scrollBarPanel, table, quill } = createTableEditor()

    table.getBoundingClientRect = () => mockRect(10)
    syncTableControlPanelPosition(quill)

    expect(scrollBarPanel.style.display).toBe('none')
  })

  test('should move selected cell border with the table when content area scrolls', () => {
    const { quill } = createTableEditor()
    const tableSelection = quill.getModule().tableSelection
    tableSelection.selectedTds = [{ domNode: document.createElement('td') }]

    syncTableControlPanelPosition(quill)

    expect(tableSelection.refreshHelpLinesPosition).toHaveBeenCalledTimes(1)
  })

  test('should not refresh selection border when no cell is selected', () => {
    const { quill } = createTableEditor()
    const tableSelection = quill.getModule().tableSelection

    syncTableControlPanelPosition(quill)

    expect(tableSelection.refreshHelpLinesPosition).not.toHaveBeenCalled()
  })

  test('should still sync scroll bar when column tool node is missing', () => {
    const { scrollBarPanel, quill } = createTableEditor()
    quill.getModule().columnTool.domNode = null

    syncTableControlPanelPosition(quill)

    expect(scrollBarPanel.style.display).toBe('block')
    expect(scrollBarPanel.style.top).toBe('139px')
  })
})
