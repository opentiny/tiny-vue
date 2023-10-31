import { test, expect } from '@playwright/test'

test('配置式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-toolbar#toolbar-toolbar-op-config')
  await page.getByRole('button', { name: '新增' }).click()
  await expect(page.locator('.tiny-grid-body__row').nth(1)).toContainText('GFD科技YX公司')
})
