import { test, expect } from '@playwright/test'

test('PopEditor 设置历史记录标签页', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popeditor#show-history')

  const preview = page.locator('#preview')
  const textBox = preview.getByRole('textbox')
  const dialogBox = page.locator('.tiny-dialog-box')
  const history = dialogBox.getByText('所有数据列表')

  // 点击文本框，显示历史记录标签页
  await textBox.click()
  await expect(dialogBox).toBeVisible()
  await expect(history).toBeVisible()
  await expect(dialogBox.locator('.tabs-body-item')).toBeVisible()
})
