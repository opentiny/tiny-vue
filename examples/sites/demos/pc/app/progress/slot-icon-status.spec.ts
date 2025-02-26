import { test, expect } from '@playwright/test'

test.describe('Icon Status Slots', () => {
  test('should display correct icon for success status', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).not.toBeNull())
    await page.goto('progress#slot-icon-status')

    const successProgress = page.locator('.progress').nth(0)
    const successIcon = successProgress.locator('svg')

    await expect(successProgress).toHaveAttribute('status', 'success')
    await expect(successIcon).toBeVisible()
    await expect(successIcon).toHaveClass(/tiny-icon-smile/)
  })

  test('should display correct icon for warning status', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).not.toBeNull())
    await page.goto('progress#slot-icon-status')

    const warningProgress = page.locator('.progress').nth(1)
    const warningIcon = warningProgress.locator('svg')

    await expect(warningProgress).toHaveAttribute('status', 'warning')
    await expect(warningIcon).toBeVisible()
    await expect(warningIcon).toHaveClass(/tiny-icon-meh/)
  })

  test('should display correct icon for exception status', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).not.toBeNull())
    await page.goto('progress#slot-icon-status')

    const exceptionProgress = page.locator('.progress').nth(2)
    const exceptionIcon = exceptionProgress.locator('svg')

    await expect(exceptionProgress).toHaveAttribute('status', 'exception')
    await expect(exceptionIcon).toBeVisible()
    await expect(exceptionIcon).toHaveClass(/tiny-icon-frown/)
  })
})
