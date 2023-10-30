import { test, expect } from '@playwright/test'

test.describe('Rate 最大分值', () => {
  test('设置最大分值', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('rate#max-score')

    const icon = page.locator('.tiny-rate__star > .tiny-svg')

    await expect(icon).toHaveCount(8)
  })
})
