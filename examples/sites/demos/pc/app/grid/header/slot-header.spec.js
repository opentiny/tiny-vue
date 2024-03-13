import { test, expect } from '@playwright/test'

test('配置自定义表头内容的模板', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-header#header-slot-header')
  await expect(page.getByRole('row', { name: '操作 Description' }).getByText('Description')).toBeVisible()
  await expect(page.getByText('Description').nth(1)).toBeVisible()
  await expect(page.getByText('公司简介').first()).toBeVisible()
})
