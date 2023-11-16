import { test, expect } from '@playwright/test'

test('节点状态', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('steps#node-status')

  const nodes = page.locator('#preview .tiny-steps .tiny-timeline-item')
  await expect(nodes.first()).toHaveClass(/process-current/)
  await expect(nodes.nth(1)).toHaveClass(/process-wait/)
  await expect(nodes.nth(2)).toHaveClass(/process-error/)
  await expect(nodes.nth(3)).toHaveClass(/process-disabled/)

  // 不同状态节点点击后状态的变化
  await nodes.first().click()
  await expect(nodes.first()).toHaveClass(/process-current/)
  await nodes.nth(1).click()
  await expect(nodes.first()).toHaveClass(/process-done/)
  await expect(nodes.nth(1)).toHaveClass(/process-current/)
  await nodes.nth(2).click()
  await expect(nodes.nth(2)).not.toHaveClass(/process-done/)
  await expect(nodes.nth(1).locator('.line')).toHaveClass(/line-done/)
  await nodes.nth(3).click()
  await expect(nodes.nth(3)).not.toHaveClass(/process-done/)
  await expect(nodes.nth(2).locator('.line')).not.toHaveClass(/line-done/)
})
