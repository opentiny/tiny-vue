import { test, expect } from '@playwright/test'

test('分割线状态', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('divider#status')
  const dividerText = page.locator('.tiny-divider-line')
  await expect(dividerText.first()).toHaveClass(/tiny-divider--default/)
  await expect(dividerText.nth(1)).toHaveClass(/tiny-divider--success/)
  await expect(dividerText.nth(2)).toHaveClass(/tiny-divider--error/)
  await expect(dividerText.nth(3)).toHaveClass(/tiny-divider--warning/)
  await expect(dividerText.nth(4)).toHaveClass(/tiny-divider--info/)
})
