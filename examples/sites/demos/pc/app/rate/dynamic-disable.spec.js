import { test, expect } from '@playwright/test'

test.describe('Rate 禁用', () => {
  test('icon禁用', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('rate#dynamic-disable')

    const icon = page.locator('.tiny-rate__star')

    // 测试每个人icon是否禁用，半选icon应选择第一个icon
    await expect(icon.nth(0).locator('svg')).toHaveClass(/disabled/)
    await expect(icon.nth(1).locator('svg')).toHaveClass(/disabled/)
    await expect(icon.nth(2).locator('svg').first()).toHaveClass(/disabled/)
    await expect(icon.nth(3).locator('svg')).toHaveClass(/disabled/)
    await expect(icon.nth(4).locator('svg')).toHaveClass(/disabled/)
  })
})
