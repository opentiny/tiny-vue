import { test, expect } from '@playwright/test'

test('[Input]validate-event', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('input#validate-event')
  await page.locator('.demo-form .tiny-input').getByRole('textbox').click()
  await page
    .locator('div')
    .filter({ hasText: /^活动名称$/ })
    .first()
    .click()
  const tip = page.getByRole('tooltip', { name: '请输入活动名称' })
  await expect(tip).toBeVisible()
})
