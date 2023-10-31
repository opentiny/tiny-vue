import { test, expect } from '@playwright/test'

test('列头是否开启高亮', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-highlight#highlight-highlight-hover-column')
  await page.getByRole('cell', { name: '员工数' }).hover()
  await page.waitForTimeout(200)
  await expect(page.getByRole('cell', { name: '员工数' })).toHaveCSS('background-color', 'rgb(215, 239, 251)')
})
