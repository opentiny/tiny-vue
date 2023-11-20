import { test, expect } from '@playwright/test'

test('线条颜色和间距', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('http://127.0.0.1:7130/pc/milestone/line-style')

  const nodeLines = page.locator('.tiny-milestone__line')
  const nodes = page.locator('.tiny-milestone__node')
  const nodeCount = 6
  const lineColors = [
    'rgb(255, 0, 0)',
    'rgb(255, 0, 0)',
    'rgb(255, 0, 0)',
    'rgb(255, 0, 0)',
    'rgb(255, 0, 0)',
    'rgb(255, 0, 0)'
  ]

  await expect(nodeLines).toHaveCount(nodeCount)
  await expect(nodes).toHaveCount(nodeCount)
  for (let i = 0; i < nodeCount; i++) {
    await expect(nodes.nth(i)).toHaveCSS('width', '120px')
    await expect(nodeLines.nth(i)).toHaveCSS('background-color', lineColors[i])
  }
})
