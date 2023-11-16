import { test, expect } from '@playwright/test'

test('自定义节点图标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('http://127.0.0.1:7130/pc/milestone/custom-icon-slot')

  const nodeIcons = page.locator('.tiny-milestone__icon')
  const nodeCount = 6

  await expect(nodeIcons).toHaveCount(nodeCount)
  for (let i = 0; i < nodeCount; i++) {
    await expect(nodeIcons.nth(i).locator('svg')).toHaveClass(/custom/)
    await expect(nodeIcons.nth(i).locator('svg')).toHaveCSS('font-size', '12px')
  }
})
