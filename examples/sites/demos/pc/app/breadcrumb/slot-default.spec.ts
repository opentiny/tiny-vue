import { test, expect } from '@playwright/test'

test('Breadcrumb 自定义节点', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('breadcrumb#slot-default')

  const breadcrumbItem = page.locator('.tiny-breadcrumb__item')
  const slotItem = breadcrumbItem.nth(1).locator('a')
  await expect(slotItem).toHaveAttribute('href', '/')
})
