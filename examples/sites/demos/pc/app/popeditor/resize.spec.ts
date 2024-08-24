import { test, expect } from '@playwright/test'

test('PopEditor 全屏展示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popeditor#resize')

  const wrap = page.locator('#resize')
  const popeditor = wrap.locator('.tiny-popeditor')
  const dialogBox = page.locator('.tiny-dialog-box')
  const resizeSvg = dialogBox.locator('.tiny-dialog-box__resize')

  await popeditor.click()
  await page.waitForTimeout(500)
  await expect(dialogBox).toBeVisible()
  await expect(dialogBox).not.toHaveClass(/is-fullscreen/)
  await resizeSvg.click()
  await expect(dialogBox).toHaveClass(/is-fullscreen/)
})
