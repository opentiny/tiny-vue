import { test, expect } from '@playwright/test'

test('聚焦时有无下划线', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('link#focus-no-underline')
  const preview = page.locator('#preview')
  let anchor = preview.locator('a').filter({ hasText: '无下划线' })
  await anchor.hover()
  await expect(anchor).toHaveCSS('text-decoration', /none/)
  // 无法获取到伪元素::after，暂时跳过测试
  anchor = preview.locator('a').filter({ hasText: '有下划线' })
  await anchor.hover()
})
