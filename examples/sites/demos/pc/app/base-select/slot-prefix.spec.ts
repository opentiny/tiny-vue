import { test, expect } from '@playwright/test'

test('输入框前缀插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('base-select#slot-prefix')

  const wrap = page.locator('#slot-prefix')
  const select = wrap.locator('.tiny-base-select')
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const option = dropdown.locator('.tiny-option')
  const prefix = select.locator('.tiny-input .tiny-input__prefix .tiny-svg')
  const tag = select.locator('.tiny-tag')

  await expect(prefix).toBeVisible()
  await select.click()
  await option.filter({ hasText: '北京' }).click()
  await expect(tag.filter({ hasText: '北京' })).toBeVisible()
})
