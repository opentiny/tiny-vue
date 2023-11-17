import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
  await page.goto('font#Font-usage-specifications')
  await page.getByText('中文字体集').click()
  await page.getByRole('heading', { name: '用户体验' }).click()
  await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/h1')).toHaveText('用户体验')
  await page.getByRole('heading', { name: '微软雅黑' }).click()
  await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/h5')).toHaveText('微软雅黑')
})
