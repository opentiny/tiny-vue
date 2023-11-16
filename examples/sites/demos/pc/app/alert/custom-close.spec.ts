import { test, expect } from '@playwright/test'

test('自定义关闭图标，控制警告的再次显示或隐藏', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('alert#custom-close')

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

test('关闭按钮事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('alert#custom-close')

  const alertWarning = page.locator('.tiny-alert')
  const close = alertWarning.locator('.tiny-alert__close')

  // 点击关闭后警告消失，自定义事件modalBox提示出现
  await close.click()
  await expect(alertWarning).toBeHidden()
  await expect(page.locator('.tiny-modal__box')).toBeVisible()
})

test('自定义关闭按钮文本', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('alert#custom-close')

  const alertError = page.locator('.tiny-alert')
  const closeText = alertError.locator('.tiny-alert__close')

  // 自定义按钮文字
  await expect(alertError.locator('.tiny-alert__close')).not.toBeVisible()
  await expect(closeText).toBeVisible()
})

test('不可关闭警告', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('alert#custom-close')

  // 关闭按钮不存在
  const noClosable = page.locator('.tiny-alert').last()
  await expect(noClosable.locator('.tiny-alert__close')).toHaveCount(0)
})
