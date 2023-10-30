import { test, expect } from '@playwright/test'

test('时间线步骤条', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('steps#timeline-steps')

  const timelineHorizotal = page.locator('#preview .tiny-steps').first()
  const timelineVertical = page.locator('#preview .tiny-steps').nth(1)
  const timelineReverse = page.locator('#preview .tiny-steps').nth(2)

  // 横向时间线
  await expect(timelineHorizotal).toHaveAttribute('type', 'timeline')
  await expect(timelineHorizotal.locator('div').first()).toHaveClass(/tiny-steps-normal/)
  await timelineHorizotal.getByText('运输中').click()
  await expect(timelineHorizotal.locator('.normal').nth(1)).toHaveClass(/process-current/)

  // 竖向步骤条 正序
  await expect(timelineVertical).toHaveAttribute('type', 'timeline')
  await expect(timelineVertical.locator('div').first()).toHaveClass('tiny-steps-timeline')
  await timelineVertical.locator('.icon').nth(2).click()
  await expect(timelineVertical.locator('.timeline').nth(2)).toHaveClass(/process-current/)

  // 竖向步骤条 逆序
  await expect(timelineReverse).toHaveAttribute('type', 'timeline')
  await expect(timelineReverse.locator('div').first()).toHaveClass(/tiny-steps-timeline/)
  await expect(timelineReverse.locator('div').first()).toHaveClass(/reverse/)
  await timelineReverse.locator('div').filter({ hasText: /^3$/ }).click()
  await expect(timelineReverse.locator('.timeline').first()).toHaveClass(/process-current/)
})
