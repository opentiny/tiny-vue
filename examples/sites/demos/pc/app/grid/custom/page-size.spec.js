import { test, expect } from '@playwright/test'

test('分页条数', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-custom#custom-page-size')
  const demo = page.locator('#custom-page-size')
  await expect(demo.locator('.tiny-grid-body__row')).toHaveCount(10)
  await demo.locator('.tiny-grid-custom__setting-btn').click()
  await page.getByText('其他设置', { exact: true }).click()
  await page.locator('label').filter({ hasText: '5' }).locator('path').nth(1).click()
  await page.getByRole('button', { name: '确定' }).click()
  await expect(demo.locator('.tiny-grid-body__row')).toHaveCount(5)
})
