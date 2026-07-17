import { expect, test } from '@playwright/test'

test('是否正常禁用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())

  await page.goto('tag#disabled')
  await page.waitForLoadState('networkidle')

  // 修正：用 #disabled 限定当前 demo 范围，避免匹配到其他 demo 的"标签"
  const tags = page.locator('#disabled .tiny-tag')
  await expect(tags).toHaveCount(3)

  await expect(tags.nth(0)).toHaveClass(/is-disabled/)
  await expect(tags.nth(1)).toHaveClass(/is-disabled/)
  await expect(tags.nth(2)).toHaveClass(/is-disabled/)

  // 定位最后一个标签的关闭按钮
  const lastTag = tags.last()
  const closeBtn = lastTag.locator('.tiny-tag__close')
  await expect(closeBtn).toBeVisible()

  // 尝试点击关闭按钮（disabled 状态下应无响应）
  await closeBtn.click()

  // 验证禁用状态下标签未被删除，仍然可见且数量不变
  await expect(lastTag, '禁用状态下标签不应被关闭').toBeVisible()
  await expect(tags).toHaveCount(3)
})
