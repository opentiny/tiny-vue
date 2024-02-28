import { test, expect } from '@playwright/test'

test('基础用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-select#basic-usage')
  const input = page.locator('#basic-usage').locator('.tiny-input__inner')
  const timeInput = page.locator('#basic-usage').getByRole('textbox', { name: '选择时间' })
  await timeInput.click()
  await page.getByText('10:00').click()
  await expect(input).toHaveValue('10:00')

  //   手动输入
  await input.fill('9:00')
  await expect(input).toHaveValue('9:00')
})
