import { test, expect } from '@playwright/test'

test('文本框不可输入', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-picker#editable')

  const timePicker = page.locator('.tiny-date-editor input')
  await timePicker.hover()
  await page.waitForTimeout(100)
  const closeIcon = page.locator('#editable path').first()

  await expect(timePicker).toHaveValue('18:40:00')
  await timePicker.hover()
  await page.waitForTimeout(100)
  await closeIcon.click()
  await expect(timePicker).toHaveValue('')
  await timePicker.click()
  await page.keyboard.type('19:40:00')
  await expect(timePicker).toHaveValue('')
})
