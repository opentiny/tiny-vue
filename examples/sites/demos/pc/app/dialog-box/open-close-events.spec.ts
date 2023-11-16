import { test, expect } from '@playwright/test'

test('弹出与关闭事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dialog-box#open-close-events')

  const dialogBox = page.locator('.tiny-dialog-box')
  await page.getByRole('button', { name: '弹出与关闭事件' }).click()
  await expect(page.getByText('窗口弹出')).toBeVisible()
  await expect(page.getByText('窗口弹出动画完成')).toBeVisible()
  await dialogBox.getByRole('button', { name: '确 定' }).click()
  await expect(page.getByText('窗口关闭')).toBeVisible()
  await expect(page.getByText('窗口关闭动画完成')).toBeVisible()
})
