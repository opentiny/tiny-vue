import { test, expect } from '@playwright/test'

test('“此刻”逻辑定制', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('date-picker#now')
  await page.getByRole('textbox', { name: '-11-11 10:10:11' }).first().click()
  await page.getByText('此刻（服务器时间）').click()
  await page.getByRole('button', { name: '确定' }).click()
  await expect(page.getByRole('textbox', { name: '-12-11 18:18:18' })).toBeVisible()
  await page.getByRole('textbox', { name: '-11-11 10:10:11' }).click()
  await page.getByRole('button', { name: '此刻' }).click()
  await expect(page.getByRole('textbox', { name: '-10-08 18:18:18' })).toBeVisible()
})
