import { test, expect } from '@playwright/test'

test('关闭加载中状态', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-grid-loading-tip#tiny-first-menu-grid-loading-off-tip')
  await page.getByRole('button', { name: '重试' }).click()
  await expect(page.getByText('暂无数据')).toBeVisible()
})
