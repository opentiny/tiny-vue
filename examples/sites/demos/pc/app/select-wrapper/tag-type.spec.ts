import { test, expect } from '@playwright/test'

test('标签类型', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('select#tag-type')

  const wrap = page.locator('#tag-type')
  const select = wrap.locator('.tiny-select')
  const tag = select.locator('.tiny-tag')

  // 验证是否有对应类型的类名
  await expect(tag.nth(0)).toHaveClass(/tiny-tag--warning/)
})
