import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('flowchart#basic-usage')

  const flowchart = page.locator('.pc-demo .tiny-flow-chart')
  const nodes = flowchart.locator('.tiny-flow-chart__node-icon-wrapper')
  await expect(flowchart).toBeVisible()
  await expect(flowchart).toHaveCSS('width', '1024px')
  await expect(flowchart.locator('.tiny-flow-chart__canvas')).toBeVisible()
  await expect(nodes).toHaveCount(14)
  await expect(nodes.first()).toContainText('基础信息')
  await expect(nodes.first()).toContainText('2018.08.02')
  await expect(nodes.nth(1)).toContainText('调职补偿')
})
