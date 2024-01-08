import { test, expect } from '@playwright/test'

test('列筛选规则', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-filter#filter-custom-filter')
  await page.getByRole('cell', { name: '名称' }).getByRole('img').click()
  await page.getByRole('textbox').nth(1).click()
  await page.getByRole('textbox').nth(1).press('CapsLock')
  await page.getByRole('textbox').nth(1).fill('WWW')
  await page.getByRole('button', { name: 'confirm' }).click()
  await expect(page.getByRole('cell', { name: 'WWW科技YX公司' })).toBeVisible()
})
