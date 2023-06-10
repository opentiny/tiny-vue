import { test, expect } from '@playwright/test'

test('测试 Alert 关闭事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/alert/close-events')

  const alert = page.locator('.tiny-alert')
  const close = alert.locator('.tiny-alert__close')

  // 点击关闭后警告消失，自定义事件modalBox提示出现
  await close.click()
  await expect(alert).toBeHidden()
  await expect(page.locator('.tiny-modal__box')).toBeVisible()
})
