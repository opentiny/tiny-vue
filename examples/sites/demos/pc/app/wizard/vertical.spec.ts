import { test, expect } from '@playwright/test'

test('垂直流程图', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('wizard#vertical')

  const wizard = page.locator('.tiny-wizard__vertical')
  const nodeLines = wizard.locator('.tiny-wizard__chart-line')
  const nodeIcons = wizard.locator('.tiny-wizard__chart-icon')
  const nodeNames = wizard.locator('.tiny-wizard__chart-name')
  const nodeCount = 5
  const names = ['提交提交', '直接主管审批通过', '二级主管审批同意', '一级审批通过', '完成完成']

  await expect(nodeLines).toHaveCount(nodeCount)
  await expect(nodeIcons).toHaveCount(nodeCount)
  await expect(nodeNames).toHaveCount(nodeCount)
  for (let i = 0; i < nodeCount; i++) {
    await expect(nodeNames.nth(i)).toHaveText(names[i])
    await expect(nodeLines.nth(i)).toHaveCSS('width', '1px')
    await expect(nodeLines.nth(i)).toHaveCSS('height', '60px')
    await expect(nodeIcons.nth(i)).toHaveCSS('height', '32px')

    if (i === 4) {
      await expect(nodeLines.nth(i)).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
      await expect(nodeIcons.nth(i)).toHaveCSS('background-color', 'rgb(240, 240, 240)')
    } else if (i === 3) {
      await expect(nodeLines.nth(i)).toHaveCSS('background-color', 'rgb(219, 219, 219)')
      await expect(nodeIcons.nth(i)).toHaveCSS('background-color', 'rgb(255, 255, 255)')
    } else {
      await expect(nodeLines.nth(i)).toHaveCSS('background-color', 'rgb(25, 25, 25)')
      await expect(nodeIcons.nth(i)).toHaveCSS('background-color', 'rgb(255, 255, 255)')
    }
  }
})
