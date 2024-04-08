import { test, expect } from '@playwright/test'

test.describe('自定义关闭', async (page) => {
  test('隐藏关闭图标', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('alert#custom-close')

    const alerts = page.locator('.tiny-mobile-alert')
    const closeIcon = alerts.first().locator('.tiny-mobile-alert__close')

    await expect(closeIcon).not.toBeVisible()
  })

  test('自动关闭', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('alert#custom-close')

    const alerts = page.locator('.tiny-mobile-alert')
    await page.locator('#custom-close span').first().click()
    await expect(alerts.filter({ hasText: '2秒后将自动关闭' })).toBeVisible()
    await page.waitForTimeout(2000)
    await expect(alerts.filter({ hasText: '2秒后将自动关闭' })).not.toBeVisible()
  })

  test('自定义关闭按钮文本', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('alert#custom-close')

    const alert = page.locator('.tiny-mobile-alert').nth(2)
    const closeIcon = alert.locator('.tiny-mobile-alert__close')

    await expect(closeIcon).not.toBeVisible()
    await expect(alert.locator('span').filter({ hasText: '自定义关闭' })).toBeVisible()
  })

  test('关闭close事件', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('alert#custom-close')

    const alert = page.locator('.tiny-mobile-alert').nth(3)
    const toast = page.locator('.tiny-mobile-toast').filter({ hasText: 'close事件!' })
    await alert.locator('.tiny-mobile-alert__close').click()
    await expect(toast).toBeVisible()
  })
})
