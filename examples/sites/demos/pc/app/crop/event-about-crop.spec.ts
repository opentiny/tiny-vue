import { test, expect } from '@playwright/test'

test('裁剪相关事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('crop#event-about-crop')
  await page.getByRole('button', { name: '获取Canvas数据' }).click()
  await page.getByRole('button', { name: '图片裁剪' }).click()
  await page.locator('div:nth-child(4) > .tiny-svg').click()
  await page.locator('.tiny-crop__dialog-content__handle__button > div:nth-child(5)').click()
  await page.locator('div:nth-child(5) > .tiny-svg').click()
  await page.locator('div:nth-child(6) > .tiny-svg').click()
  await page.locator('div:nth-child(7) > .tiny-svg').click()
  await page.locator('div:nth-child(8) > .tiny-svg').click()
  await page.locator('div:nth-child(9) > .tiny-svg').click()
})
