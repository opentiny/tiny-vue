import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import DialogSelect from '@opentiny/vue-dialog-select'
import Grid from '@opentiny/vue-grid'
import Tree from '@opentiny/vue-tree'
import { describe, expect, test } from 'vitest'

const treeData = [
  { id: 1, pid: null, label: '一级 1' },
  { id: 2, pid: null, label: '一级 2' },
  { id: 3, pid: null, label: '一级 3', isLeaf: true, children: [] },
  { id: 4, pid: 1, label: '二级 4' },
  { id: 5, pid: 1, label: '二级 5', isLeaf: true, children: [] },
  { id: 6, pid: 2, label: '二级 6', isLeaf: true, children: [] },
  { id: 7, pid: 2, label: '二级 7', isLeaf: true, children: [] },
  { id: 8, pid: 4, label: '三级 8', isLeaf: true, children: [] },
  { id: 9, pid: 4, label: '三级 9', isLeaf: true, children: [] }
]

describe('PC Mode', () => {
  const mount = mountPcMode

  test('visible', async () => {
    const wrapper = mount(DialogSelect, {
      props: {
        visible: false
      }
    })

    expect(wrapper.find('.tiny-dialog-box').isVisible()).toBeFalsy()

    await wrapper.setProps({ visible: true })

    expect(wrapper.find('.tiny-dialog-box').isVisible()).toBeTruthy()

    await wrapper.setProps({ visible: false })

    expect(wrapper.find('.tiny-dialog-box').isVisible()).toBeFalsy()
  })

  test('grid data', async () => {
    const wrapper = mount(DialogSelect, {
      props: {
        visible: true,
        gridOp: {
          columns: [{ field: 'id', title: 'ID' }]
        }
      }
    })
    expect(wrapper.findComponent(Grid).vm.data).toBeUndefined()
    const gridData = Array.from({ length: ~~(Math.random() * 10) }).map((_, i) => ({ id: i }))
    await wrapper.setProps({
      gridOp: {
        columns: [{ field: 'id', title: 'ID' }],
        data: gridData
      }
    })

    expect(wrapper.findComponent(Grid).vm.data).toStrictEqual(gridData)
  })

  test('grid multi or not', async () => {
    const wrapper = mount(DialogSelect, {
      props: {
        visible: true,
        multi: false,
        gridOp: {
          columns: [{ field: 'id', title: 'ID' }],
          data: [{ id: 1 }]
        }
      }
    })

    expect(wrapper.findComponent(Grid).vm.columns.some((item) => item.type === 'radio')).toBeTruthy()

    await wrapper.setProps({ multi: true })

    expect(wrapper.findComponent(Grid).vm.columns.some((item) => item.type === 'selection')).toBeTruthy()
  })

  test('tree multi or not', async () => {
    const wrapper = mount(DialogSelect, {
      props: {
        visible: true,
        multi: false,
        popseletor: 'tree',
        treeOp: {
          nodeKey: 'id',
          load: () => treeData
        }
      }
    })

    expect(wrapper.findComponent(Tree).vm.showRadio).toBeTruthy()

    await wrapper.setProps({ multi: true })
    expect(wrapper.findComponent(Tree).vm.showCheckbox).toBeTruthy()
  })

  test('slot', async () => {
    const geneSlot = (name: string) => {
      const el = <div>this is a {name}</div>
      const wrapper = mount(() => el)
      return { el, wrapper }
    }

    const { el: footer, wrapper: footerWrapper } = geneSlot('footer')
    const { el: title, wrapper: titleWrapper } = geneSlot('title')
    const { el: footerButtons, wrapper: footerButtonsWrapper } = geneSlot('footer-buttons')

    const wrapper = mount(DialogSelect, {
      props: {
        visible: true
      },
      slots: { title, 'footer-buttons': footerButtons }
    })

    expect(wrapper.find('.tiny-dialog-box').text()).contains(titleWrapper.text())
    expect(wrapper.find('.tiny-dialog-box').text()).contains(footerButtonsWrapper.text())

    await wrapper.setProps({ slots: { footer, footerButtons } })
    expect(wrapper.find('.tiny-dialog-box').text()).contains(footerWrapper.text())
  })
})
