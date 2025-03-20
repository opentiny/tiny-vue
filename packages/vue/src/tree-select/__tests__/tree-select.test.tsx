import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, test, expect } from 'vitest'
import TreeSelect from '@opentiny/vue-tree-select'
import { ref, nextTick } from 'vue'

const treeOp = {
  data: [
    {
      value: 1,
      label: '一级 1',
      children: [
        {
          value: 4,
          label: '二级 1-1',
          children: [
            {
              value: 9,
              label: '三级 1-1-1'
            },
            {
              value: 10,
              label: '三级 1-1-2'
            }
          ]
        }
      ]
    },
    {
      value: 2,
      label: '一级 2',
      children: [
        {
          value: 5,
          label: '二级 2-1'
        },
        {
          value: 6,
          label: '二级 2-2'
        }
      ]
    }
  ]
}

describe('PC Mode', () => {
  const mount = mountPcMode

  test('v-model 响应式更新', async () => {
    const treeSelectValue = ref(10)
    const wrapper = mount(() => <TreeSelect treeOp={treeOp} v-model={treeSelectValue.value} />)

    await nextTick()
    expect(wrapper.find('.is-current .tiny-tree-node__label').text()).toEqual('三级 1-1-2')

    treeSelectValue.value = 9
    await nextTick()
    expect(wrapper.find('.is-current .tiny-tree-node__label').text()).toEqual('三级 1-1-1')
  })
})
