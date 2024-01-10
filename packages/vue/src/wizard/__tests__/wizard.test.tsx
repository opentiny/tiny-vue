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

const timeLineDataSet = reactive([
  {
    name: '提交',
    status: 'ready',
    imgUrl: `https://res.hc-cdn.com/tiny-vue-web-doc/2.1.47.20231217150537/static/images/fruit.jpg`,
    users: 'xiaohong',
    userName: '小红',
    roleNumber: '123456890',
    date: '2013-12-11 20:50',
    values: [
      { text: '部门', value: '某部门' },
      { text: '邮件', value: 'example@example.com' },
      { text: '手机', value: '1234567890' }
    ]
  },
  {
    name: '转他人处理',
    status: 'ready',
    imgUrl: `https://res.hc-cdn.com/tiny-vue-web-doc/2.1.47.20231217150537/static/images/fruit.jpg`,
    users: 'xiaohu',
    userName: '小胡',
    roleNumber: ' 123456890',
    date: '2013-12-11 21:50',
    values: [
      { text: '部门', value: '某部门' },
      { text: '邮件', value: 'example@example.com' },
      { text: '手机', value: '1234567890' }
    ]
  },
  {
    name: '主管审批',
    status: 'ready',
    imgUrl: `https://res.hc-cdn.com/tiny-vue-web-doc/2.1.47.20231217150537/static/images/fruit.jpg`,
    users: 'xiaozhang',
    userName: '小张',
    roleNumber: '123456890',
    date: '2013-12-14 20:50',
    values: [
      { text: '部门', value: '某部门' },
      { text: '邮件', value: 'example@example.com' },
      { text: '手机', value: '1234567890' }
    ]
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
    const wrapper = mount(() => (
      <Wizard
        data={dataSet}
        v-slots={{
          base: (data) => <span>{data.slotScope.status}</span>
        }}></Wizard>
    ))
    expect(wrapper.find('.tiny-wizard__name').text()).toEqual('ready')
  })

  test('base-flow 基本流程图模式', async () => {
    const wrapper = mount(() => <Wizard data={dataSet} base-flow></Wizard>)
    expect(wrapper.find('.tiny-wizard__nomarl').exists()).toBeTruthy()
  })

  test('page-guide 页向导流程图', async () => {
    const wrapper = mount(() => <Wizard data={dataSet} page-guide></Wizard>)
    expect(wrapper.find('.tiny-wizard__nomarl').exists()).toBeTruthy()
    expect(wrapper.find('.tiny-wizard__button').exists()).toBeTruthy()
  })

  test('vertical 垂直流程图', async () => {
    const wrapper = mount(() => <Wizard data={dataSet} vertical></Wizard>)
    expect(wrapper.find('.tiny-wizard__vertical').exists()).toBeTruthy()
  })

  test('time-line-flow 时间线流程图', async () => {
    const wrapper = mount(() => <Wizard data={timeLineDataSet} vertical time-line-flow></Wizard>)
    expect(wrapper.find('.tiny-wizard__vertical').exists()).toBeTruthy()
    expect(wrapper.find('.is-time-line-flow').exists()).toBeTruthy()
  })

  // slots
  test('stepbutton 页向导流程图按钮插槽', async () => {
    const wrapper = mount(() => (
      <Wizard data={dataSet} page-guide>
        {{
          stepbutton: () => <button id="step_button">自定义按钮</button>
        }}
      </Wizard>
    ))
    expect(wrapper.find('#step_button').text()).toEqual('自定义按钮')
  })
})
