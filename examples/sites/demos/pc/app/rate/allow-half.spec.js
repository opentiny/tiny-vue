import { test, expect } from '@playwright/test'

test.describe('Rate 允许半选', () => {
  test('允许半选', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('rate#allow-half')

    // 点击icon前一半允许半选
    const icon = page.locator('.tiny-rate__star > .tiny-svg')
    const rate = await page.locator('.tiny-rate > span:nth-child(1)').boundingBox()
    await page.mouse.click(rate.x + rate.width / 2, rate.y + rate.height / 2)
    await page.waitForTimeout(200)
    await expect(icon.nth(0)).toHaveClass(/ratehalf/)
  })
})
