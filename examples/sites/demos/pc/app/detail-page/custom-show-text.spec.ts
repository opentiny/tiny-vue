import { test, expect } from '@playwright/test'

test('自定义展示文本', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('detail-page#custom-show-text')
  await expect(
    page.getByText('数据：标题1--测试文本1标题2--测试文本2标题3--测试文本3标题4--测试文本4标题5--测试文本5')
  ).toBeVisible()
  await page
    .locator('div')
    .filter({ hasText: /^数据：$/ })
    .getByRole('img')
    .click()
  await expect(page.getByText('个性化', { exact: true })).toBeVisible()
  await expect(page.getByText('文本字段')).toBeVisible()
  await expect(page.getByText('勾选隐藏')).toBeVisible()
  await expect(page.getByRole('button', { name: '取消修改' })).toBeVisible()
})
