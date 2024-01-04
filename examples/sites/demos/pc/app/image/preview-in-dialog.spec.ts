import { test, expect } from '@playwright/test'

test('测试对话框中预览图片', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('image#preview-in-dialog')

  const preview = page.locator('.pc-demo-container')
  const viewerImage = page.locator('.tiny-image-viewer')
  const btn = preview.getByRole('button', { name: '弹出Dialog' })
  const dialog = page.locator('.pc-demo-container .tiny-dialog-box__title')
  const image = preview.locator('.tiny-image__inner')

  // 打开对话框
  await btn.click()
  await page.waitForTimeout(50)
  await expect(dialog).toBeVisible()
  await expect(image).toBeVisible()

  // 打开预览
  await image.click()
  await page.waitForTimeout(50)
  await expect(viewerImage).toBeVisible()
})
