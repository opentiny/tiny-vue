import { test, expect } from '@playwright/test'

test('自定义列头样式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/grid-header/header-header-class-name')
  await expect(page.getByRole('cell', { name: '所属区域' })).toHaveCSS('background-color', 'rgb(255, 192, 203)')
})
