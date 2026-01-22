import { test, expect } from '@playwright/test'

test('自定义消息内容', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popconfirm#slot-message')

  // 等待页面加载完成
  await page.waitForLoadState('networkidle')
  const demo = page.locator('#slot-message')
  const triggerButton = demo.locator('.tiny-popconfirm .tiny-popconfirm__reference .tiny-button')
  await triggerButton.hover()
  const popover = page.locator('.tiny-popconfirm-popover[aria-hidden="false"]')

  await expect(popover).toBeVisible()
  // 验证内容
  await expect(popover.locator('.tiny-popconfirm-popover__content')).toContainText(
    '这是气泡确认框自定义提示内容文本描述'
  )
})
