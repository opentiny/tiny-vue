import { test, expect } from '@playwright/test'

test('show-alloption', async ({ page }) => {
  await page.goto('select#show-alloption')
  const select = page.locator('#preview .tiny-select')
  const options = page.locator('.tiny-select-dropdown').locator('.tiny-option')

  await select.click()
  await page.waitForTimeout(500)
  await expect(options.filter({ hasText: '全部' })).toBeHidden()
})
