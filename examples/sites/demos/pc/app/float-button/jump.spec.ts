import { test, expect } from '@playwright/test'

test('测试按钮跳转', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('float-button#jump')
  const button = page.locator('.tiny-float-button').first()
  await button.click()
  // 监听新页面的弹出
  const [newPage] = await Promise.all([
    page.waitForEvent('popup'),
    page.waitForNavigation({ waitUntil: 'networkidle' })
  ])
  // 切换到新页面
  await newPage.waitForLoadState('networkidle')
})
