import { test, expect } from '@playwright/test'

test('根据日期动态生成列', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-dynamically-columns#dynamically-columns-dynamically-columns')
  await page.getByRole('textbox').nth(1).click()
  await page.getByText('十二月').first().click()
  await page.getByText('二月').nth(2).click()
  await expect(page.getByRole('cell', { name: '12' })).toBeVisible()
})
