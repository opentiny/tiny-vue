import { test, expect } from '@playwright/test'

test('Space justify 属性', async ({ page }) => {
  // 跳转到 justify 示例
  await page.goto('space#space-justify')

  // 定位容器
  const wrap = page.locator('#space-justify [data-tag="tiny-space"]')

  // 验证 justify-content 是否为 space-between
  await expect(wrap).toHaveAttribute('style', /justify-content:\s*space-between/)

  // 检查子元素数量
  const items = wrap.locator('.tiny-button')
  await expect(items).toHaveCount(3)
})
