import { test, expect } from '@playwright/test'

test('替换图片', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('crop#replace-image')

  const demo = page.locator('#replace-image')

  await page.getByRole('button', { name: /替换图片/ }).click()
  await page.getByRole('button', { name: /图片裁剪/ }).click()

  await expect(demo.locator('img').first()).toHaveAttribute('src', /bridge.jpg/)
})
