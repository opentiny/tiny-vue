import { test, expect } from '@playwright/test'

test('宽度', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('http://127.0.0.1:7130/pc/milestone/milestone-space')

  const nodes = page.locator('.tiny-milestone__node')
  const nodeCount = 6
  for (let i = 0; i < nodeCount; i++) {
    await expect(nodes.nth(i)).toHaveCSS('width', '120px')
  }
})
