import { test, expect } from '@playwright/test'

test('节点点击事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-line#vertical-step-reverse')

  const node1 = page.locator('#preview .tiny-steps .timeline').first()
  const node2 = page.locator('#preview .tiny-steps .timeline').nth(1)

  await node1.locator('.icon').click()
  await expect(page.getByText('触发了click事件：2')).toBeVisible()
  await expect(node1).toHaveClass(/process-current/)

  await node2.locator('.icon').click()
  await expect(page.getByText('触发了click事件：1')).toBeVisible()
  await expect(node2).toHaveClass(/process-current/)
  await expect(node1).not.toHaveClass(/process-current/)
})
