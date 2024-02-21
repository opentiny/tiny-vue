import { test, expect } from '@playwright/test'

test('自定义展示文本', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('detail-page#custom-show-text')
  await expect(page.getByText('表头详情标题1-描述1标题2-描述2标题3-描述3标题4')).toBeVisible()
  await page
    .locator('div')
    .filter({ hasText: /^表头详情$/ })
    .getByRole('img')
    .click()
  await expect(page.getByText('表头设置', { exact: true })).toBeVisible()
  await expect(page.getByText('表头名称')).toBeVisible()
  await expect(page.getByText('是否隐藏')).toBeVisible()
  await expect(page.getByRole('button', { name: '取消修改' })).toBeVisible()
})
