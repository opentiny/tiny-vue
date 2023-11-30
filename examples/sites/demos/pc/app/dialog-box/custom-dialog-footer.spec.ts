import { test, expect } from '@playwright/test'

test('dialogBox 自定义底部', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dialog-box#custom-dialog-footer')

  const preview = page.locator('#preview')
  const button = preview.getByRole('button', { name: '弹出Dialog' })
  const dialogBox = preview.locator('.tiny-dialog-box')
  const footer = dialogBox.locator('.tiny-dialog-box__footer')
  const confirm = footer.getByRole('button', { name: '确定' })
  const cancel = footer.getByRole('button', { name: '取消' })
  const customFooter = footer.getByText('自定义footer区域')

  await button.click()
  await expect(dialogBox).toBeVisible()
  await expect(confirm).toHaveCount(0)
  await expect(cancel).toHaveCount(0)
  await expect(customFooter).toBeVisible()
})
