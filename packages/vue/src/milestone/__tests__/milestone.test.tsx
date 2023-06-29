import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import Milestone from '@opentiny/vue-milestone'
import { describe, expect, test, vi } from 'vitest'
import { reactive } from 'vue'

const statusMap = reactive({
  // 对应下面status 显示的背景色样式（可以是旗，可以是步骤条）
  completed: 'var(--ti-common-color-line-active)',
  doing: '#7ED321',
  back: '#f5222d',
  end: '#faad14',
  cancel: '#d9d9d9'
})

const milestoneData = reactive([
  {
    name: 'POR1',
    time: '2018-9-7',
    status: 'done',
    flags: [
      {
        status: 'done',
        name: 'test1',
        content: '已完成'
      }
    ]
  },
  {
    name: 'POR2',
    time: '2018-9-8',
    status: 'done',
    flags: [
      {
        status: 'back',
        content: '引导用户按照流程完成任务'
      }
    ]
  },
  { name: 'POR3', time: '2018-9-10', status: 'doing', content: null },
  {
    name: 'POR4',
    time: '2018-9-9',
    status: 'cancel',
    flags: [
      {
        status: 'back',
        content: '欢迎使用vui',
        name: 'test7'
      },
      {
        status: 'doing',
        content: 'test8'
      }
    ]
  },
  { name: 'POR5', time: '2018-9-11', status: 'back' },
  {
    name: 'POR6',
    time: '2018-9-9',
    status: 'end',
    flags: [
      {
        status: 'done',
        content: 'test6'
      }
    ]
  }
])

describe('PC Mode', () => {
  const mount = mountPcMode
  // props
  test('completed-field 设置里程碑完成状态对应的取值', async () => {
    const wrapper = mount(() =>
      <Milestone data={milestoneData} milestones-status={statusMap} completed-field='done'></Milestone>)
    expect(wrapper.find('.node-status-done').exists()).toBeTruthy()
  })

  // slot
  test('top 节点上方内容', async () => {
    const wrapper = mount(() =>
      <Milestone data={milestoneData} milestones-status={statusMap} v-slots={{
        top: (data) => (<span style="margin-left: 50px">{ data.slotScope.status }</span>)
      }}></Milestone>)
    expect(wrapper.find('.tiny-milestone__node > span').text()).toBe('done')
  })

  // events
  test('flag-click', async () => {
    const flagClick = vi.fn()
    const wrapper = mount(() =>
      <Milestone data={milestoneData} milestones-status={statusMap} onFlagClick={flagClick}></Milestone>)
    await wrapper.find('.tiny-milestone__flag-content').trigger('click')
    expect(flagClick).toBeCalled()
  })

  // props
  test.todo('data 设置步骤条的数据; 设置步骤条的数据')

  test.todo('flag-before 设置里程碑上活动即旗子上的数据从前面还是后面节点上获取，默认为 false 取后面节点上的数据。')

  test.todo('flag-content-field 设置节点旗子数据中描述对应的字段名，默认为 "content"')

  test.todo('flag-status-field 设置节点旗子数据中状态对应的字段名，默认为 "status"')

  test.todo('flag-field 设置节点信息中旗子数据所在字段名，默认为 "flags"')

  test.todo('flag-name-field 设置节点旗子数据中名称对应的字段名，默认为 "name"')

  test.todo('line-style 在里程碑模式下，设置线条颜色取值模式')

  test.todo('milestones-status 定义里程碑的状态与颜色对应关系，颜色取值必需为 16进制 如：{completed: "#1890FF"}')

  test.todo('name-field 设置节点信息中名称对应的字段名，默认为 "name"')

  test.todo('show-number 设置未完成的状态是否显示序号，默认为 true')

  test.todo('solid 在里程碑模式下，设置已经完成节点显示为实心，且光晕不透明，默认为 false')

  test.todo('space 设置步骤条的宽度。')

  test.todo('start 设置步骤条序号起始值，默认为 -1 。')

  test.todo('status-field 设置数据状态对应的字段名，默认为 "status"')

  test.todo('time-field 设置节点时间信息对应的字段名，默认为 "time"')

  // slots

  test.todo('flag 旗帜内容')

  test.todo('bottom 节点下方内容')

  test.todo('icon 节点图标')

  // events
  test.todo('click 节点的点击事件，参数（index:节点索引, node：节点数据信息）')

  test.todo('flagclick [deprecated v3.5.0废弃，v3.17.0移除；移除原因：命名规范，建议使用flag-click代替]')
})
