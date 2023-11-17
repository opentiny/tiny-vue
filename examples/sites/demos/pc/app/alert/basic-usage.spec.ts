import { test, expect } from '@playwright/test'

test('Alert 基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('alert#base')

  // 警告可见
  const alertSuccess = page.locator('.tiny-alert--success')
  await expect(alertSuccess).toBeVisible()

  // 状态图标存在
  const icon = alertSuccess.locator('.tiny-alert__icon').first()
  await expect(icon).toBeVisible()

  // 提示内容存在
  const content = alertSuccess.locator('.tiny-alert__content')
  await expect(content).toBeVisible()

  // 点击关闭按钮，警告消失
  const close = alertSuccess.locator('.tiny-alert__close')
  await expect(close).toBeVisible()
  await close.click()
  await expect(alertSuccess).toBeHidden()
})
