import { test, expect } from '@playwright/test'

test.describe('Icon Status Slots', () => {
  test('should display correct icon for success status', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).not.toBeNull())
    await page.goto('progress#slot-icon-status')

    const progressLocator = page.getByRole('progressbar').nth(0)
    const iconLocator = progressLocator.locator('svg')
    await expect(progressLocator).toHaveClass(/is-success/)
    await expect(iconLocator).toBeVisible()
    await expect(iconLocator.locator('.smile_svg__st0').first()).toBeVisible()
  })

  test('should display correct icon for warning status', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).not.toBeNull())
    await page.goto('progress#slot-icon-status')

    const progressLocator = page.getByRole('progressbar').nth(1)
    const iconLocator = progressLocator.locator('svg')

    await expect(progressLocator).toHaveClass(/is-warning/)
    await expect(iconLocator).toBeVisible()
    await expect(iconLocator.locator('.meh_svg__st0').first()).toBeVisible()
  })

  test('should display correct icon for exception status', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).not.toBeNull())
    await page.goto('progress#slot-icon-status')

    const progressLocator = page.getByRole('progressbar').nth(2)
    const iconLocator = progressLocator.locator('svg')

    await expect(progressLocator).toHaveClass(/is-exception/)
    await expect(iconLocator).toBeVisible()
    await expect(iconLocator.locator('.frown_svg__st0').first()).toBeVisible()
  })
})
