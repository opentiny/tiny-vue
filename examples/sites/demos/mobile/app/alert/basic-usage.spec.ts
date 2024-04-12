import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('alert#base')

  const alerts = page.locator('.demo-alert-base .tiny-mobile-alert')

  // 背景色与图标色验证
  await expect(alerts.first()).toHaveCSS('background-color', 'rgb(222, 236, 255)')
  await expect(alerts.first().locator('.tiny-mobile-alert__icon').first()).toHaveCSS('fill', 'rgb(20, 118, 255)')
  await expect(alerts.nth(1)).toHaveCSS('background-color', 'rgb(252, 227, 225)')
  await expect(alerts.nth(1).locator('.tiny-mobile-alert__icon').first()).toHaveCSS('fill', 'rgb(242, 48, 48)')
  await expect(alerts.nth(2)).toHaveCSS('background-color', 'rgb(230, 242, 213)')
  await expect(alerts.nth(2).locator('.tiny-mobile-alert__icon').first()).toHaveCSS('fill', 'rgb(92, 179, 0)')
  await expect(alerts.nth(3)).toHaveCSS('background-color', 'rgb(255, 235, 209)')
  await expect(alerts.nth(3).locator('.tiny-mobile-alert__icon').first()).toHaveCSS('fill', 'rgb(255, 136, 0)')

  // 警告可见
  const alertSuccess = page.locator('.tiny-mobile-alert--success')
  await expect(alertSuccess).toBeVisible()

  // 状态图标存在
  const icon = alertSuccess.locator('.tiny-mobile-alert__icon').first()
  await expect(icon).toBeVisible()

  // 提示内容存在
  const content = alertSuccess.locator('.tiny-mobile-alert__content')
  await expect(content).toBeVisible()

  // 点击关闭按钮，警告消失
  const close = alertSuccess.locator('.tiny-mobile-alert__close')
  await expect(close).toBeVisible()
  await close.click()
  await expect(alertSuccess).toBeHidden()
})
