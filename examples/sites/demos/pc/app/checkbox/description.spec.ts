import { test, expect } from '@playwright/test'

test('描述文本', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('checkbox#description')

  const demo = page.locator('#description')
  const checkbox = demo.locator('.tiny-checkbox-group .tiny-checkbox__label')
  await expect(checkbox.first()).toHaveText('复选框1')
  await expect(checkbox.nth(1)).toHaveText('复选框2文本')
  await expect(checkbox.nth(2)).toHaveText('复选框3文本')
})
