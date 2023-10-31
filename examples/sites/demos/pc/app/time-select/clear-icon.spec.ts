import { test, expect } from '@playwright/test'

test('自定义清空图标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-select#clear-icon')
  const timeInput = page.getByPlaceholder('选择时间')
  await timeInput.click()
  await page.getByText('10:00').click()
  await timeInput.hover()
  //   点击图标，清除输入框内容
  await page.locator('#preview').getByRole('img').nth(1).click()
  expect(await page.getByPlaceholder('选择时间').getAttribute('title')).toEqual('')
})
