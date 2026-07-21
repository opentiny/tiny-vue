import { test, expect } from '@playwright/test'

test('插槽定制', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('flowchart#slots')

  const preview = page.locator('#slots')
  const flowchart = preview.locator('.tiny-flow-chart')
  const nodes = flowchart.locator('.tiny-flow-chart__node-icon-wrapper')
  await expect(flowchart).toBeVisible()
  await expect(flowchart.locator('.tiny-flow-chart__canvas')).toBeVisible()
  await expect(nodes).toHaveCount(14)

  // content 插槽：下拉形式，点击「处理人(3)」展开后显示表单列表（弹层可能 teleport 到 body）
  const trigger = flowchart.locator('.flowchart-content-trigger')
  await expect(trigger).toBeVisible()
  await expect(trigger).toContainText('处理人(3)')
  await trigger.click()
  const contentSlot = page.locator('.flowchart-content-slot')
  await expect(contentSlot).toBeVisible()
  await expect(contentSlot).toContainText('张三')
  await expect(contentSlot).toContainText('李四')
  await expect(contentSlot).toContainText('王五')
})
