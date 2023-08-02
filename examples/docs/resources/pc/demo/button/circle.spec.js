import { test, expect } from '@playwright/test'

test('测试是否是圆形按钮', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/button/circle')
  await expect(page.locator('.tiny-button').first()).toHaveClass(/is-circle/)
  await expect(page.locator('button:nth-child(2)').first()).toHaveClass(/is-circle/)
  await expect(page.locator('button:nth-child(3)').first()).toHaveClass(/is-circle/)
  await expect(page.locator('button:nth-child(4)').first()).toHaveClass(/is-circle/)
  await expect(page.locator('button:nth-child(5)').first()).toHaveClass(/is-circle/)
  await expect(page.locator('button:nth-child(6)').first()).toHaveClass(/is-circle/)
})
