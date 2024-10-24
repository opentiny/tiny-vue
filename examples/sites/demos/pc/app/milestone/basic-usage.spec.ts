import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('milestone#basic-usage')

  const milestone = page.locator('.tiny-milestone').nth(1)
  const nodes = milestone.locator('.tiny-milestone__node')
  const nodeIcons = milestone.locator('.tiny-milestone__icon')
  const nodeLines = milestone.locator('.tiny-milestone__line')
  const nodeTitles = milestone.locator('.tiny-milestone__description-name')
  const nodeDates = milestone.locator('.tiny-milestone__description-status')
  const flags = milestone.locator('.tiny-milestone__flag-content')
  const flagLines = milestone.locator('.tiny-milestone__flag-line')
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
      'color': 'rgb(24, 144, 255)',
      'box-shadow': 'none'
    },
    {
      'background-color': 'rgb(255, 255, 255)',
      'color': 'rgb(24, 144, 255)',
      'box-shadow': 'none'
    },
    {
      'background-color': 'rgb(126, 183, 252)',
      'color': 'rgb(255, 255, 255)',
      'box-shadow': 'none'
    },
    {
      'background-color': 'rgb(255, 255, 255)',
      'color': 'rgb(252, 226, 224)',
      'box-shadow': 'none'
    },
    {
      'background-color': 'rgb(255, 255, 255)',
      'color': 'rgb(255, 136, 0)',
      'box-shadow': 'none'
    },
    {
      'background-color': 'rgb(255, 255, 255)',
      'color': 'rgb(250, 173, 20)',
      'box-shadow': 'none'
    }
  ]
  const titles = ['completed 状态', 'completed 状态', 'doing 状态', 'cancel 状态', 'back 状态', 'end 状态']
  const flagContents = [/引导用户按照流程完成任务/, /test7欢迎使用vui/, /test8/, /test6/]
  const flagLineColors = ['rgb(255, 136, 0)', 'rgb(255, 136, 0)', 'rgb(126, 183, 252)', 'rgb(252, 226, 224)']

  await expect(nodes).toHaveCount(nodeCount)
  await expect(nodeLines).toHaveCount(nodeCount)
  await expect(nodeIcons).toHaveCount(nodeCount)
  await expect(nodeTitles).toHaveCount(nodeCount)
  await expect(nodeDates).toHaveCount(nodeCount)
  const { width: totalWidth, height: totalHeight } = await milestone.boundingBox()
  const nodeWidth = Math.floor(totalWidth / nodeCount / 2)
  const nodeHeight = totalHeight - 38
  for (let i = 0; i < nodeCount; i++) {
    const { width, height } = await nodes.nth(i).boundingBox()
    await expect(width).toBeGreaterThanOrEqual(nodeWidth)
    await expect(height).toEqual(nodeHeight)
    await expect(nodeLines.nth(i)).toHaveCSS('height', '1px')
    await expect(nodeIcons.nth(i)).toHaveClass(iconClasss[i])
    await expect(nodeTitles.nth(i)).toHaveText(titles[i])
    await expect(nodeDates.nth(i)).toHaveText(/2018-9/)

    if (i < 5) {
      const { width: lineWidth } = await nodeLines.nth(i).boundingBox()
      await expect(lineWidth).toBeGreaterThanOrEqual(nodeWidth)
    } else {
      const { width: lineWidth } = await nodeLines.nth(i).boundingBox()
      await expect(lineWidth).toBeGreaterThanOrEqual(0)
    }
    if (i < 2) {
      await expect(nodeIcons.nth(i).locator('svg')).toHaveCSS('font-size', '24px')
    } else {
      await expect(nodeIcons.nth(i)).toHaveText(String(i - 1))
    }
    if (i < 4) {
      await expect(flags.nth(i)).toHaveCSS('width', '96px')
      await expect(flags.nth(i)).toHaveCSS('padding', '4px')
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
