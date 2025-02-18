import { test, expect } from '@playwright/test'

test('PopEditor change 事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popeditor#events')

  const preview = page.locator('#events')
  const textBox = preview.getByRole('textbox')
  const dialogBox = page.locator('.tiny-dialog-box')
  const confirmBtn = dialogBox.getByRole('button', { name: '确 认' })
  const dataItem = dialogBox.getByRole('row', { name: '1 GFD 科技 YX 公司 福建 福州' }).locator('span')
  const infoModal = page.getByText('值变为 1,{"id":"1","name":"GFD 科技 YX 公司","city":"福州","province":"福建"}')

  await textBox.click()
  await dataItem.click()
  await confirmBtn.click()
  await expect(dialogBox).not.toBeVisible()
  await expect(textBox).toHaveValue('GFD 科技 YX 公司')
  await expect(infoModal).toBeVisible()
})
