import { expect, test } from 'vitest'
import * as xss from '../index'

test('测试 filterUrl,filterHtml, 整个组件库只用到这2个函数', async () => {
  const { filterHtml, filterUrl } = xss.default

  // 过滤DOM中的危险语句
  expect(filterHtml(`<a href="javascript:alert('XSS')">Click Me</a>`)).toMatchInlineSnapshot(`"<a>Click Me</a>"`)

  // 过滤控制字符
  expect(filterUrl(`hello\uFEFFworld`)).toMatchInlineSnapshot(`"helloworld"`)
  // 过滤可执行代码
  expect(filterUrl(`javascript:alert('XSS')`)).toMatchInlineSnapshot(`""`)
  expect(filterUrl(`data:text/html,<h1>xss</h1>`)).toMatchInlineSnapshot(`""`)
  // 正常字符
  expect(filterUrl(`https://s.com/user`)).toMatchInlineSnapshot(`"https://s.com/user"`)
})
