import { test, expect } from '@playwright/test'

test('line类型是否正常显示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://127.0.0.1:7130/pc/progress/progress-type')
  const progress = page.getByRole('progressbar')

  await expect(progress).toHaveClass(/tiny-progress--line/)
  await expect(progress.locator('div.tiny-progress-bar__outer')).toBeVisible()
  await expect(progress.locator('div.tiny-progress-bar__inner')).toBeVisible()
  await expect(page.getByText('50%')).toBeVisible()
  await expect(progress).toHaveAttribute('aria-valuemin', '0')
  await expect(progress).toHaveAttribute('aria-valuemax', '100')
})
