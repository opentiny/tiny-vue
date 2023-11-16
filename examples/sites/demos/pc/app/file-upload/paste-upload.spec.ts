import { test, expect } from '@playwright/test'

test('文件多选', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/file-upload/paste-upload')

  const drag = page.locator('.tiny-upload-dragger')
  await expect(drag).toHaveCSS('width', '360px')
  await expect(drag).toHaveCSS('height', '180px')
})
