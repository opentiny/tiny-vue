import { test, expect } from '@playwright/test'

test('自定义清空图标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-select#clear-icon')
  const demo = page.locator('#clear-icon')
  const timeInput = page.getByRole('textbox', { name: '选择时间' })
  const input = demo.locator('.tiny-input__inner')
  await timeInput.click()
  await page.getByText('10:00').nth(1).click()
  await input.hover()
  //   点击图标，清除输入框内容
  await page.locator('#clear-icon svg').first().click()
  await expect(input).toHaveValue('')
})
