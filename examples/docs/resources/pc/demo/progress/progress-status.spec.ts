import { test, expect } from '@playwright/test'

test.describe('三种状态', () => {
  test('三种状态是否正常显示', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).not.toBeNull())
    await page.goto('http://127.0.0.1:7130/pc/progress/progress-status')

    const progress = page.getByRole('progressbar')
    const success = progress.filter({ hasText: '100%' })
    const warning = progress.filter({ hasText: '80%' })
    const exception = progress.filter({ hasText: '50%' })

    await expect(success).toHaveAttribute('aria-valuenow', '100')
    await expect(success).toHaveClass(/is-success/)
    await expect(warning).toHaveAttribute('aria-valuenow', '80')
    await expect(warning).toHaveClass(/is-warning/)
    await expect(exception).toHaveAttribute('aria-valuenow', '50')
    await expect(exception).toHaveClass(/is-exception/)
  })
})
