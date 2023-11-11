import { test, expect } from '@playwright/test'

test('工具栏自定义插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-toolbar#tiny-first-menu-custom-toolbar')
  await page.getByTitle('点击在vscode中打开').getByRole('img').click()
  await expect(page.getByPlaceholder('请输入公司名称')).toBeVisible()
  await expect(page.getByRole('button', { name: '搜索' })).toBeVisible()
})
