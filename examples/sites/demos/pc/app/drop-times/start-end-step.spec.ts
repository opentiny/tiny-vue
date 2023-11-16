import { test, expect } from '@playwright/test'

test('步长与时间区间', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('drop-times#start-end-step')

  const droptimes = page.getByPlaceholder('请选择')
  const option1 = page.locator('.tiny-select-dropdown__item').first()
  const option2 = page.locator('.tiny-select-dropdown__item').nth(1)
  const option3 = page.locator('.tiny-select-dropdown__item').last()

  await droptimes.click()
  await expect(option1).toHaveText('01:00')
  await expect(option2).toHaveText('01:05')
  await expect(option3).toHaveText('12:00')
})
