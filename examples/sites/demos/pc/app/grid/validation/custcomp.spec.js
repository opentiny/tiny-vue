import { test, expect } from '@playwright/test'

test('自定义组件与插槽编辑器校验', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  const demo = page.locator('#validation-custcomp')
  await page.goto('grid-validation#validation-custcomp')
  await page.getByText('GFD 科技 YX 公司').first().click()
  await demo.locator('.tiny-grid-default-input').fill('')

  await expect(page.getByRole('tooltip', { name: '必填' })).toBeVisible()
})
