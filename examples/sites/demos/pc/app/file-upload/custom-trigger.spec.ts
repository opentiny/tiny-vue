import { test, expect } from '@playwright/test'

test('自定义触发文件选项框', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('file-upload#custom-trigger')

  const upload = page.locator('.tiny-upload')

  await expect(upload).toHaveText('我是触发源')
})
