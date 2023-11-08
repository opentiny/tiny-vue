import { test, expect } from '@playwright/test'

test('开启加载中状态', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-grid-loading-tip#tiny-first-menu-grid-loading-tip')
  await page.getByRole('button', { name: '重试' }).click()
  await expect(page.locator('.tiny-grid-loading__wrap')).toBeVisible()
})
