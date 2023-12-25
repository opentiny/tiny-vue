import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('calendar#show-selected-date')
  const pcDemo = page.locator('.pc-demo')
  const selectedDay = page.getByRole('cell', { name: '15' })
  const showText = pcDemo.locator('.tiny-calendar__selected')
  const year = new Date().getFullYear()
  const month = new Date().getMonth() + 1
  const selectedTime = year + '-' + month + '-' + '15'
  await selectedDay.click()
  await expect(showText).toHaveText('You selected date: ' + selectedTime)
})
