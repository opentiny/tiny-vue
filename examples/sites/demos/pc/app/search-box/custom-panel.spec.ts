import { test, expect } from '@playwright/test'

test('自定义二级下拉面板', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('search-box#custom-panel')

  const tags = page.locator('.tvp-search-box__tag')

  await page.getByRole('textbox', { name: '添加筛选条件' }).click()
  await page
    .locator('div')
    .filter({ hasText: /^选择人员$/ })
    .nth(2)
    .click()
  await page.getByRole('textbox', { name: '请输入工号/姓名' }).click()
  await page.getByRole('textbox', { name: '请输入工号/姓名' }).fill('00')
  await page.getByRole('button', { name: '确认' }).click()
  await expect(tags.last()).toHaveText('选择人员 : 00')
})
