
import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, test } from 'vitest'

describe('PC Mode', () => {
  const mount = mountPcMode

  // 测试rate 不传任何参数情况小的默认行为
  test.todo('测试 rate 在不传任何参数情况下的默认行为,分数最大值为5，hover时当前及前面的所有icon变为黄色，鼠标移除后icon颜色为浅灰色')
  
  // 测试单个api的功能
  test.todo('v-model 是否正常，设置了v-model是否显示对应个数的选中状态的icon')

  test.todo('max 是否正常，设置最大分值，设置了max是否最多可选对应个数的icon')

  test.todo('disabled 是否正常，设置了disabled是否禁用，不可选')

  test.todo('allow-half 是否正常，设置了allow-half属性是否支持半选')

  test.todo('colors 是否正常，三个分段对应选中icon的颜色')

  test.todo('disabled-void-color 是否正常，是否为禁用状态下或没选中icon的颜色')

  test.todo('high-threshold 是否正常，是否为高分和中等分数的界限值，值本身是否划为在高分中')

  test.todo('low-threshold 是否正常，是否为低分和中等分数的界限值，值本身是否划为在低分中')

  test.todo(
    'score-template 分数显示模板，和show-score属性组合使用，在icon右侧是否出现分数模板字符串且数值是否为当前选中分数值'
  )

  test.todo('show-score 显示分数，设置后是否在icon右侧显示当前选中的分数值')

  test.todo('show-text， 设置后是否在icon右侧显示辅助文字，且文字和分数值描述是否对应')

  test.todo('text-color 是否正常，设置后与辅助文字的颜色对应')

  test.todo('texts 是否正常，辅助文字描述，分别对应上不同的分数值')

  test.todo('void-color，是否为未选中icon的颜色')

  test.todo('radio 单选模式，设置后，是否只显示一个选中状态的icon且为当前选中icon')

  test.todo('size 设置icon图标的大小，设置的值是否与icon大小对应')

  test.todo('space 设置每个icon所占宽度，设置后是否能与每个icon所占宽度对应')

  test.todo('text-on-bottom ,设置后是否在icon下显示文字提示')

  test.todo('disabled-void-icon-class ,只读状态下未选中的图标样式名')

  test.todo('void-icon-class ,设置未选中 icon 的类名')

  test.todo('icon-classes ,设置三个分段对应的图标样式名')

  // 测试事件
  test.todo('change， 分值改变时触发')

})


