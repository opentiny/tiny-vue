import { test, expect } from '@playwright/test'

test('表单校验', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('file-upload#form-validation')

  const button = page.locator('button').filter({ hasText: '提交' })
  const tip = page.locator('.tiny-form-item__validate-message')

  await button.click()
  await expect(tip).toHaveText('请至少上传一个文件')
})
