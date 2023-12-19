import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('alert#basic-usage')

  const demo = page.locator('#basic-usage')
  const alertBox = demo.locator('.tiny-alert')

  // 颜色边框正确
  await expect(alertBox.first()).toHaveCSS('background-color', 'rgb(235, 246, 255)')
  await expect(alertBox.first()).toHaveCSS('border-bottom-color', 'rgb(190, 204, 250)')
  await expect(alertBox.nth(1)).toHaveCSS('background-color', 'rgb(255, 238, 237)')
  await expect(alertBox.nth(1)).toHaveCSS('border-bottom-color', 'rgb(255, 188, 186)')
  await expect(alertBox.nth(2)).toHaveCSS('background-color', 'rgb(237, 255, 249)')
  await expect(alertBox.nth(2)).toHaveCSS('border-bottom-color', 'rgb(172, 242, 220)')
  await expect(alertBox.nth(3)).toHaveCSS('background-color', 'rgb(255, 243, 232)')
  await expect(alertBox.nth(3)).toHaveCSS('border-bottom-color', 'rgb(255, 208, 166)')

  // 警告可见
  const alertSuccess = demo.locator('.tiny-alert--success')
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
