import { test, expect } from '@playwright/test'

test('[DatePicker] 测试文本框不可输入', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/date-picker/editable')
  const dateInputDom = page.getByRole('textbox').nth(1)
  await expect(dateInputDom).toHaveAttribute('readonly', '')
})