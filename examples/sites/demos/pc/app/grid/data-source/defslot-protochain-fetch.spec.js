import { test, expect } from '@playwright/test'

test('插槽中使用复杂数据', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-data-source#data-source-defslot-protochain-fetch')

  // 判断columns 设置表格列的配置信息成功
  await expect(page.getByRole('cell', { name: 'GFD科技有限公司' })).toBeVisible()
})
