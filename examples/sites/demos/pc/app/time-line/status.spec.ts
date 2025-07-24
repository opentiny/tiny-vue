import { test, expect } from '@playwright/test'

test.describe('节点状态', () => {
  test('autoColor 属性设置节点状态', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('time-line#status')

    const timeline = page.locator('#status .tiny-timeline').first()
    const timelineItems = timeline.locator('.tiny-timeline-item')

    // 默认状态
    await expect(timelineItems.first()).toHaveClass(/process-wait/)
    await expect(timelineItems.first().locator('.icon')).toHaveCSS('border-color', 'rgb(219, 219, 219)')
    await expect(timelineItems.first().locator('.icon .number')).toHaveCSS('color', 'rgb(128, 128, 128)')

    // 成功状态
    await expect(timelineItems.nth(1)).toBeVisible()
    await expect(timelineItems.nth(1).locator('.icon')).toHaveCSS('border-color', 'rgb(25, 25, 25)')
    await expect(timelineItems.nth(1).locator('.icon .icon-yes')).toHaveCSS('fill', 'rgb(25, 25, 25)')

    // 警告状态
    await expect(timelineItems.nth(2).locator('.icon.icon-warning')).toBeVisible()
    await expect(timelineItems.nth(2).locator('.icon')).toHaveCSS('background-color', 'rgb(255, 136, 0)')
    await expect(timelineItems.nth(2).locator('.icon .icon-warning')).toHaveCSS('fill', 'rgb(255, 255, 255)')

    // 异常状态
    await expect(timelineItems.nth(3).locator('.icon')).toBeVisible()
    await expect(timelineItems.nth(3).locator('.icon')).toHaveCSS('border-color', 'rgb(242, 48, 48)')
    await expect(timelineItems.nth(3).locator('.icon .icon-error')).toHaveCSS('fill', 'rgb(242, 48, 48)')

    // 禁用状态
    await expect(timelineItems.nth(5)).toHaveClass(/process-disabled/)
    await expect(timelineItems.nth(5).locator('.icon')).toHaveCSS('background-color', 'rgb(240, 240, 240)')
    await expect(timelineItems.nth(5).locator('.icon .number')).toHaveCSS('color', 'rgb(194, 194, 194)')
  })

  test('type 属性设置节点状态', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('time-line#status')

    const timeline = page.locator('#status .tiny-timeline').nth(1)
    const timelineItems = timeline.locator('.tiny-timeline-item')

    await expect(timelineItems.first()).toHaveClass(/timeline-item--primary/)
    await expect(timelineItems.first().locator('.dot')).toHaveCSS('background-color', 'rgb(194, 194, 194)')
    await expect(timelineItems.nth(1)).toHaveClass(/timeline-item--success/)
    await expect(timelineItems.nth(1).locator('.dot')).toHaveCSS('background-color', 'rgb(92, 179, 0)')

    await expect(timelineItems.nth(2)).toHaveClass(/timeline-item--warning/)
    await expect(timelineItems.nth(2).locator('.dot')).toHaveCSS('background-color', 'rgb(255, 136, 0)')
    await expect(timelineItems.nth(3)).toHaveClass(/timeline-item--danger/)
    await expect(timelineItems.nth(3).locator('.dot')).toHaveCSS('background-color', 'rgb(242, 48, 48)')
    await expect(timelineItems.nth(4)).toHaveClass(/timeline-item--info/)
    await expect(timelineItems.nth(4).locator('.dot')).toHaveCSS('background-color', 'rgb(20, 118, 255)')
  })
})
