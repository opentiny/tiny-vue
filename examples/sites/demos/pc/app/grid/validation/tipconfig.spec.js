import { test, expect } from '@playwright/test'

test('错误提示配置项', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  const demo = page.locator('#validation-tipconfig')
  await page.goto('grid-validation#validation-tipconfig')
  await page.getByText('GFD 科技 YX 公司').click()
  await demo.locator('.tiny-grid-default-input').fill('')

  await expect(page.getByRole('tooltip', { name: '名称必填' })).toBeVisible()
})
