import { test, expect } from '@playwright/test'

test('服务端过滤', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-filter#server-filter-default')
  await page.waitForTimeout(3000)
  await page.getByRole('button', { name: '加载数据' }).click()
  await expect(page.locator('.tiny-grid-body__row')).toHaveCount(1)
})
