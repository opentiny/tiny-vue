import { test, expect } from '@playwright/test'

test.describe('rate 辅助文字及文字颜色', () => {
  test('辅助文字及文字颜色', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('rate#texts-and-text-color')

    const icon = page.locator('.tiny-rate__star > .tiny-svg')
    const text = page.locator('.tiny-rate__text')

    // 辅助文字可见及颜色
    await expect(text).toBeVisible()
    await expect(text).toHaveCSS('color', 'rgb(255, 0, 0)')

    // 选中值与辅助文字对应
    await icon.nth(0).click()
    await expect(text).toHaveText('很差')

    await icon.nth(1).click()
    await expect(text).toHaveText('差')

    await icon.nth(2).click()
    await expect(text).toHaveText('一般')

    await icon.nth(3).click()
    await expect(text).toHaveText('好')

    await icon.nth(4).click()
    await expect(text).toHaveText('很好')
  })
})
