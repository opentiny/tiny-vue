import { expect, test } from '@playwright/test'

test('默认下拉弹框宽度由内容撑开', async ({ page }) => {
  await page.goto('select#is-drop-inherit-width')

  const wrap = page.locator('#is-drop-inherit-width')
  const select = wrap.locator('.tiny-select').nth(0)
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const input = select.locator('.tiny-input__inner')
  const option = dropdown.locator('.tiny-option')

  await select.click()
  const inputBox = await input.boundingBox()
  const listitemBox = await option.first().boundingBox()

  const result = listitemBox.width > inputBox.width
  await expect(result).toBe(true)
})

test('下拉弹框宽度与输入框一致', async ({ page }) => {
  await page.goto('select#is-drop-inherit-width')
  const wrap = page.locator('#is-drop-inherit-width')
  const select = wrap.locator('.tiny-select').nth(1)
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const input = select.locator('.tiny-input__inner')

  await select.click()
  const inputBox = await input.boundingBox()
  const dropdownBox = await dropdown.boundingBox()
  const result = dropdownBox.width - inputBox.width
  await expect(result < 1).toBe(true)
})
