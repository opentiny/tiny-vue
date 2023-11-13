import { test, expect } from '@playwright/test'

test('基础用法，是否可动态控制进度条', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('http://127.0.0.1:7130/pc/progress/basic-usage')

  const progress = page.getByRole('progressbar')
  const progress1 = progress.nth(0).locator('.tiny-progress-bar__outer')
  const progress2 = progress.nth(1).locator('.tiny-progress-bar__outer')

  await expect(progress1).toBeVisible()
  await expect(progress2).toBeVisible()
  await expect(progress1).toHaveCSS('height', '4px')
  await expect(progress2).toHaveCSS('height', '24px')
  await expect(progress2).toHaveCSS('border-radius', '12px')
  await expect(page.getByText('50%')).toBeVisible()

  await expect(progress).toHaveAttribute('aria-valuenow', '20')
  await page.locator('button').nth(3).click()
  await expect(progress).toHaveAttribute('aria-valuenow', '10')
  await page.locator('button').nth(4).click()
  await expect(progress).toHaveAttribute('aria-valuenow', '20')
})
