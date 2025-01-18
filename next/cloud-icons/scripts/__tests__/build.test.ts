import { test, expect } from 'vitest'
import { genClass, loadSvg, parsePath } from '../build'

test('测试解析路径的正确性', () => {
  const svgPath = './svgs/base/1-方向/1#前进-go.svg'
  const { category, group, nameCn, name, order } = parsePath(svgPath)

  expect(category).toEqual('base')
  expect(group).toEqual('1-方向')
  expect(nameCn).toEqual('前进')
  expect(name).toEqual('go')
  expect(order).toEqual(1)
})

test('测试生成css的正确性', () => {
  let svg = loadSvg('./scripts/__tests__/点击-click.svg')
  let css = genClass('click', svg.toMinifiedString())

  expect(css).toMatchSnapshot()

  svg = loadSvg('./scripts/__tests__/函数工作流-FunctionGraph.svg')
  css = genClass('fg', svg.toMinifiedString())

  expect(css).toMatchSnapshot()
})
