import { test, expect } from '@playwright/test'

test('竖式步骤条', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('steps#vertical-steps')

  const timelineVertical = page.locator('.pc-demo .tiny-steps').first()
  const timelineReverse = page.locator('.pc-demo .tiny-steps').nth(1)

  // 竖向步骤条 正序
  await expect(timelineVertical.locator('.tiny-steps-timeline')).toBeVisible()
  await expect(timelineVertical.locator('.icon').first()).toHaveText('1')
  await expect(timelineVertical.locator('.timeline').nth(1)).toHaveClass(/process-wait/)
  await timelineVertical.locator('.icon').nth(1).click()
  await expect(timelineVertical.locator('.timeline').nth(1)).toHaveClass(/process-current/)

  // 竖向步骤条 逆序
  await expect(timelineReverse.locator('.tiny-steps-timeline')).toHaveClass(/reverse/)
  await expect(timelineReverse.locator('.icon').first()).toContainText('3')
  await expect(timelineReverse.locator('.timeline').first()).toHaveClass(/process-wait/)
  await timelineReverse.locator('.icon').first().click()
  await expect(timelineReverse.locator('.timeline').first()).toHaveClass(/process-current/)
})
