import { test, expect } from '@playwright/test'

test('对话框中预览图片', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('image#preview-in-dialog')
  await page.getByRole('button', { name: '弹出Dialog' }).click()
  const dialog = page.getByText('消息加载失败 确 定')
  await expect(dialog).toBeVisible()
})
