import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('hrapprover#basic-usage')
  await page.locator('#preview').getByRole('img').nth(1).click()
  await expect(
    page.getByText(
      '辅助查询编码名称加载中公司加载中一级部门加载中二级部门加载中三级部门加载中四级部门加载中五级部门加载中六级部门加载中七级部门加载中八级部门加载中已选没有权签人'
    )
  ).toBeVisible()
  await expect(page.locator('div').filter({ hasText: /^确定取消$/ })).toBeVisible()
})
