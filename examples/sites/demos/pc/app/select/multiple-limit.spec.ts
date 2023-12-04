import { test, expect } from '@playwright/test'

test('multiple-limit', async ({ page }) => {
  await page.goto('select#multiple-limit')
  const wrap = page.locator('#multiple-limit')
  const select = wrap.locator('.tiny-select')
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const option = dropdown.locator('.tiny-option')
  const tag = select.locator('.tiny-tag')

  await select.click()
  await option.nth(0).click()
  await option.nth(1).click()
  await expect(tag).toHaveCount(2)
  await expect(option.filter({ hasText: '全部' })).toHaveCount(0)

  const list = await option.all()
  list.forEach(async (item, index) => {
    if (index <= 1) {
      await expect(item).toHaveClass(/selected/)
    } else {
      await expect(item).toHaveClass(/is-disabled/)
    }
  })
})
