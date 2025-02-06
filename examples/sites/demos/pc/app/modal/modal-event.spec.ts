import { test, expect } from '@playwright/test'

test('弹窗的事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#modal-event')
  const content = page.locator('.is-message')
  await page.getByRole('button', { name: '打开带事件弹窗' }).first().click()
  await expect(content).toHaveText(/show 事件触发了/)
  await page.getByRole('button', { name: '取消' }).click()
  await expect(content.nth(1)).toHaveText(/cancel 事件触发了/)
  await page.getByRole('button', { name: '打开带事件弹窗' }).nth(1).click()
  await page.getByRole('button', { name: '确定' }).click()
  await expect(content.nth(2)).toHaveText(/hide 事件触发了/)
  await expect(content.nth(1)).toHaveText(/confirm 事件触发了/)
})
