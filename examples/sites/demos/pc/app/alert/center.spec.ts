import { test, expect } from '@playwright/test'

test('测试 Alert 提示内容是否居中', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('alert#center')

  const alert = page.locator('.tiny-alert')

  await expect(alert).toHaveClass(/is-center/)
  await expect(alert).toHaveCSS('justify-content', 'center')
})
