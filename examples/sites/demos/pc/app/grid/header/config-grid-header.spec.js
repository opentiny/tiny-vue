import { test, expect } from '@playwright/test'

test('配置式多级表头', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-header#header-config-grid-header')
  await expect(page.getByText('子表头1-1')).toBeVisible()
  await expect(page.getByText('父表头2')).toBeVisible()
  await expect(page.getByText('自定义表头')).toBeVisible()
})
