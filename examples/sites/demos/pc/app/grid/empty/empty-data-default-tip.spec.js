import { test, expect } from '@playwright/test'

test('默认提示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-empty-data-tip#tiny-first-menu-empty-data-default-tip')

  // 空数据时判断默认提示成功
  await expect(page.getByText('暂无数据')).toHaveText('暂无数据')
})
