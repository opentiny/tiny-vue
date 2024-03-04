import { test, expect } from '@playwright/test'

test('固定居中', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-empty#empty-empty-data-iscenter')

  // 空数据时判断默认提示成功
  await expect(page.getByText('暂无数据').first()).toBeVisible()

  // 判断是否居中
  await expect(page.locator('.empty-center-block')).toHaveCSS('justify-content', 'center')
})
