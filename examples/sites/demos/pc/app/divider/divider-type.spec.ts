import { test, expect } from '@playwright/test'

test('分割线类型', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('divider#divider-type')
  const dividerText = page.locator('.tiny-divider__text')
  await expect(dividerText.first()).toHaveText('solid线')
  await expect(dividerText.nth(1)).toHaveText('dashed线')
  await expect(dividerText.nth(2)).toHaveText('dotted线')
})
