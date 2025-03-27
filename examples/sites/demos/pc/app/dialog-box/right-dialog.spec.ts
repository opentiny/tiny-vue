import { test, expect } from '@playwright/test'

test('右侧弹窗', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dialog-box#right-dialog')
  const demo = page.locator('#right-dialog')
  const dialogBox = demo.locator('.tiny-dialog-box')
  await page.getByRole('button', { name: '右侧弹窗' }).click()
  await expect(dialogBox).toHaveClass(/is-right-slide/)
  await expect(dialogBox).toHaveCSS('top', '0px')
  await expect(dialogBox).toHaveCSS('right', '0px')
})
