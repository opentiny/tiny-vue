import { test, expect } from '@playwright/test'

test('事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('cascader#events')
  await page.getByRole('textbox', { name: '请选择' }).click()
  await expect(page.getByText('当前触发了:visible-change 事件,当前状态为：true')).toBeVisible()
  await expect(page.getByText('当前触发了:focus 事件')).toBeVisible()
})
