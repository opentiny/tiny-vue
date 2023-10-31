import { test, expect } from '@playwright/test'

test('绑定静态数据', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-data-source#tiny-first-menu-static-data')

  // 判断表格属性设置 data 开启双向绑定静态数据成功
  await expect(page.getByText('1')).toHaveText('1')
  await expect(page.getByText('GFD科技YX公司').first()).toHaveText('GFD科技YX公司')
})
