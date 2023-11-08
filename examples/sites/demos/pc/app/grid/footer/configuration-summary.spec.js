import { test, expect } from '@playwright/test'

test('设置配置式的统计', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-footer#footer-configuration-summary')
  await expect(page.getByText('5310.00')).toBeVisible()
})
