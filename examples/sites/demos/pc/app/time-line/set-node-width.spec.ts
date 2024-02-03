import { test, expect } from '@playwright/test'

test('宽度', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-line#set-node-width')

  const node1 = page.locator('#set-node-width .tiny-steps').nth(0).locator('.tiny-timeline-item').first()
  await expect(node1).toHaveCSS('width', '200px')

  const node2 = page.locator('#set-node-width .tiny-steps').nth(1).locator('.tiny-timeline-item').first()
  await expect(node2).toHaveCSS('flex', '0 0 20%')
})
