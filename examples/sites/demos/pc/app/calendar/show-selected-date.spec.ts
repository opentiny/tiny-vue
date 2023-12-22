import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('calendar#show-selected-date')
  const pcDemo = page.locator('.pc-demo')
  const selectedDay = pcDemo
    .getByRole('row', { name: '3 4 5 6 7 8 9' })
    .getByRole('cell', { name: '7' })
    .locator('div')
    .first()
  selectedDay.click()
  const showText = pcDemo.locator('.tiny-calendar__selected')
  const year = new Date().getFullYear()
  const month = new Date().getMonth() + 1
  const selectedTime = year + '-' + month + '-' + '7'
  await expect(showText).toHaveText('You selected date: ' + selectedTime)
})
