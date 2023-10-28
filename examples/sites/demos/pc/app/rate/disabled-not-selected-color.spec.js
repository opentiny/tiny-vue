import { test, expect } from '@playwright/test'

test.describe('Rate 自定义禁用时未选中图标颜色', () => {
  test('icon禁用', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('rate#disabled-not-selected-color')

    const icon = page.locator('.tiny-rate__star > .tiny-svg')

    await expect(icon.nth(0)).toHaveClass(/disabled/)
    await expect(icon.nth(1)).toHaveClass(/disabled/)
    await expect(icon.nth(2)).toHaveClass(/disabled/)
    await expect(icon.nth(3)).toHaveClass(/disabled/)
    await expect(icon.nth(4)).toHaveClass(/disabled/)

    await expect(icon.nth(3)).toHaveCSS('fill', 'rgb(255, 0, 0)')
    await expect(icon.nth(4)).toHaveCSS('fill', 'rgb(255, 0, 0)')
  })
})
