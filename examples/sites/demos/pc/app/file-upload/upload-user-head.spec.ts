import { test, expect } from '@playwright/test'

test('用户头像上传', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('file-upload#upload-user-head')

  const upload = page.locator('.tiny-upload')
  const addIcon = page.locator('#preview svg').nth(1)

  await expect(upload).toHaveCSS('width', '87px')
  await expect(upload).toHaveCSS('height', '87px')
  await expect(addIcon).toHaveCSS('width', '16px')
  await expect(addIcon).toHaveCSS('height', '16px')
})
