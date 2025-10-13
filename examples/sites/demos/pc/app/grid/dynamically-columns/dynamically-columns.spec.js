import { test, expect } from '@playwright/test'

test('根据日期动态生成列', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-dynamically-columns#dynamically-columns-dynamically-columns')
  const demo = page.locator('#dynamically-columns-dynamically-columns')
  await demo.locator('.tiny-picker.tiny-date-container').click()
  await page.getByText('12 月').first().click()
  await page.getByText('2 月').nth(2).click()
  await expect(page.getByRole('cell', { name: '12' }).first()).toBeVisible()
})
