import { test, expect } from '@playwright/test'

test('正常显示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('http://127.0.0.1:7130/pc/progress/basic-usage')

  const progress = page.getByRole('progressbar')
  const outer = progress.locator('div.tiny-progress-bar__outer')
  const inner = progress.locator('div.tiny-progress-bar__inner')

  await expect(outer).toBeVisible()
  await expect(outer).toHaveCSS('height', '6px')
  await expect(inner).toBeVisible()
  await expect(inner).toHaveCSS('border-radius', '3px')
  await expect(page.getByText('50%')).toBeVisible()
  await expect(progress).toHaveAttribute('aria-valuemin', '0')
  await expect(progress).toHaveAttribute('aria-valuemax', '100')
})
