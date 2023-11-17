import { test, expect } from '@playwright/test'

test.describe('rate 大小及占位宽度', () => {
  test('自定义图标大小及占位宽度', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('rate#size-and-space')

    const rate = page.locator('.tiny-rate__star')
    const svg = page.locator('.tiny-rate__star > .tiny-svg')

    await expect(rate.first()).toHaveCSS('width', '36px')
    await expect(svg.nth(1)).toHaveCSS('font-size', '26px')
  })
})
