import { test, expect } from '@playwright/test'

test('列头提示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-tip#tip-column-header-tip')
  await page
    .getByRole('cell', { name: '创建日期过长隐藏时显示为省略号并用 tooltip 显示' })
    .getByText('创建日期过长隐藏时显示为省略号并用 tooltip 显示')
    .hover()
  await expect(page.getByRole('tooltip', { name: '创建日期过长隐藏时显示为省略号并用 tooltip 显示' })).toBeVisible()
})
