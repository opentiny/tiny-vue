import { test, expect } from '@playwright/test'

test('尺寸', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('alert#size')

  // 用文本过滤，精确锁定 size demo 里的 4 个 alert
  const smallAlert = page.locator('.tiny-alert').filter({ hasText: 'size 为 small' })
  const mediumAlert = page.locator('.tiny-alert').filter({ hasText: 'size 为 medium' })
  const normalAlert = page.locator('.tiny-alert').filter({ hasText: 'size 为 normal' })
  const largeAlert = page.locator('.tiny-alert').filter({ hasText: 'size 为 large' })

  // 1. 验证各尺寸类名
  await expect(smallAlert).toHaveClass(/tiny-alert--small/)
  await expect(mediumAlert).toHaveClass(/tiny-alert--medium/)
  await expect(normalAlert).toHaveClass(/tiny-alert--normal/)
  await expect(largeAlert).toHaveClass(/tiny-alert--large/)

  // 2. 验证 small / medium 的 padding
  await expect(smallAlert).toHaveCSS('padding-top', '2px')
  await expect(smallAlert).toHaveCSS('padding-bottom', '2px')
  await expect(mediumAlert).toHaveCSS('padding-top', '4px')
  await expect(mediumAlert).toHaveCSS('padding-bottom', '4px')

  // 3. 验证 small / medium / normal 不显示 title，large 显示 title
  await expect(smallAlert.locator('.tiny-alert__title')).toHaveCount(0)
  await expect(mediumAlert.locator('.tiny-alert__title')).toHaveCount(0)
  await expect(normalAlert.locator('.tiny-alert__title')).toHaveCount(0)
  await expect(largeAlert.locator('.tiny-alert__title')).toHaveCount(1)

  // 4. 验证 small / medium 的 close 按钮样式
  const smallClose = smallAlert.locator('.tiny-alert__close')
  const mediumClose = mediumAlert.locator('.tiny-alert__close')
  await expect(smallClose).toHaveCSS('top', '4px')
  await expect(smallClose).toHaveCSS('transform', 'none')
  await expect(smallClose).toHaveCSS('margin-top', '1px')
  await expect(mediumClose).toHaveCSS('top', '6px')
  await expect(mediumClose).toHaveCSS('transform', 'none')
  await expect(mediumClose).toHaveCSS('margin-top', '1px')
})
