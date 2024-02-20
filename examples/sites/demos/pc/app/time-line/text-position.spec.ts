import { test, expect } from '@playwright/test'

test('节点名称位置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-line#text-position')

  const timeline = page.locator('.pc-demo .tiny-steps')
  const nodes = timeline.locator('.normal')

  // 节点名称位于序号右侧
  await expect(timeline.locator('.tiny-steps-normal')).toHaveClass(/text-right/)

  // 点击切换节点状态
  await nodes.first().locator('.name').click()
  await expect(nodes.first()).toHaveClass(/process-current/)
  await expect(nodes.nth(1)).toHaveClass(/process-wait/)
  await nodes.nth(2).locator('.name').click()
  await expect(nodes.nth(2)).toHaveClass(/process-current/)
  await expect(nodes.nth(1)).toHaveClass(/process-done/)
})
