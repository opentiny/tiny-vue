import { test, expect } from '@playwright/test'

test('裁剪框最小宽高', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('crop#min-crop-box-width-height')
  await page.getByRole('button', { name: '图片裁剪' }).click()
  await page.locator('div:nth-child(3) > .icon').click()
  await page.locator('div:nth-child(5) > .tiny-svg').click()
  await page.locator('div:nth-child(8) > .tiny-svg').click()
  await page.locator('div:nth-child(9) > .tiny-svg > .st0').click()
})
