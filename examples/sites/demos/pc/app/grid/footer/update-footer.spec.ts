import { test, expect } from '@playwright/test'

test('表尾合并行或列', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  const demo = page.locator('#update-footer')
  await page.goto('grid-footer#update-footer')
  await expect(demo.getByRole('cell', { name: '5310' })).toBeVisible()
  await demo.getByRole('cell', { name: '1300' }).click()
  await demo.locator('.tiny-numeric__increase').click()
  await expect(demo.getByRole('cell', { name: '5311' })).toBeVisible()
})
