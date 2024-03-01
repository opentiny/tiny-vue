import { test, expect } from '@playwright/test'

test('测试预定义颜色', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('color-picker#predefine')
  await page.locator('.tiny-color-picker').click()
  await page.waitForSelector('.tiny-collapse-item__arrow')
  await expect(
    page.locator('.tiny-color-select-panel__predefine .tiny-color-select-panel__predefine__color-block:nth-child(8)')
  ).toBeHidden()
  await page.getByRole('button', { name: '选择' }).click()
  // 用户行为预定义颜色测试
  await page.getByRole('button', { name: 'Append predefine color' }).click()
  await page.locator('.tiny-color-picker').click()
  await page.waitForSelector('.tiny-collapse-item__arrow')
  await expect(
    page.locator('.tiny-color-select-panel__predefine .tiny-color-select-panel__predefine__color-block:nth-child(9)')
  ).toBeHidden()
})
