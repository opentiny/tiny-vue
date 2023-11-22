import { test, expect } from '@playwright/test'

test('工具栏自定义插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-toolbar#toolbar-custom-toolbar')
  await expect(page.getByRole('textbox', { name: '请输入公司名称' })).toBeVisible()
  await expect(page.getByRole('button', { name: '搜索' })).toBeVisible()
})
