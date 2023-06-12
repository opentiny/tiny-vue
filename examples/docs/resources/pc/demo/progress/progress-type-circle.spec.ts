import { test, expect } from '@playwright/test'

test.describe('circle 类型', () => {
  test('是否circle 类型', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).not.toBeNull())
    await page.goto('http://127.0.0.1:7130/pc/progress/progress-type-circle')

    const progress = page.getByRole('progressbar')

    await expect(progress.locator('div.tiny-progress-circle')).toBeVisible()
  })

  test('点击值增加', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).not.toBeNull())
    await page.goto('http://127.0.0.1:7130/pc/progress/progress-type-circle')

    const progress = page.getByRole('progressbar')

    await expect(progress).toHaveAttribute('aria-valuenow', '10')
    await page.getByRole('button', { name: '增加' }).click()
    await expect(progress).toHaveAttribute('aria-valuenow', '20')
  })
})
