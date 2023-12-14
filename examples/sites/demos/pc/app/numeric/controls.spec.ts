import { test, expect } from '@playwright/test'

test.describe('属性设置', () => {
  test('加减按钮的显示与隐藏', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('numeric#controls')
    const numeric = page.locator('.tiny-numeric')
    await page.getByRole('spinbutton').first().click()
    await page.getByRole('button').nth(2).click()
    await page.getByRole('button').nth(1).click()
    await expect(numeric.first()).toBeVisible()
  })
})
