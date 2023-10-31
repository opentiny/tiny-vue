import { test, expect } from '@playwright/test'

test('PopEditor 全屏展示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popeditor#resize')

  const preview = page.locator('#preview')
  const textBox = preview.getByRole('textbox')
  const dialogBox = page.locator('.tiny-dialog-box')
  const resizeBtn = dialogBox.getByRole('button', { name: 'Resize' })

  await textBox.click()
  await expect(dialogBox).toBeVisible()
  await expect(dialogBox).not.toHaveClass(/is-fullscreen/)
  await resizeBtn.click()
  await expect(dialogBox).toHaveClass(/is-fullscreen/)
})
