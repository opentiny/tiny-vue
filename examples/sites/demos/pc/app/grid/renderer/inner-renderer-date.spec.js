import { test, expect } from '@playwright/test'

test('日期渲染器', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-renderer#renderer-inner-renderer-date')
  await expect(page.getByText('-07-02').first()).toBeVisible()
  await expect(page.getByText('02/07/2024').first()).toBeVisible()
  await expect(page.getByText('02/15/2024').first()).toBeVisible()
})
