import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('calendar#custom-day-cell')
  const pcDemo = page.locator('.pc-demo')
  const day4 = pcDemo.locator('.tiny-calendar__day').filter({ hasText: ' 通知事项A' }).filter({ hasText: '4' })
  await expect(day4).toBeVisible()
  const day13 = pcDemo.getByRole('cell', { name: '13' }).locator('div').first()
  await expect(day13).toHaveText('13这是一条警告')
  const day14 = pcDemo.getByRole('cell', { name: '14' }).locator('div').first()
  await expect(day14).toHaveText('14这是一条错误这是一条普通通知')
})
