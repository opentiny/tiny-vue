import { test, expect } from '@playwright/test'

test('标签超长显示提示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('form#overflow-title')

  const demo = page.locator('#overflow-title')
  const form = demo.locator('.tiny-form')
  const formItem = form.locator('.tiny-form-item')
  const firstItemLabel = formItem.first().locator('.tiny-form-item__label')

  await firstItemLabel.hover()
  await expect(page.locator('.tiny-tooltip').getByText('请输入人员信息请输入人员信息')).toBeVisible()
})
