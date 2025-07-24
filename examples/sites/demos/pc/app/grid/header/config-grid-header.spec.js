import { test, expect } from '@playwright/test'

test('配置式多级表头', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-header#header-config-grid-header')
  const demo = page.locator('#header-config-grid-header')
  await expect(demo.getByText('子表头 1-1')).toBeVisible()
  await expect(demo.getByText('父表头 2')).toBeVisible()
  await expect(demo.getByText('自定义表头')).toBeVisible()
})
