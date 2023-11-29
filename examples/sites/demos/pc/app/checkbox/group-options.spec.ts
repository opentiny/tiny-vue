import { test, expect } from '@playwright/test'

test('配置式复选框组', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('checkbox#group-options')
  const demo = page.locator('#group-options')
  await demo.getByText('很好').click()
  await expect(page.locator('.tiny-modal__body').filter({ hasText: 'click' })).toBeVisible()
})
