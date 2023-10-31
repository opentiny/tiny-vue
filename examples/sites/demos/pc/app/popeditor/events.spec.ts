import { test, expect } from '@playwright/test'

test('PopEditor change 事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popeditor#events')

  const preview = page.locator('#preview')
  const textBox = preview.getByRole('textbox')
  const dialogBox = page.locator('.tiny-dialog-box')
  const confirmBtn = dialogBox.getByRole('button', { name: '确 认' })
  const cancelBtn = dialogBox.getByRole('button', { name: '取 消' })
  const dataItem = dialogBox.getByRole('row', { name: '1 GFD科技YX公司 福建 福州' }).locator('span')
  const infoModal = page.getByText('值变为1,{"id":"1","name":"GFD科技YX公司","city":"福州","province":"福建"}')

  await textBox.click()
  await dataItem.click()
  await confirmBtn.click()
  await expect(dialogBox).not.toBeVisible()
  await expect(textBox).toHaveValue('GFD科技YX公司')
  await expect(infoModal).toBeVisible()
})
