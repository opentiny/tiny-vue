import { test, expect } from '@playwright/test'

test('三种状态是否正常显示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('progress#progress-status')

  const progress = page.getByRole('progressbar')
  const success = progress.filter({ hasText: '100%' })
  const warning = progress.filter({ hasText: '80%' })
  const exception = progress.filter({ hasText: '50%' })
  const button = page.getByRole('button', { name: '显示文字状态' })
  const icons = page.locator('.tiny-progress__text svg')

  await expect(icons).toHaveCount(3)
  for (let i = 0; i < 3; i++) {
    const { width, height } = await icons.nth(i).boundingBox()
    await expect(width).toBeGreaterThanOrEqual(20)
    await expect(height).toBeGreaterThanOrEqual(20)
  }
  await button.click()
  await expect(success).toHaveAttribute('aria-valuenow', '100')
  await expect(success).toHaveClass(/is-success/)
  await expect(warning).toHaveAttribute('aria-valuenow', '80')
  await expect(warning).toHaveClass(/is-warning/)
  await expect(exception).toHaveAttribute('aria-valuenow', '50')
  await expect(exception).toHaveClass(/is-exception/)
})
