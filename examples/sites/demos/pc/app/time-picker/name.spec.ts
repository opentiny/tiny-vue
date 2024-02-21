import { test, expect } from '@playwright/test'

test('原生属性name', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-picker#name')

  const timePicker = page.getByRole('textbox', { name: '18:40:00' })
  await expect(timePicker).toHaveAttribute('name', 'name')
})
