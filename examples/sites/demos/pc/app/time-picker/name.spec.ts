import { test, expect } from '@playwright/test'

test('原生属性 name', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-picker#name')

  const timePicker = page.locator('#name .tiny-input__inner').first()
  await expect(timePicker).toHaveAttribute('name', 'name')
})
