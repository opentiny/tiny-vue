import { test, expect } from '@playwright/test'

test('实心显示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('http://127.0.0.1:7130/pc/milestone/solid-style')

  const button = page.getByRole('button').filter({ hasText: '设置solid值为true' })
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
    /status-xxx/,
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
  const titles = [
    'completed完成状态',
    'completed完成状态',
    'doing未完成状态',
    'xxx未完成状态',
    'back未完成状态',
    'end未完成状态'
  ]

  await expect(nodes).toHaveCount(nodeCount)
  await expect(nodeLines).toHaveCount(nodeCount)
  await expect(nodeIcons).toHaveCount(nodeCount)
  await expect(nodeTitles).toHaveCount(nodeCount)
  await expect(nodeDates).toHaveCount(nodeCount)
  for (let i = 0; i < nodeCount; i++) {
    await expect(nodes.nth(i)).toHaveCSS('width', '128.484px')
    await expect(nodes.nth(i)).toHaveCSS('height', '102px')
    await expect(nodeLines.nth(i)).toHaveCSS('height', '4px')
    await expect(nodeIcons.nth(i)).toHaveClass(iconClasss[i])
    await expect(nodeTitles.nth(i)).toHaveText(titles[i])
    await expect(nodeDates.nth(i)).toHaveText(/2018-9/)

    if (i < 5) {
      await expect(nodeLines.nth(i)).toHaveCSS('width', '128.484px')
    } else {
      await expect(nodeLines.nth(i)).toHaveCSS('width', '0px')
    }
    if (i < 2) {
      await expect(nodeIcons.nth(i).locator('svg')).toHaveCSS('font-size', '12px')
    } else {
      await expect(nodeIcons.nth(i)).toHaveText(String(i - 1))
    }

    for (let k in iconStyles[0]) {
      await expect(nodeIcons.nth(i)).toHaveCSS(k, iconStyles[i][k])
    }
  }

  await button.click()

  for (let i = 0; i < 2; i++) {
    await expect(nodeIcons.nth(i)).toHaveCSS('background-color', 'rgb(94, 124, 224)')
  }
})
