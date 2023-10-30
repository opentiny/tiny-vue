import { expect, test } from '@playwright/test'

test('slot-default', async ({ page }) => {
  await page.goto('select#slot-default')

  const input = page.locator('#preview .tiny-input__inner')
  const options = page.locator('.tiny-select-dropdown').locator('.tiny-option')
  await input.click()
  await page.waitForTimeout(1000)
  await expect(options.filter({ hasText: '选项1' })).toBeVisible()
})
