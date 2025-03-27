import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('fluent-editor#basic-usage')
  await page
    .locator('#basic-usage #editor div')
    .filter({ hasText: 'Hello FluentEditor!' })
    .fill('Hello FluentEditor!1234')
  await page.locator('#basic-usage #editor div').filter({ hasText: 'Hello FluentEditor!' }).press('ControlOrMeta+a')
  await page.locator('#basic-usage').getByLabel('bold').click()
  await page.locator('#basic-usage #editor div').filter({ hasText: 'Hello FluentEditor!' }).click()
  const cls = page.locator('.ql-editor strong')
  await expect(cls.first()).toHaveCSS('font-weight', '700')
})
