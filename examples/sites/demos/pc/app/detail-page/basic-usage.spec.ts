import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('detail-page#basic-usage')
  await expect(
    page.getByText('数据标题1---测试文本1标题2---测试文本2标题3---测试文本3标题4---测试文本4标题5---测试文本5')
  ).toBeVisible()
  await expect(
    page
      .locator('div')
      .filter({ hasText: /^数据$/ })
      .getByRole('img')
  ).toBeVisible()
  await page
    .locator('div')
    .filter({ hasText: /^数据$/ })
    .getByRole('img')
    .click()
  await expect(
    page.locator('div').filter({ hasText: '文本字段勾选隐藏标题1标题2标题3标题4标题5确认取消' }).nth(2)
  ).toBeVisible()
  await expect(page.locator('div').filter({ hasText: /^个性化标题$/ })).toBeVisible()
  await expect(page.getByRole('button', { name: '确认' })).toBeVisible()
  await page.getByRole('button', { name: '确认' }).click()
  await expect(
    page.locator('div').filter({ hasText: '文本字段勾选隐藏标题1标题2标题3标题4标题5确认取消' }).nth(2)
  ).not.toBeVisible()
})
