import { test, expect } from '@playwright/test'

test('清空数据', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-toolbar#tiny-first-menu-clearData')
  await page.getByRole('button', { name: '清空表格第一行数据' }).click()
  await expect(page.getByText('GFD科技YX公司')).toHaveCount(0)
  await page.getByRole('button', { name: '清空公司名称字段数据' }).click()
  await expect(page.getByText('深圳市福德宝网络技术YX公司')).toHaveCount(0)
  await page.getByRole('button', { name: '清空表格所有数据' }).click()
  await expect(page.getByText('龙岩')).toHaveCount(0)
})
