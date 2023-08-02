import { test, expect } from '@playwright/test'

test('动态控制进度条变化', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('http://localhost:7130/pc/progress/dynamic-control-changes')

  const progress = page.getByRole('progressbar')

  await expect(progress).toHaveAttribute('aria-valuenow', '20')
  await page.locator('button').nth(3).click()
  await expect(progress).toHaveAttribute('aria-valuenow', '10')
  await page.locator('button').nth(4).click()
  await expect(progress).toHaveAttribute('aria-valuenow', '20')
})
