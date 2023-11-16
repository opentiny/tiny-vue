import { test, expect } from '@playwright/test'

test('选中节点变化', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('cascader-panel#change')
  await page.getByRole('menuitem', { name: '指南' }).click()
  await page.getByRole('menuitem', { name: '安装' }).getByRole('radio').click()
  await expect(page.getByText('change 事件，当前选中的值为:安装；传入的值为:zhinan,anzhuang')).toBeVisible()
})
