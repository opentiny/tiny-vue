import { test, expect } from '@playwright/test'

test('自定义节点内容', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('cascader-panel#custom-option-content')
  await expect(page.getByText('指南自定义(2)组件自定义(6)')).toBeVisible()
  await page.getByRole('menuitem', { name: '指南自定义(2)' }).click()
  await expect(page.getByText('安装自定义(4)开发自定义(2)')).toBeVisible()
})
