import { test, expect } from '@playwright/test'

test('show-alloption', async ({ page }) => {
  await page.goto('select#show-alloption')

  const wrap = page.locator('#show-alloption')
  const select = wrap.locator('.tiny-select')
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const option = dropdown.locator('.tiny-option')

  await select.click()
  await page.waitForTimeout(500)
  await expect(option.filter({ hasText: '全部' })).toBeHidden()
})
