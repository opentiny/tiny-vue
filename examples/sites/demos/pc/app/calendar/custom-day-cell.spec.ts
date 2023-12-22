import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('calendar#custom-day-cell')
  const pcDemo = page.locator('.pc-demo')
  const day4 = pcDemo.getByRole('cell', { name: '4' }).locator('div').first()
  await expect(day4).toHaveText('4通知事项通知事项A')
  const day13 = pcDemo.getByRole('cell', { name: '13' }).locator('div').first()
  await expect(day13).toHaveText('13这是一条警告')
  const day14 = pcDemo.getByRole('cell', { name: '14' }).locator('div').first()
  await expect(day14).toHaveText('14这是一条错误这是一条普通通知')
})
