import { test, expect } from '@playwright/test'

test('图片上传', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('fluent-editor#image-upload')
  await page.locator('#image-upload').getByLabel('image').click()
})
