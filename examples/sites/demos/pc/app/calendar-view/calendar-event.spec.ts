import { test, expect } from '@playwright/test'

test('事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('calendar-view#calendar-event')
  const timeInput = page.locator('.tiny-filter-box').locator('.value')
  const timeBtn = page.getByText('2023 年 05 月')
  const leftYear = page.getByRole('button', { name: '前一年' })
  const month6 = page.getByText('六月')
  const leftSvg = page.locator('.header-left > .tiny-svg')
  const rightSvg = page.locator('.header-right > .tiny-svg')
  const todayDom = page.getByRole('listitem').filter({ hasText: '今天' })
  const goToday = page.getByRole('button', { name: '回今天' })
  await timeBtn.click()
  await page.waitForTimeout(100)
  await leftYear.click()
  await page.waitForTimeout(100)
  await month6.click()
  await page.waitForTimeout(100)
  await expect(timeInput).toHaveText('2022 年 06 月')
  await leftSvg.click()
  await page.waitForTimeout(100)
  await expect(timeInput).toHaveText('2022 年 05 月')
  await rightSvg.click()
  await page.waitForTimeout(100)
  await expect(timeInput).toHaveText('2022 年 06 月')
  await goToday.click()
  await page.waitForTimeout(100)
  await expect(todayDom).toHaveClass(/is-eslected/)
})
