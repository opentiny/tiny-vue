import { test, expect } from '@playwright/test'

// 测试所有 Alert 自定义图标
test('测试所有 Alert 自定义图标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('alert#icon')

  // 定义预期的图标路径
  const expectedPaths = [
    'M8 1C4.13 1 1 4.13 1 8s3.13 7 7 7 7-3.14 7-7-3.14-7-7-7Z',
    'M8 1C4.13 1 1 4.13 1 8s3.13 7 7 7 7-3.14 7-7-3.14-7-7-7Z',
    'M8 1C4.13 1 1 4.13 1 8s3.13 7 7 7 7-3.14 7-7-3.14-7-7-7Z',
    'M8 1C4.13 1 1 4.13 1 8s3.13 7 7 7 7-3.14 7-7-3.14-7-7-7Z'
  ]

  // 获取页面上所有的 Alert 组件
  const alerts = page.locator('.tiny-alert')

  // 计算 Alert 组件的数量
  const count = await alerts.count()

  // 遍历所有 Alert 组件并验证图标路径
  for (let i = 0; i < count; i++) {
    // 定位第 i 个 Alert 组件
    const alert = alerts.nth(i)
    // 定位图标路径元素
    const iconPath = alert.locator('.tiny-alert__icon path')
    // 验证图标路径
    await expect(iconPath).toHaveAttribute('d', expectedPaths[i])
  }
})

// 测试关闭按钮
test('关闭按钮', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('alert#custom-close')

  const demo = page.locator('#custom-close')
  const customAlert = demo.locator('.tiny-alert').first()
  const defaultClose = customAlert.locator('.tiny-alert__close')
  const customClose = customAlert.locator('.is-custom .tiny-svg')
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

// 测试自定义关闭按钮文本
test('自定义关闭按钮文本', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('alert#custom-close')

  const closeText = await await page.getByLabel('Close', { exact: true })

  await expect(closeText).toHaveText(/关闭/)
})

// 测试关闭按钮事件
test('关闭按钮事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('alert#custom-close')
  const demo = page.locator('#custom-close')
  const alertWarning = demo.locator('.tiny-alert--warning')
  const close = alertWarning.locator('.tiny-alert__close')

  await close.click()
  // 点击关闭后警告消失
  await expect(alertWarning).not.toBeVisible()
})

// 测试不可关闭警告
test('不可关闭警告', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('alert#custom-close')

  // 关闭按钮不存在
  const noClosable = page.locator('.tiny-alert').last()
  await expect(noClosable.locator('.tiny-alert__close')).toHaveCount(0)
})
