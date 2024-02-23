import { test, expect } from '@playwright/test'

test('测试有密码校验', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('form#custom-validation-rule')

  const demo = page.locator('#custom-validation-rule')
  const form = demo.locator('.tiny-form')
  const submitButton = form.getByRole('button', { name: '注册' })
  const username = form.locator('input[type="text"]')
  const password = form.locator('input[type="password"]')

  // 校验提示出现
  await submitButton.click()
  await expect(page.locator('.tiny-tooltip').getByText('必填').first()).toBeVisible()
  await expect(page.locator('.tiny-tooltip').getByText('必填').nth(1)).toBeVisible()

  const noValidUsername = '1'
  const validUsername = '123'
  const noValidPassword = '1'
  const validPassword = 'Test1234'
  await username.click()
  await username.fill(noValidUsername)
  await expect(page.locator('.tiny-tooltip').getByText('长度必须不小于2')).toBeVisible()
  await username.fill(validUsername)
  await expect(page.locator('.tiny-tooltip').getByText('长度必须不小于2')).not.toBeVisible()
  await password.click()
  await password.fill(noValidPassword)
  await password.blur()
  await expect(
    page.locator('.tiny-tooltip').getByText('最少八个字符，至少包含一个大写字母，一个小写字母和一个数字')
  ).toBeVisible()
  await password.click()
  await password.fill(validPassword)
  await password.blur()
  await expect(
    page.locator('.tiny-tooltip').getByText('最少八个字符，至少包含一个大写字母，一个小写字母和一个数字')
  ).not.toBeVisible()
  // 检验提示不出现
  await submitButton.click()
  await expect(page.locator('.tiny-tooltip').getByText('必填').first()).not.toBeVisible()
  await expect(page.locator('.tiny-tooltip').getByText('必填').nth(1)).not.toBeVisible()
})

test('改变校验规则', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('form#custom-validation-rule')

  const demo = page.locator('#custom-validation-rule')

  const changeButton = demo.getByRole('button', { name: '改变校验规则' })
  await changeButton.click()
  await expect(page.locator('.tiny-tooltip').getByText('必填')).toHaveCount(1)
})
