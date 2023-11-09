import { test, expect } from '@playwright/test'

test('设置行样式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-custom-style#custom-style-row-style')
  await expect(page.getByText('WWW科技YX公司').first()).toHaveCSS('color', 'rgb(255, 0, 0)')
  await expect(page.getByText('深圳', { exact: true }).first()).toHaveCSS('color', 'rgb(255, 0, 0)')
})
