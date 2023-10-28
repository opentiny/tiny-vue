import { test, expect } from '@playwright/test'

test('设置组件大小', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('file-upload#size')

  const upload = page.locator('.tiny-file-upload').getByRole('button', { name: '上传' })
  const { width, height } = await upload.boundingBox()

  await expect(upload).toHaveClass(/tiny-button--medium/)
  await expect(width).toEqual(88)
  await expect(height).toEqual(40)
})
