import { test, expect } from '@playwright/test'

test('PopEditor 表单中使用并开启表单校验', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popeditor#condition-form')

  const preview = page.locator('#condition-form')
  await preview
    .locator('div')
    .filter({ hasText: /^文本选择确 认取 消$/ })
    .getByRole('textbox')
    .click()
  await page.getByRole('row', { name: 'GFD 科技 YX 公司 福建 福州' }).locator('path').nth(1).click()
  await page.getByRole('button', { name: '确 认' }).click()
  await preview
    .locator('div')
    .filter({ hasText: /^文本$/ })
    .getByRole('img')
    .click()
  // 更新为 role='alert'，因为表单验证错误提示现在使用 alert 角色以提供更好的可访问性
  const tooltip = page.getByRole('alert', { name: '必填' })
  await expect(tooltip).toBeVisible()
})
