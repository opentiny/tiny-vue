import { test, expect } from '@playwright/test'

test('裁剪框宽高比', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('crop#aspect-ratio')
  await page.getByRole('button', { name: '图片裁剪' }).click()
  await page.locator('.icon').first().click()
  await page.locator('.iconButton > .tiny-svg').first().click()
  await page.locator('div:nth-child(4) > .tiny-svg').click()
  await page.locator('div:nth-child(5) > .tiny-svg').click()
  await page.locator('div:nth-child(6) > .tiny-svg').click()
  await page.locator('div:nth-child(7) > .tiny-svg').click()
  await page.locator('div:nth-child(8) > .tiny-svg').click()
})
