import { test, expect } from '@playwright/test'

test('开启服务请求', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-data-source#tiny-first-menu-request-service')
  await page.getByText('开启服务请求').nth(2).click()
  await page.getByRole('button', { name: '筛选华南区数据' }).click()

  // 判断筛选华南区数据成功
  await expect(page.getByText('WWWW科技YX公司').first()).toBeVisible()
})
