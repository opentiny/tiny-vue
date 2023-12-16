import { test, expect } from '@playwright/test'

test('裁剪框方法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('crop#crop-meth')
  await page.getByRole('link', { name: '裁剪框方法 事件' }).click()
  await page.getByRole('button', { name: '启用裁剪框' }).click()
  await page.getByRole('button', { name: '图片裁剪' }).click()
  await page.locator('div:nth-child(5) > .tiny-svg').click()
  await page.locator('div:nth-child(5) > .tiny-svg').click()
  await page.locator('div:nth-child(5) > .tiny-svg').click()
  await page.locator('div:nth-child(5) > .tiny-svg').click()
  await page.locator('div:nth-child(5) > .tiny-svg').click()
  await page.locator('div:nth-child(5) > .tiny-svg').click()
  await page.locator('.tiny-crop__dialog-content__handle__button > div:nth-child(2)').click()
  await page.locator('.icon').first().click()
  await page.locator('div:nth-child(8) > .tiny-svg').click()
  await page.locator('div:nth-child(9) > .tiny-svg > .st0').click()
})
