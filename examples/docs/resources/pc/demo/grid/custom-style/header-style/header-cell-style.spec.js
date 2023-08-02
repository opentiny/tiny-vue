import { test, expect } from '@playwright/test'

test('设置表头样式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/grid-custom-style/custom-style-header-style-header-cell-style')
  await expect(page.getByRole('cell', { name: '公司名称' })).toHaveCSS('background-color', 'rgb(45, 183, 245)')
})
