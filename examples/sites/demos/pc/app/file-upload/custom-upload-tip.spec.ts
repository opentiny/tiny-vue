import { test, expect } from '@playwright/test'

test('自定义上传提示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('file-upload#custom-upload-tip')

  const tip = page.locator('.tiny-upload__tip')

  await expect(tip).toHaveText('只能上传jpg/png文件，且不超过500kb')
})
