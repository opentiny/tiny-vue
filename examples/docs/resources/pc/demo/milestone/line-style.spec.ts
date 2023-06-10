import { test, expect } from '@playwright/test'

test('进度条颜色', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('http://127.0.0.1:7130/pc/milestone/line-style')

  const nodeLines = page.locator('.tiny-milestone__line')
  const nodeCount = 6
  const lineColors = ['rgb(255, 0, 0)', 'rgb(255, 0, 0)', 'rgb(255, 0, 0)', 'rgb(255, 0, 0)', 'rgb(255, 0, 0)', 'rgb(255, 0, 0)']

  await expect(nodeLines).toHaveCount(nodeCount)
  for (let i = 0; i < nodeCount; i++) {
    await expect(nodeLines.nth(i)).toHaveCSS('background-color', lineColors[i])
  }
})
