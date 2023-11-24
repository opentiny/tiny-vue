import { test, expect } from '@playwright/test'

test.describe('Rate 自 定义未选中图标颜色', () => {
  test(' 定义未选中图标颜色', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('rate#not-selected-color')

    const icon = page.locator('.tiny-rate__star > .tiny-svg')

    await expect(icon.nth(4)).toHaveCSS('fill', 'rgb(255, 0, 0)')

    await icon.nth(4).hover()
    await expect(icon.nth(4)).toHaveCSS('fill', 'rgb(255, 0, 0)')

    await icon.nth(4).click()
    await expect(icon.nth(4)).toHaveCSS('fill', 'rgb(255, 187, 51)')
  })
})
