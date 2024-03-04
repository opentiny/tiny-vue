import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('milestone#basic-usage')

  const nodes = page.locator('.tiny-milestone__node')
  const nodeIcons = page.locator('.tiny-milestone__icon')
  const nodeLines = page.locator('.tiny-milestone__line')
  const nodeTitles = page.locator('.tiny-milestone__description-name')
  const nodeDates = page.locator('.tiny-milestone__description-status')
  const flags = page.locator('.tiny-milestone__flag-content')
  const flagLines = page.locator('.tiny-milestone__flag-line')
  const flagLineDots = flagLines.locator('.tiny-milestone__dot')
  const nodeCount = 6
  const iconClasss = [
    /is-completed status-completed/,
    /is-completed status-completed/,
    /status-doing/,
    /status-cancel/,
    /status-back/,
    /status-end/
  ]
  const iconStyles = [
    {
      'background-color': 'rgb(255, 255, 255)',
      'color': 'rgb(94, 124, 224)',
      'box-shadow': 'rgba(94, 124, 224, 0.4) 0px 0px 0px 4px'
    },
    {
      'background-color': 'rgb(255, 255, 255)',
      'color': 'rgb(94, 124, 224)',
      'box-shadow': 'rgba(94, 124, 224, 0.4) 0px 0px 0px 4px'
    },
    {
      'background-color': 'rgb(126, 211, 33)',
      'color': 'rgb(255, 255, 255)',
      'box-shadow': 'rgba(126, 211, 33, 0.4) 0px 0px 0px 4px'
    },
    {
      'background-color': 'rgb(217, 217, 217)',
      'color': 'rgb(255, 255, 255)',
      'box-shadow': 'rgba(217, 217, 217, 0.4) 0px 0px 0px 4px'
    },
    {
      'background-color': 'rgb(245, 34, 45)',
      'color': 'rgb(255, 255, 255)',
      'box-shadow': 'rgba(245, 34, 45, 0.4) 0px 0px 0px 4px'
    },
    {
      'background-color': 'rgb(250, 173, 20)',
      'color': 'rgb(255, 255, 255)',
      'box-shadow': 'rgba(250, 173, 20, 0.4) 0px 0px 0px 4px'
    }
  ]
  const titles = ['completed 状态', 'completed 状态', 'doing 状态', 'cancel 状态', 'back 状态', 'end 状态']
  const flagContents = [/引导用户按照流程完成任务/, /test7欢迎使用vui/, /test8/, /test6/]
  const flagLineColors = ['rgb(245, 34, 45)', 'rgb(245, 34, 45)', 'rgb(126, 211, 33)', 'rgb(94, 124, 224)']

  await expect(nodes).toHaveCount(nodeCount)
  await expect(nodeLines).toHaveCount(nodeCount)
  await expect(nodeIcons).toHaveCount(nodeCount)
  await expect(nodeTitles).toHaveCount(nodeCount)
  await expect(nodeDates).toHaveCount(nodeCount)
  for (let i = 0; i < nodeCount; i++) {
    const { width, height } = await nodes.nth(i).boundingBox()
    await expect(width).toBeGreaterThanOrEqual(118)
    await expect(height).toBeGreaterThanOrEqual(88)
    await expect(nodeLines.nth(i)).toHaveCSS('height', '4px')
    await expect(nodeIcons.nth(i)).toHaveClass(iconClasss[i])
    await expect(nodeTitles.nth(i)).toHaveText(titles[i])
    await expect(nodeDates.nth(i)).toHaveText(/2018-9/)

    if (i < 5) {
      const { width: lineWidth } = await nodeLines.nth(i).boundingBox()
      await expect(lineWidth).toBeGreaterThanOrEqual(118)
    } else {
      const { width: lineWidth } = await nodeLines.nth(i).boundingBox()
      await expect(lineWidth).toBeGreaterThanOrEqual(0)
    }
    if (i < 2) {
      await expect(nodeIcons.nth(i).locator('svg')).toHaveCSS('font-size', '12px')
    } else {
      await expect(nodeIcons.nth(i)).toHaveText(String(i - 1))
    }
    if (i < 4) {
      await expect(flags.nth(i)).toHaveCSS('width', '58px')
      await expect(flags.nth(i)).toHaveCSS('padding', '0px')
      await expect(flags.nth(i)).toHaveText(flagContents[i])
      await expect(flagLines.nth(i)).toHaveCSS('width', '1px')
      await expect(flagLines.nth(i)).toHaveCSS('height', '30px')
      await expect(flagLines.nth(i)).toHaveCSS('background-color', flagLineColors[i])
      await flagLineDots.nth(i).isVisible()
    }

    for (let k in iconStyles[0]) {
      await expect(nodeIcons.nth(i)).toHaveCSS(k, iconStyles[i][k])
    }
  }
})
