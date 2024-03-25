import { test, expect } from '@playwright/test'

test('测试是否图标按钮', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('float-button#icon')

  const demo = page.locator('#icon')
  const button = demo.locator('.tiny-float-button')
  await expect(button.first().locator('svg')).not.toBeNull()
})
