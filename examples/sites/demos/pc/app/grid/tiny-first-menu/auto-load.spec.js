import { test, expect } from '@playwright/test'

test('自动加载数据', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-data-source#tiny-first-menu-auto-load')
  // 判断auto-load 为 false时不加载数据
  await page.getByRole('paragraph').nth(1).click()

  await expect(page.getByText('暂无数据')).toHaveText('暂无数据')
})
