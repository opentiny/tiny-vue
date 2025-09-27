import { test, expect } from '@playwright/test'

test('Space order 属性', async ({ page }) => {
  // 跳转到 order 示例
  await page.goto('space#space-order')

  // 定位 tiny-space 容器
  const wrap = page.locator('#space-order [data-tag="tiny-space"]')

  // 获取子元素
  const items = wrap.locator('span')

  // 验证渲染顺序
  await expect(items.nth(0)).toHaveText('Item 2')
  await expect(items.nth(1)).toHaveText('Item 3')
  await expect(items.nth(2)).toHaveText('Item 1')
})
