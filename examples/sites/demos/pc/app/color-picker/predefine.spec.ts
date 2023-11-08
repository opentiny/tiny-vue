import { test, expect } from '@playwright/test'

test('测试预定义颜色', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('color-picker#predefine')
  await page.locator('.tiny-color-picker__trigger').click()
  await page.waitForSelector('.tiny-collapse-item__arrow')
  const arrow = page.locator('.tiny-collapse-item__arrow')
  await arrow.click()
  await expect(page.locator('.tiny-color-select-panel__predefine .tiny-color-select-panel__predefine__color-block:nth-child(8)')).toBeVisible()
  await page.locator('.mr20.fw-bold').click()
  //用户行为预定义颜色测试
  await page.getByRole('button', { name: 'Append predefine color' }).click()
  await page.locator('.tiny-color-picker__trigger').click()
  await page.waitForSelector('.tiny-collapse-item__arrow')
  await page.locator('.tiny-collapse-item__arrow').click()
  await expect(page.locator('.tiny-color-select-panel__predefine .tiny-color-select-panel__predefine__color-block:nth-child(9)')).toBeVisible()
})