import { test, expect } from '@playwright/test'

test.describe('rate 自定义 3 分段颜色', () => {
  test('hover或选中时三分段呈现不同颜色', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('rate#custom-3-threshold-colors')

    // hover时三分段颜色
    const icon = page.locator('.tiny-rate__star > .tiny-svg')
    await icon.nth(0).hover()
    await expect(icon.nth(0)).toHaveCSS('fill', 'rgb(250, 219, 20)')
    await icon.nth(1).hover()
    await expect(icon.nth(1)).toHaveCSS('fill', 'rgb(250, 219, 20)')
    await icon.nth(2).hover()
    await expect(icon.nth(2)).toHaveCSS('fill', 'rgb(255, 122, 69)')
    await icon.nth(3).hover()
    await expect(icon.nth(3)).toHaveCSS('fill', 'rgb(255, 169, 64)')
    await icon.nth(4).hover()
    await expect(icon.nth(4)).toHaveCSS('fill', 'rgb(255, 169, 64)')

    // 选中时时三分段颜色
    await icon.nth(0).click()
    await expect(icon.nth(0)).toHaveCSS('fill', 'rgb(250, 219, 20)')
    await icon.nth(1).click()
    await expect(icon.nth(1)).toHaveCSS('fill', 'rgb(250, 219, 20)')
    await icon.nth(2).click()
    await expect(icon.nth(2)).toHaveCSS('fill', 'rgb(255, 122, 69)')
    await icon.nth(3).click()
    await expect(icon.nth(3)).toHaveCSS('fill', 'rgb(255, 169, 64)')
    await icon.nth(4).click()
    await expect(icon.nth(4)).toHaveCSS('fill', 'rgb(255, 169, 64)')
  })
})
