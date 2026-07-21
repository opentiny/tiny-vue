import { test, expect } from '@playwright/test'

test('测试最大宽度', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())

  await page.goto('tag#max-width')
  await page.waitForLoadState('networkidle')

  // 修正：用 #max-width 精确限定当前 demo，避免匹配到其他 demo
  const tag = page.locator('#max-width .tiny-tag').first()

  // 验证标签可见
  await expect(tag).toBeVisible()

  // 验证 max-width CSS 属性
  await expect(tag).toHaveCSS('max-width', '80px')

  // 验证文本溢出样式为省略号（ellipsis）
  await expect(tag).toHaveCSS('text-overflow', 'ellipsis')

  // 修正：textContent 返回 DOM 完整文本（包含被 CSS 隐藏的部分），所以只验证包含原文本即可
  const text = await tag.textContent()
  expect(text).toContain('文本超长超长的标签')

  // 验证标签实际渲染宽度不超过 80px
  const box = await tag.boundingBox()
  expect(box.width).toBeLessThanOrEqual(80)
})
