import { test, expect } from '@playwright/test'

test('hover 触发子菜单', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('cascader#expand-trigger')
  await page.getByRole('textbox', { name: '请选择' }).click()
  await page.getByRole('menuitem', { name: '指南' }).hover()
  const cascader = page.getByText('安装开发')
  await expect(cascader).toBeVisible()
})
