import { test, expect } from '@playwright/test'

test.describe('rate change事件', () => {
  test('分数改变时事件', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('rate#rate-events')

    const icon = page.locator('.tiny-rate__star > .tiny-svg')
    const modal = page.locator('.tiny-modal__box')

    await icon.nth(4).click()
    await expect(modal).toBeVisible()
  })
})
