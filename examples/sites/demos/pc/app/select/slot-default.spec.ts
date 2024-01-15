import { expect, test } from '@playwright/test'

test('选项插槽', async ({ page }) => {
  await page.goto('select#slot-default')

  const wrap = page.locator('#slot-default')
  const select = wrap.locator('.tiny-select').nth(0)
  const input = select.locator('.tiny-input__inner')
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const option = dropdown.locator('.tiny-option')

  await input.click()
  await expect(option.filter({ hasText: '黄金糕' })).toBeVisible()
  await expect(option.filter({ hasText: '黄金糕' }).locator('.tiny-tag')).toHaveText('New')
  await option.filter({ hasText: '黄金糕' }).hover()
  await expect(page.locator('body > .tiny-tooltip').filter({ hasText: '自定义提示' })).toBeVisible()
})
