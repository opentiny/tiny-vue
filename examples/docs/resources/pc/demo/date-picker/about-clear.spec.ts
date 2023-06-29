import { test, expect } from '@playwright/test'

test('[DatePicker] 测试清除输入', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/date-picker/about-clear')
  const dateInputHasText = page.getByRole('textbox', { name: '2023-05-24' })
  await expect(dateInputHasText).toBeVisible()
  await dateInputHasText.hover()
  await page.locator('div:nth-child(2) > .tiny-date-editor .tiny-input__icon-container > svg').first().click()
  await expect(dateInputHasText).not.toBeVisible()
})
