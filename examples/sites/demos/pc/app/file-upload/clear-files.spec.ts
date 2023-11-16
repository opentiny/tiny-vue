import { test, expect } from '@playwright/test'

test('手动清空已上传文件列表', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('file-upload#clear-files')

  const lists = page.locator('.tiny-upload-list__item')
  const clear = page.getByRole('button', { name: '点击清空上传列表' })

  await expect(lists).toHaveCount(2)
  await clear.click()
  await expect(lists).toHaveCount(0)
})
