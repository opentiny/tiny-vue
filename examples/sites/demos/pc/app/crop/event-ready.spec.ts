import { test, expect } from '@playwright/test'

test('ready 事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('crop#event-ready')
  await page.getByRole('button', { name: '图片裁剪' }).click()
  await page.locator('div:nth-child(8) > .tiny-svg').click()
  await page.locator('.tiny-crop__dialog-content__handle__button > div:nth-child(9)').click()
  await page.getByRole('button', { name: '销毁 cropper' }).click()
  await page.getByRole('button', { name: '图片裁剪' }).click()
  await page.locator('.tiny-crop__dialog-content__handle__button > div:nth-child(3)').click()
  await page.locator('div:nth-child(4) > .tiny-svg').click()
})
