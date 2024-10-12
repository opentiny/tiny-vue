import { test, expect } from '@playwright/test'

test('基础用法，是否可动态控制进度条', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('progress#basic-usage')

  const demo = page.locator('#basic-usage')
  const progress = demo.getByRole('progressbar')
  const progress1 = progress.nth(0).locator('.tiny-progress-bar__outer')
  const progress2 = progress.nth(1).locator('.tiny-progress-bar__outer')

  await expect(progress1).toBeVisible()
  await expect(progress2).toBeVisible()
  await expect(progress1).toHaveCSS('height', '4px')
  await expect(progress2).toHaveCSS('height', '24px')
  await expect(progress1).toHaveCSS('border-radius', '2px')
  await expect(progress2).toHaveCSS('border-radius', '12px')
  await expect(page.getByText('90%')).toHaveCount(2)
  await expect(page.getByText('努力加载中，请稍后...')).toBeVisible()

  await expect(progress.nth(0)).toHaveAttribute('aria-valuenow', '90')
  await expect(progress.nth(1)).toHaveAttribute('aria-valuenow', '90')
  await demo.getByRole('button').nth(1).click()
  await expect(page.getByText('努力加载中，请稍后...')).not.toBeVisible()
  await expect(progress.nth(0)).toHaveAttribute('aria-valuenow', '100')
  await expect(progress.nth(1)).toHaveAttribute('aria-valuenow', '100')
  await demo.getByRole('button').first().click()
  await expect(progress.nth(0)).toHaveAttribute('aria-valuenow', '90')
  await expect(progress.nth(1)).toHaveAttribute('aria-valuenow', '90')
})
