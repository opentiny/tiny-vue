import { test, expect } from '@playwright/test'

test('Breadcrumb 自定义分隔符', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('breadcrumb#separator')

  const breadcrumb = page.getByRole('navigation', { name: 'Breadcrumb' })
  const separator1 = breadcrumb.first().locator('.tiny-breadcrumb__separator')
  const separator2 = breadcrumb.nth(1).locator('.tiny-breadcrumb__separator-cls')

  await expect(separator1.first()).not.toHaveText(/>/)
  await expect(separator2.first()).not.toHaveText(/>/)
})
