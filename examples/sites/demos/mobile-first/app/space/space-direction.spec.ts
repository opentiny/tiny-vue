import { test, expect } from '@playwright/test'

test('Space direction 属性', async ({ page }) => {
  // 跳转到 direction 示例
  await page.goto('space#space-direction')

  // 定位容器
  const wrap = page.locator('#space-direction [data-tag="tiny-space"]')

  // 验证 flex-direction 是否为 column
  await expect(wrap).toHaveAttribute('style', /flex-direction:\s*column/)

  // 检查子元素数量
  const items = wrap.locator('.tiny-button')
  await expect(items).toHaveCount(3)
})
