import { test, expect } from '@playwright/test'

test('测试是否图标按钮', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('button#icon')

  const demo = page.locator('#icon')
  const button = demo.locator('.tiny-button')
  await expect(button.first().locator('svg')).toBeVisible()
  await expect(button.nth(1).locator('svg')).toBeVisible()
  await expect(button.nth(2).locator('svg')).toBeVisible()
  await expect(button.nth(3).locator('svg')).toBeVisible()
  await expect(button.nth(4).locator('svg')).toBeVisible()
  await expect(button.nth(5).locator('svg')).toBeVisible()
  await expect(button.nth(6).locator('svg')).toBeVisible()
  await expect(button.nth(7).locator('svg')).toBeVisible()
})
