import { expect, test } from 'vitest'
import * as xss from '../index'

test('测试 filterUrl,filterHtml, 整个组件库只用到这2个函数', async () => {
  const { filterHtml, filterUrl } = xss.default

  const url = `https://s.com/user#<script>alert('XSS')</script>`
  const html = `<a href="javascript:alert('XSS')">Click Me</a>`

  // filterUrl是无效的？？？
  expect(filterUrl(url)).toMatchInlineSnapshot(`"https://s.com/user#<script>alert('XSS')</script>"`)
  expect(filterHtml(html)).toMatchInlineSnapshot(`"<a>Click Me</a>"`)
})
