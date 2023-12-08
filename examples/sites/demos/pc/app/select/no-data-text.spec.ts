import { test, expect } from '@playwright/test'

test('默认空数据文本', async ({ page }) => {
  await page.goto('select#no-data-text')

  const wrap = page.locator('#no-data-text')
  const select = wrap.locator('.tiny-select').nth(0)
  const input = select.locator('.tiny-input__inner')
  const dropdown = page.locator('body > .tiny-select-dropdown')

  await input.click()
  await expect(dropdown.locator('.tiny-select-dropdown__empty')).toHaveText('暂无相关数据')
})

test('自定义空数据文本', async ({ page }) => {
  await page.goto('select#no-data-text')

  const wrap = page.locator('#no-data-text')
  const select = wrap.locator('.tiny-select').nth(1)
  const input = select.locator('.tiny-input__inner')
  const dropdown = page.locator('body > .tiny-select-dropdown')

  await input.click()
  await expect(dropdown.locator('.tiny-select-dropdown__empty')).toHaveText('None')
})

test('显示空数据图片', async ({ page }) => {
  await page.goto('select#no-data-text')
  const wrap = page.locator('#no-data-text')
  const select = wrap.locator('.tiny-select').nth(2)
  const input = select.locator('.tiny-input__inner')
  const dropdown = page.locator('body > .tiny-select-dropdown')

  await input.click()
  await expect(dropdown.locator('.tiny-select-dropdown__empty-images')).toBeVisible()
})
