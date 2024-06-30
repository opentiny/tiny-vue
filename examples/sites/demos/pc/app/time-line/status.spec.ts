import { test, expect } from '@playwright/test'

test.describe('节点状态', () => {
  test('autoColor属性设置节点状态', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('time-line#status')

    const timeline = page.locator('#status .tiny-timeline').first()
    const timelineItems = timeline.locator('.tiny-timeline-item')

    // 默认状态
    await expect(timelineItems.first()).toHaveClass(/process-wait/)
    await expect(timelineItems.first().locator('.icon')).toHaveCSS('border-color', 'rgb(87, 93, 108)')
    await expect(timelineItems.first().locator('.icon .number')).toHaveCSS('color', 'rgb(87, 93, 108)')

    // 成功状态
    await expect(timelineItems.nth(1)).toBeVisible()
    await expect(timelineItems.nth(1).locator('.icon')).toHaveCSS('border-color', 'rgb(94, 124, 224)')
    await expect(timelineItems.nth(1).locator('.icon .icon-yes')).toHaveCSS('fill', 'rgb(94, 124, 224)')

    // 警告状态
    await expect(timelineItems.nth(2).locator('.icon.icon-warning')).toBeVisible()
    await expect(timelineItems.nth(2).locator('.icon')).toHaveCSS('background-color', 'rgb(250, 152, 65)')
    await expect(timelineItems.nth(2).locator('.icon .icon-warning')).toHaveCSS('fill', 'rgb(255, 255, 255)')

    // 异常状态
    await expect(timelineItems.nth(3).locator('.icon')).toBeVisible()
    await expect(timelineItems.nth(3).locator('.icon')).toHaveCSS('border-color', 'rgb(246, 111, 106)')
    await expect(timelineItems.nth(3).locator('.icon .icon-error')).toHaveCSS('fill', 'rgb(222, 80, 78)')

    // 禁用状态
    await expect(timelineItems.nth(5)).toHaveClass(/process-disabled/)
    await expect(timelineItems.nth(5).locator('.icon')).toHaveCSS('background-color', 'rgb(245, 245, 246)')
    await expect(timelineItems.nth(5).locator('.icon .number')).toHaveCSS('color', 'rgb(173, 176, 184)')
  })

  test('type属性设置节点状态', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('time-line#status')

    const timeline = page.locator('#status .tiny-timeline').nth(1)
    const timelineItems = timeline.locator('.tiny-timeline-item')

    await expect(timelineItems.first()).toHaveClass(/timeline-item--primary/)
    await expect(timelineItems.first().locator('.dot')).toHaveCSS('background-color', 'rgb(223, 225, 230)')
    await expect(timelineItems.nth(1)).toHaveClass(/timeline-item--success/)
    await expect(timelineItems.nth(1).locator('.dot')).toHaveCSS('background-color', 'rgb(80, 212, 171)')

    await expect(timelineItems.nth(2)).toHaveClass(/timeline-item--warning/)
    await expect(timelineItems.nth(2).locator('.dot')).toHaveCSS('background-color', 'rgb(250, 152, 65)')
    await expect(timelineItems.nth(3)).toHaveClass(/timeline-item--danger/)
    await expect(timelineItems.nth(3).locator('.dot')).toHaveCSS('background-color', 'rgb(246, 111, 106)')
    await expect(timelineItems.nth(4)).toHaveClass(/timeline-item--info/)
    await expect(timelineItems.nth(4).locator('.dot')).toHaveCSS('background-color', 'rgb(94, 124, 224)')
  })
})
