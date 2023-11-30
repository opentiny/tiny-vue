import { test, expect } from '@playwright/test'

test('关闭按钮', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('alert#custom-close')

  const demo = page.locator('#custom-close')
  const customAlert = demo.locator('.tiny-alert').first()
  const defaultClose = customAlert.locator('.tiny-alert__close')
  const customClose = customAlert.locator('.icon')
  const switchBtn = demo.locator('.tiny-switch')

  // 自定义关闭图标
  await expect(defaultClose).not.toBeVisible()
  await expect(customClose).toBeVisible()

  // 点击自定义关闭按钮，警告消失
  await customClose.click()
  await expect(customAlert).toBeHidden()
  await switchBtn.click()

  // 点击按钮控制警告消失或隐藏
  await expect(customAlert).toBeVisible()
  await switchBtn.click()
  await expect(customAlert).toBeHidden()
  await switchBtn.click()
  await expect(customAlert).toBeVisible()
})

test('自定义关闭按钮文本', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('alert#custom-close')

  const alertError = page.locator('.tiny-alert').nth(1)
  const closeText = alertError.locator('.tiny-alert__close')

  // 自定义按钮文字
  await expect(closeText).not.toBeVisible()
  await expect(alertError.locator('.is-custom').getByText('关闭')).toBeVisible()
})

test('关闭按钮事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('alert#custom-close')

  const alertWarning = page.locator('.tiny-alert--warning')
  const close = alertWarning.locator('.tiny-alert__close')

  // 点击关闭后警告消失，自定义事件modalBox提示出现
  await close.click()
  await expect(alertWarning).not.toBeVisible()
  await expect(page.locator('.tiny-modal__box').getByText('关闭了')).toBeVisible()
})

test('不可关闭警告', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('alert#custom-close')

  // 关闭按钮不存在
  const noClosable = page.locator('.tiny-alert').last()
  await expect(noClosable.locator('.tiny-alert__close')).toHaveCount(0)
})
