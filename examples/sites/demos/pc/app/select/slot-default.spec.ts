import { expect, test } from '@playwright/test'

test('选项插槽', async ({ page }) => {
  await page.goto('select#slot-default')

  const wrap = page.locator('#slot-default')
  const select = wrap.locator('.tiny-select')
  const input = select.locator('.tiny-input__inner')
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const option = dropdown.locator('.tiny-option')

  await input.click()
  await expect(option.filter({ hasText: '选项1' })).toBeVisible()
})
