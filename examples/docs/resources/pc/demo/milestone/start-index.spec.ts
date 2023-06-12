import { test, expect } from '@playwright/test'

test('序号起始值', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('http://127.0.0.1:7130/pc/milestone/start-index')

  const nodeIcons = page.locator('.tiny-milestone__icon')
  const nodeCount = 6

  await expect(nodeIcons).toHaveCount(nodeCount)
  for (let i = 0; i < nodeCount; i++) {
    await expect(nodeIcons.nth(i)).toHaveText(String(i + 1))
  }
})
