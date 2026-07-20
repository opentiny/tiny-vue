import { test, expect } from '@playwright/test'

test('文字居中', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('alert#center')

  // 用文本"文字居中"精确过滤，限定在当前 demo
  const alert = page.locator('.tiny-alert').filter({ hasText: '文字居中' })

  // 验证基础类
  await expect(alert).toHaveClass(/tiny-alert--info/)
  await expect(alert).toHaveClass(/tiny-alert--normal/)

  // 验证居中类
  await expect(alert).toHaveClass(/is-center/)
  await expect(alert).toHaveCSS('justify-content', 'center')
})
