import { test, expect } from '@playwright/test'

test('自定义关闭图标，控制警告的再次显示或隐藏', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/alert/custom-close')

  const alertSuccess = page.locator('.tiny-alert--success')
  const defaultClose = alertSuccess.locator('.tiny-alert__close')
  const customClose = alertSuccess.locator('.icon')
  const btn = page.getByRole('button', { name: '显示或隐藏警告' })

  // 自定义关闭图标
  await expect(defaultClose).not.toBeVisible()
  await expect(customClose).toBeVisible()

  // 点击自定义关闭按钮，警告消失
  await customClose.click()
  await expect(alertSuccess).toBeHidden()
  await btn.click()

  // 点击按钮控制警告消失或隐藏
  await expect(alertSuccess).toBeVisible()
  await btn.click()
  await expect(alertSuccess).toBeHidden()
  await btn.click()
  await expect(alertSuccess).toBeVisible()
})
