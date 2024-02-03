import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('wizard#base-flow')

  const stepItems = page.locator('.tiny-wizard__steps-item')
  const charts = stepItems.locator('.tiny-wizard__chart')
  const names = stepItems.locator('.tiny-wizard__name')
  const chartCount = 5
  const itemStatus = [/is-ready/, /is-doing/]
  const descs = ['出差信息填写', '项目信息填写', '主管审批', '权签人审批', '完成申请']
  const readyColor = 'rgb(94, 124, 224)'

  await expect(charts).toHaveCount(chartCount)
  for (let i = 0; i < chartCount; i++) {
    const items = charts.nth(i)
    const itemList = items.locator('span')
    const first = itemList.nth(0)
    const middle = itemList.nth(1)
    const last = itemList.nth(2)

    await expect(items).toHaveCSS('width', '120px')
    await expect(items).toHaveCSS('height', '20px')
    await expect(first).toHaveClass('tiny-wizard__chart-line')
    await expect(middle).toHaveClass(/tiny-wizard__chart-icon/)
    await expect(middle).toHaveText(String(i + 1))
    await expect(last).toHaveClass('tiny-wizard__chart-line')
    await expect(names.nth(i)).toHaveText(descs[i])

    if (i < 2) {
      await expect(stepItems.nth(i)).toHaveClass(itemStatus[i])
      await expect(first).toHaveCSS('background-color', readyColor)
      await expect(middle).toHaveCSS('background-color', readyColor)
    } else {
      await expect(first).toHaveCSS('background-color', 'rgb(194, 196, 199)')
      await expect(middle).toHaveCSS('background-color', 'rgb(223, 225, 230)')
    }
  }
})
