import { test, expect } from '@playwright/test'

test('自定义表头', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-header#header-custom-grid-header')
  await expect(page.getByText('Description').nth(2)).toBeVisible()
  await expect(page.getByRole('row', { name: '操作 Description' }).getByText('Description')).toBeVisible()
  await expect(page.getByText('公司简介').first()).toBeVisible()
})
