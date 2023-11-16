import { test, expect } from '@playwright/test'

test('测试有密码校验', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('form#custom-validation-rule')

  const preview = page.locator('#preview')
  const form = preview.locator('.tiny-form')
  const submitButton = form.getByRole('button', { name: '注册' })
  const username = form.locator('input[type="text"]')
  const password = form.locator('input[type="password"]')
  const usernameValid = page.getByText('表单项被校验后触发的事件,所校验字段为:username')
  const passwordValid = page.getByText('表单项被校验后触发的事件,所校验字段为:password')

  // 校验提示出现
  await submitButton.click()
  await expect(usernameValid).toBeVisible()
  await expect(page.getByText('校验不通过！！')).toBeVisible()
  await expect(passwordValid).toBeVisible()
  await expect(preview.getByText('必填').first()).toBeVisible()
  await expect(preview.getByText('必填').nth(1)).toBeVisible()

  const noValidUsername = '1'
  const validUsername = '123'
  const noValidPassword = '1'
  const validPassword = 'Test1234'
  await username.click()
  await username.fill(noValidUsername)
  await expect(preview.getByText('长度必须不小于2')).toBeVisible()
  await username.fill(validUsername)
  await expect(preview.getByText('长度必须不小于2')).not.toBeVisible()
  await password.click()
  await password.fill(noValidPassword)
  await password.blur()
  await expect(preview.getByText('最少八个字符，至少包含一个大写字母，一个小写字母和一个数字')).toBeVisible()
  await password.click()
  await password.fill(validPassword)
  await password.blur()
  await expect(preview.getByText('最少八个字符，至少包含一个大写字母，一个小写字母和一个数字')).not.toBeVisible()
  // 检验提示不出现
  await submitButton.click()
  await expect(page.getByText('校验不通过！！')).not.toBeVisible()
  await expect(passwordValid).not.toBeVisible()
  await expect(preview.getByText('必填').first()).not.toBeVisible()
  await expect(preview.getByText('必填').nth(1)).not.toBeVisible()
})

test('测试清除密码校验', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('form#custom-validation-rule')

  const preview = page.locator('#preview')
  const form = preview.locator('.tiny-form')
  const cleanButton = form.getByRole('button', { name: '清除密码校验' })
  const submitButton = form.getByRole('button', { name: '注册' })
  const username = form.locator('input[type="text"]')
  const password = form.locator('input[type="password"]')
  const usernameValid = page.getByText('表单项被校验后触发的事件,所校验字段为:username')
  const passwordValid = page.getByText('表单项被校验后触发的事件,所校验字段为:password')

  // 校验提示出现
  await cleanButton.click()
  await submitButton.click()
  await expect(usernameValid).toBeVisible()
  await expect(page.getByText('校验不通过！！')).toBeVisible()
  await expect(passwordValid).not.toBeVisible()
  await expect(preview.getByText('必填').first()).toBeVisible()
  await expect(preview.getByText('必填').nth(1)).not.toBeVisible()

  const noValidUsername = '1'
  const validUsername = '123'
  const noValidPassword = '1'
  const validPassword = 'Test1234'
  await username.click()
  await username.fill(noValidUsername)
  await expect(preview.getByText('长度必须不小于2')).toBeVisible()
  await username.fill(validUsername)
  await expect(preview.getByText('长度必须不小于2')).not.toBeVisible()
  await password.click()
  await password.fill(noValidPassword)
  await password.blur()
  await expect(preview.getByText('最少八个字符，至少包含一个大写字母，一个小写字母和一个数字')).not.toBeVisible()
  await password.click()
  await password.fill(validPassword)
  await password.blur()
  await expect(preview.getByText('最少八个字符，至少包含一个大写字母，一个小写字母和一个数字')).not.toBeVisible()
  // 检验提示不出现
  await submitButton.click()
  await expect(page.getByText('校验不通过！！')).not.toBeVisible()
  await expect(passwordValid).not.toBeVisible()
  await expect(preview.getByText('必填').first()).not.toBeVisible()
  await expect(preview.getByText('必填').nth(1)).not.toBeVisible()
})
