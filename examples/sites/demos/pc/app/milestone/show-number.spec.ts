import { test, expect } from '@playwright/test'

test('序号显示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('milestone#show-number')

  const button = page.getByRole('button').filter({ hasText: '设置 show-number 值为 false' })
  const milestone = page.locator('.tiny-milestone')
  const nodes = page.locator('.tiny-milestone__node')
  const nodeIcons = page.locator('.tiny-milestone__icon')
  const nodeLines = page.locator('.tiny-milestone__line')
  const nodeTitles = page.locator('.tiny-milestone__description-name')
  const nodeDates = page.locator('.tiny-milestone__description-status')
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
      'color': 'rgb(25, 25, 25)',
      'box-shadow': 'none'
    },
    {
      'background-color': 'rgb(255, 255, 255)',
      'color': 'rgb(25, 25, 25)',
      'box-shadow': 'none'
    },
    {
      'background-color': 'rgb(126, 211, 33)',
      'color': 'rgb(255, 255, 255)',
      'box-shadow': 'none'
    },
    {
      'background-color': 'rgb(255, 255, 255)',
      'color': 'rgb(217, 217, 217)',
      'box-shadow': 'none'
    },
    {
      'background-color': 'rgb(255, 255, 255)',
      'color': 'rgb(245, 34, 45)',
      'box-shadow': 'none'
    },
    {
      'background-color': 'rgb(255, 255, 255)',
      'color': 'rgb(250, 173, 20)',
      'box-shadow': 'none'
    }
  ]
  const titles = [
    'completed 完成状态',
    'completed 完成状态',
    'doing 未完成状态',
    'cancel 未完成状态',
    'back 未完成状态',
    'end 未完成状态'
  ]

  await expect(nodes).toHaveCount(nodeCount)
  await expect(nodeLines).toHaveCount(nodeCount)
  await expect(nodeIcons).toHaveCount(nodeCount)
  await expect(nodeTitles).toHaveCount(nodeCount)
  await expect(nodeDates).toHaveCount(nodeCount)
  const { width: totalWidth } = await milestone.boundingBox()
  const nodeWidth = Math.floor(totalWidth / nodeCount / 2)

  for (let i = 0; i < nodeCount; i++) {
    const { width, height } = await nodes.nth(i).boundingBox()
    await expect(width).toBeGreaterThanOrEqual(nodeWidth)
    await expect(height).toBeGreaterThan(84)
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
      await expect(nodeIcons.nth(i)).toHaveText(String(i + 1))
    }

    for (let k in iconStyles[0]) {
      await expect(nodeIcons.nth(i)).toHaveCSS(k, iconStyles[i][k])
    }
  }

  await button.click()

  for (let i = 0; i < nodeCount; i++) {
    if (i < 2) {
      await expect(nodeIcons.nth(i).locator('svg')).toHaveCSS('font-size', '24px')
    } else {
      await expect(nodeIcons.nth(i)).toHaveText('')
    }
  }
})
