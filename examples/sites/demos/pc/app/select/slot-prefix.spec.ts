import { test, expect } from '@playwright/test'

test('输入框前缀插槽', async ({ page }) => {
  await page.goto('select#slot-prefix')

  const wrap = page.locator('#slot-prefix')
  const select = wrap.locator('.tiny-select')
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const option = dropdown.locator('.tiny-option')
  const prefix = select.locator('.tiny-input .tiny-input__prefix .tiny-svg')
  const tag = select.locator('.tiny-tag')

  await expect(prefix).toBeVisible()
  await select.click()
  await option.filter({ hasText: '黄金糕' }).click()
  await expect(tag.filter({ hasText: '黄金糕' })).toBeVisible()
})
