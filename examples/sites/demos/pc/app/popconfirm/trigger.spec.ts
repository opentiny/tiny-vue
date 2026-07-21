import { test, expect } from '@playwright/test'

test('触发方式', async ({ page }) => {
  const pageErrors: Error[] = []
  page.on('pageerror', (error) => pageErrors.push(error))

  await page.goto('popconfirm#trigger')
  const demo = page.locator('#trigger')

  // 点击按钮
  const clickBtn = demo.locator('.tiny-popconfirm .tiny-popconfirm__reference .tiny-button').nth(1)
  await clickBtn.click()

  const visiblePopover = page.locator('.tiny-popconfirm-popover[aria-hidden="false"]')

  // 等待并验证可见
  await expect(visiblePopover).toBeVisible({ timeout: 5000 })

  // 验证标题样式
  const title = visiblePopover.locator('.tiny-popconfirm-popover__header .tiny-popconfirm-popover__title')
  await expect(title).toHaveCSS('font-weight', '600')

  expect(pageErrors).toHaveLength(0)
})
