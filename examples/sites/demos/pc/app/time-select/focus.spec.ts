import { test, expect } from '@playwright/test'

test('事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-select#focus')
  await page.getByRole('button', { name: '手动获取焦点' }).click()
  const focus = page.getByRole('textbox', { name: '选择时间' })
  await expect(focus).toBeFocused()
})
