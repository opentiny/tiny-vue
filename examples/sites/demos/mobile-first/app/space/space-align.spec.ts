import { test, expect } from '@playwright/test'

test('Space align 属性', async ({ page }) => {
  // 跳转到 align 示例
  await page.goto('space#space-align')

  // 定位容器
  const wrap = page.locator('#space-align [data-tag="tiny-space"]')

  // 检查 align 样式
  await expect(wrap).toHaveAttribute('style', /align-items:\s*center/)

  // 检查子元素数量
  const items = wrap.locator('.tiny-button')
  await expect(items).toHaveCount(3)
})
