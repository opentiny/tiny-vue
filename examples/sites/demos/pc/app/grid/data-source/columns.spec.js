import { test, expect } from '@playwright/test'

test('表格列的配置信息', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-data-source#data-source-columns')

  // 判断 columns 设置表格列的配置信息成功
  await expect(page.getByRole('cell', { name: 'WWWW 科技 YX 公司' })).toBeVisible()
})
