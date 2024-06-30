import { expect, test } from '@playwright/test'

test('多选时自定义全部的文本', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('select#all-text')
  const wrap = page.locator('#all-text')
  const select = wrap.locator('.tiny-select').nth(0)
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const option = dropdown.locator('.tiny-option')

  await select.locator('.tiny-input__suffix').click()
  await expect(option.filter({ hasText: '全部小吃' })).toHaveCount(1)
})
