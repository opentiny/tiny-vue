import { test, expect } from '@playwright/test'

test('文字居中', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('alert#center')

  // 等待网络空闲，确保页面完全加载
  await page.waitForLoadState('networkidle')

  const alert = page.locator('.tiny-alert')

  // 首先验证基础类存在
  await expect(alert).toHaveClass(/tiny-alert--info/)
  await expect(alert).toHaveClass(/tiny-alert--normal/)

  // 然后验证居中类
  await expect(alert).toHaveClass(/is-center/)
  await expect(alert).toHaveCSS('justify-content', 'center')
})
