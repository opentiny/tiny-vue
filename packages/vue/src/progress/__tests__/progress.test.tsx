import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import Progress from '@opentiny/vue-progress'
import { describe, expect, test } from 'vitest'

describe('PC Mode', () => {
  const mount = mountPcMode
  // props
  test('percentage 百分比', async () => {
    const wrapper = mount(() => <Progress class="progress" percentage={50}></Progress>)
    const tinyProgress = wrapper.findComponent({ name: 'TinyProgress' })
    expect(wrapper.find('.tiny-progress-bar__inner').exists()).toBeTruthy()
    expect(tinyProgress.vm.percentage).toEqual(50)
  })

  test.todo('type 进度条类型;该属性的可选值为 line / circle / dashboard')

  test.todo('stroke-width 进度条的宽度，单位 px')

  test.todo('text-inside 进度条显示文字内置在进度条内（只在 type=line 时可用）')

  test.todo('status 进度条当前状态;该属性的可选值为 success / exception / warning')

  test.todo('color 进度条背景色（会覆盖 status 状态颜色）')

  test.todo('width 环形进度条画布宽度（只在 type 为 circle 或 dashboard 时可用）')

  test.todo('show-text 是否显示进度条文字内容')

  test.todo('format 自定义进度条的文字')
})
