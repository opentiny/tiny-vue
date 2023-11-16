import { test, expect } from '@playwright/test'

test('测试校验提示是否出现在form上', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('form#validate-type')

  const preview = page.locator('#preview')
  const form = preview.locator('.tiny-form')
  const formItem = form.locator('.tiny-form-item')
  const submitButton = form.getByRole('button', { name: '提交' })

  await submitButton.click()
  await expect(formItem.first().locator('.tiny-form-item__error')).toBeVisible()
  await expect(formItem.first().locator('.tiny-form-item__error')).toHaveText('必填')
  await expect(formItem.nth(1).locator('.tiny-form-item__error')).toBeVisible()
  await expect(formItem.nth(1).locator('.tiny-form-item__error')).toHaveText('不符合规则的日期格式')
  await expect(formItem.nth(2).locator('.tiny-form-item__error')).toBeVisible()
  await expect(formItem.nth(2).locator('.tiny-form-item__error')).toHaveText('必填')
  await expect(formItem.nth(3).locator('.tiny-form-item__error')).toBeVisible()
  await expect(formItem.nth(3).locator('.tiny-form-item__error')).toHaveText('必填')
})
