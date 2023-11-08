import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/file-upload/disabled')

  const upload = page.getByRole('button', { name: '点击上传' })
  const [fileChooser] = await Promise.all([page.waitForEvent('filechooser'), upload.click()])

  await expect(fileChooser).toBeUndefined()
})
