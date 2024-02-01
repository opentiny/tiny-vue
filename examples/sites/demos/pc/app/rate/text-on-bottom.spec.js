import { test, expect } from '@playwright/test'

test.describe('rate 图标下方文字提示', () => {
  test('图标下文字提示', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('rate#text-on-bottom')

    const text = page.locator('.tiny-rate__bottom-text')
    // 图标下方文字可见
    await expect(text.nth(0)).toBeVisible()
    await expect(text.nth(1)).toBeVisible()
    await expect(text.nth(2)).toBeVisible()
    await expect(text.nth(3)).toBeVisible()
    await expect(text.nth(4)).toBeVisible()

    // 分值与提示图标下方提示文字对应
    await expect(text.nth(0)).toHaveText(/很差/)
    await expect(text.nth(1)).toHaveText(/差/)
    await expect(text.nth(2)).toHaveText(/一般/)
    await expect(text.nth(3)).toHaveText(/好/)
    await expect(text.nth(4)).toHaveText(/很好/)
  })
})
