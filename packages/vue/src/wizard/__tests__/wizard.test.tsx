import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import Wizard from '@opentiny/vue-wizard'
import { describe, expect, test } from 'vitest'
import { reactive } from 'vue'

const dataSet = reactive([
  {
    name: '出差信息填写',
    status: 'ready'
  },
  {
    name: '项目信息填写',
    status: 'doing'
  },
  {
    name: '主管审批',
    status: 'wait'
  },
  {
    name: '权签人审批',
    status: 'wait'
  },
  {
    name: '完成申请',
    status: 'wait'
  }
])

describe('PC Mode', () => {
  const mount = mountPcMode
  // props
  test('data 设置流程图的数据', async () => {
    const wrapper = mount(() => <Wizard data={dataSet}></Wizard>)
    expect(wrapper.find('.tiny-wizard__steps-item.is-ready').exists()).toBeTruthy()
    expect(wrapper.find('.tiny-wizard__steps-item.is-doing').exists()).toBeTruthy()
  })

  // slots
  test('base 基本流程图插槽', async () => {
    const wrapper = mount(() => <Wizard data={dataSet} v-slots={{
      base: (data) => <span>{data.slotScope.status}</span>
    }}></Wizard>)
    expect(wrapper.find('.tiny-wizard__name').text()).toEqual('ready')
  })

  test.todo('base-flow 设置流程图为基本流程图模式')

  test.todo('page-guide 设置流程图为页向导流程图，配合 base-flow 属性使用')

  test.todo('vertical 设置流程图为垂直流程图')

  test.todo('time-line-flow 设置流程图为时间线流程图')

  // slots
  test.todo('stepbutton 页向导流程图按钮插槽')
})
