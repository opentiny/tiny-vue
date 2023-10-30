import { test, expect } from '@playwright/test'

test('手动勾选全选时触发的事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-event#event-select-all-event')
  await page.getByRole('row', { name: '名称 所属区域 地址 公司简介' }).locator('span').click()

  await expect(page.getByText('触发全选事件')).toBeVisible()
})
