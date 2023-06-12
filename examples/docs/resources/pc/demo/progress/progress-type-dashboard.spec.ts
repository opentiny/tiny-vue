import { test, expect } from '@playwright/test'

test.describe('dashboard类型', () => {
  test('是否含相关类名', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).not.toBeNull())
    await page.goto('http://127.0.0.1:7130/pc/progress/progress-type-dashboard')

    const progress = page.getByRole('progressbar')

    await expect(progress).toHaveClass(/tiny-progress--dashboard/)
    await expect(progress.locator('div.tiny-progress-circle')).toBeVisible()
    await expect(progress.locator('div.tiny-progress__text')).toBeVisible()
  })
})
