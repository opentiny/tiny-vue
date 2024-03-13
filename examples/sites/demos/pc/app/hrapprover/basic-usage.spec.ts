import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('hrapprover#basic-usage')
  await page.locator('.tiny-dept .tiny-input__suffix .popup_svg__icon').click()
  await expect(page.getByText('辅助查询')).toBeVisible()
  await expect(page.locator('div').filter({ hasText: /^确定取消$/ })).toBeVisible()
})
