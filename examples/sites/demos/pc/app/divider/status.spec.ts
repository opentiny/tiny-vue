import { test, expect } from '@playwright/test'

test('分割线状态', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('divider#status')
  const dividerText = page.locator('.tiny-divider__text')
  await expect(dividerText.first()).toHaveText('default')
  await expect(dividerText.nth(1)).toHaveText('success')
  await expect(dividerText.nth(2)).toHaveText('error')
  await expect(dividerText.nth(3)).toHaveText('warning')
  await expect(dividerText.nth(4)).toHaveText('info')
})
