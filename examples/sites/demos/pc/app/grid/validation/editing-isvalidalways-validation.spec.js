import { test, expect } from '@playwright/test'

test('隐藏列编辑时校验', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())

  const demo = page.locator('#validation-editing-isvalidalways-validation')
  await page.goto('grid-validation#validation-editing-isvalidalways-validation')
  await demo.locator('.tiny-grid-default-input').first().fill('GF')

  await expect(page.getByRole('tooltip', { name: '名称长度在 3 到 50 个字符' })).toBeVisible()
})
