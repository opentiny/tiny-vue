import { test, expect } from '@playwright/test'

test('提交前校验', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  const demo = page.locator('#validation-before-submit-validation')
  await page.goto('grid-validation#validation-before-submit-validation')
  await demo.getByText('GFD 科技 YX 公司').first().click()
  await demo.locator('.tiny-grid-default-input').fill('')

  await page.getByRole('button', { name: '提交数据' }).click()
  await expect(page.getByText('校验不通过', { exact: true })).toBeVisible()

  await page.getByRole('button', { name: '确定' }).click()
  await page.getByRole('button', { name: '保存 Promise' }).click()
  await expect(page.getByText('校验不通过，触发了 catch', { exact: true })).toBeVisible()
})
