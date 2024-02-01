import { test, expect } from '@playwright/test'

test('自定义重置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-custom#custom-reset-method')
  await page.locator('.tiny-grid-custom__setting-btn').click()
  await page.getByRole('button', { name: '重置' }).click()
  await page.getByRole('button', { name: '确定' }).click()
  await expect(page.getByRole('cell', { name: '所属区域' })).not.toBeVisible()
})
