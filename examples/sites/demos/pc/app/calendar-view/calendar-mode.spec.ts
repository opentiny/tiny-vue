import { test, expect } from '@playwright/test'

test('显示模式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('calendar-view#calendar-mode')
  const monthBtn = page.getByLabel('示例', { exact: true }).locator('label').first()
  const timelineBtn = page.getByLabel('示例', { exact: true }).locator('label').nth(1)
  const scheduleBtn = page.getByLabel('示例', { exact: true }).locator('label').nth(2)
  const dmonthDom = page.locator('.tiny-calendar-view-month__main')
  const timelineDom = page.locator('.tiny-calendar-view-week__timeline')
  const scheduleDom = page.locator('.tiny-calendar-view-week__schedule')
  // 验证按钮是否选中，验证时间组件页面是否正确
  await expect(monthBtn.locator('.tiny-svg')).toHaveClass(/fill-brand/)
  await expect(dmonthDom).toBeVisible()

  await timelineBtn.click()
  await page.waitForTimeout(100)
  await expect(timelineBtn.locator('.tiny-svg')).toHaveClass(/fill-brand/)
  await expect(timelineDom).toBeVisible()

  await scheduleBtn.click()
  await page.waitForTimeout(100)
  await expect(scheduleBtn.locator('.tiny-svg')).toHaveClass(/fill-brand/)
  await expect(scheduleDom).toBeVisible()
})
