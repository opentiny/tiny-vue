import { test, expect } from '@playwright/test'

test('垂直流程图', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('wizard#vertical')

  const wizard = page.locator('.tiny-wizard__vertical')
  const nodeLines = wizard.locator('.tiny-wizard__chart-line')
  const nodeIcons = wizard.locator('.tiny-wizard__chart-icon')
  const nodeNames = wizard.locator('.tiny-wizard__chart-name')
  const nodeCount = 5
  const names = ['提交提交', '直接主管审批通过', '二级主管审批同意', '一级审批', '完成完成']

  await expect(nodeLines).toHaveCount(nodeCount)
  await expect(nodeIcons).toHaveCount(nodeCount)
  await expect(nodeNames).toHaveCount(nodeCount)
  for (let i = 0; i < nodeCount; i++) {
    await expect(nodeNames.nth(i)).toHaveText(names[i])
    await expect(nodeLines.nth(i)).toHaveCSS('width', '4px')
    await expect(nodeLines.nth(i)).toHaveCSS('height', '88px')
    await expect(nodeIcons.nth(i)).toHaveCSS('height', '20px')
    await expect(nodeIcons.nth(i)).toHaveCSS('height', '20px')

    if (i === 3) {
      await expect(nodeLines.nth(i)).toHaveCSS('background-color', 'rgb(194, 196, 199)')
      await expect(nodeIcons.nth(i)).toHaveCSS('background-color', 'rgb(223, 225, 230)')
    } else {
      await expect(nodeLines.nth(i)).toHaveCSS('background-color', 'rgb(94, 124, 224)')
      await expect(nodeIcons.nth(i)).toHaveCSS('background-color', 'rgb(94, 124, 224)')
    }
  }
})
