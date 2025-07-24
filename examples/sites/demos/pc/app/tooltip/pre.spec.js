import { test, expect } from '@playwright/test'

test('测试文本预格式化', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())

  await page.goto('tooltip#pre')

  const preview = page.locator('.pc-demo-container')
  let button = preview.getByRole('button', { name: '文本预格式化' })
  let tooltip = page.getByRole('tooltip', { name: '空山新雨后' })

  await page.waitForTimeout(100)
  await button.hover()
  await expect(tooltip).toBeVisible()
  const box = await tooltip.boundingBox()
  expect(box.height).toBeGreaterThan(80) // 预期应该是多行
})
