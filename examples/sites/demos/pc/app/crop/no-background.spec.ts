import { test, expect } from '@playwright/test'

test('不显示网格背景', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('crop#no-background')
  await page.getByRole('button', { name: '图片裁剪' }).click()
  await page.locator('div:nth-child(4) > .tiny-svg').click()
  await page.locator('.tiny-crop__dialog-content__handle__button > div:nth-child(5)').click()
  await page.locator('div:nth-child(5) > .tiny-svg').click()
  await page.locator('div:nth-child(6) > .tiny-svg').click()
  await page.locator('.tiny-crop__dialog-content__handle__button > div:nth-child(8)').click()
  await page.locator('div:nth-child(9) > .tiny-svg').click()
})
