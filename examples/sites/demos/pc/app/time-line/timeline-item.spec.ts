import { test, expect } from '@playwright/test'

test('步骤条节点组件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-line#basic-usage')

  const timeline = page.locator('#preview .tiny-steps')
  const nodes = timeline.locator('.normal')

  await expect(nodes.first()).toHaveClass(/process-done/)
  await expect(nodes.first().locator('.time')).toHaveText('2019-11-11 00:01')
  await expect(nodes.first().locator('.icon svg')).toBeVisible()
  await expect(nodes.first().locator('.node-description')).toHaveText('已下单')
  await expect(nodes.nth(1)).toHaveClass(/process-current/)
  await expect(nodes.nth(1).locator('.icon')).toHaveText('2')
  await expect(nodes.nth(2)).toHaveClass(/process-wait/)

  // 点击切换节点状态
  await nodes.first().click()
  await expect(nodes.first()).toHaveClass(/process-current/)
  await expect(nodes.nth(1)).toHaveClass(/process-wait/)
  await nodes.nth(2).click()
  await expect(nodes.nth(2)).toHaveClass(/process-current/)
  await expect(nodes.nth(1)).toHaveClass(/process-done/)
})
