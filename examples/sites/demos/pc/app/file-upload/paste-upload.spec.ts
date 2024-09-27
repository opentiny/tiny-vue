import { test, expect } from '@playwright/test'

test('粘贴上传', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('file-upload#paste-upload')

  const drag = page.locator('.tiny-upload-dragger')
  await expect(drag).toHaveCSS('width', '100px')
  await expect(drag).toHaveCSS('height', '100px')

  const path = require('node:path')
  const pathJpg = path.resolve(__dirname, '测试.jpg')

  await page.goto(pathJpg)

  await page.keyboard.down('Control')
  await page.keyboard.press('KeyC')
  await page.keyboard.up('Control')

  await page.goto('file-upload#paste-upload')

  await page.focus('div.tiny-upload-dragger')

  await page.keyboard.down('Control')
  await page.keyboard.press('KeyV')
  await page.keyboard.up('Control')
})
