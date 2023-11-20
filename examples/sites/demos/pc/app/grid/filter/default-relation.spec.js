import { test, expect } from '@playwright/test'

test('输入过滤的默认选项', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-filter#filter-default-relation')
  await page.getByRole('cell', { name: '员工数' }).getByRole('img').click()
  await page.getByRole('spinbutton').click()
  await page.getByRole('spinbutton').fill('800')
  await page.getByRole('button', { name: '确定' }).click()
  await expect(page.locator('.tiny-grid-body__row')).toHaveCount(2)
})
