import { test, expect } from '@playwright/test'

test('测试表单校验规则', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('form#form-validation')

  const preview = page.locator('#preview')
  const form = preview.locator('.tiny-form')

  // 直接提交，查看是否出现检验提示
  await form.getByRole('button', { name: '提交' }).click()
  await expect(page.getByRole('tooltip', { name: '必填' }).first()).toBeVisible()
  await expect(page.getByRole('tooltip', { name: '不符合规则的日期格式' })).toBeVisible()
  await expect(page.getByRole('tooltip', { name: '必填' }).nth(1)).toBeVisible()
  await expect(page.getByRole('tooltip', { name: '必填' }).nth(2)).toBeVisible()
  await expect(page.getByRole('tooltip', { name: '必填 2~11 之间的数字' })).toBeVisible()
  await expect(page.getByRole('tooltip', { name: '必填1.1.1.1' })).toBeVisible()
})

test('测试表单输入变化和失焦是否出现校验', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('form#form-validation')

  const preview = page.locator('#preview')
  const form = preview.locator('.tiny-form')
  const formItem = form.locator('.tiny-form-item')
  const requiredTip = page.getByRole('tooltip', { name: '必填' })

  // 对长度有要求的检验
  const firstInput = formItem.first().locator('input')
  await firstInput.click()
  await firstInput.blur()
  await expect(requiredTip.first()).toBeVisible()
  await firstInput.fill('1')
  await expect(requiredTip.first()).not.toBeVisible()
  await expect(page.getByRole('tooltip', { name: '长度必须不小于2' })).toBeVisible()
  await firstInput.fill('111')
  await expect(page.getByRole('tooltip', { name: '长度必须不小于2' })).not.toBeVisible()

  // 日期选择器的校验
  const datePicker = form.locator('.tiny-date-editor').first().locator('input')
  await datePicker.click()
  // 点击第一项输入去触发失焦，调用blur事件不会将日期选择器收起
  await firstInput.click()
  await expect(page.getByRole('tooltip', { name: '不符合规则的日期格式' })).toBeVisible()
  await datePicker.click()
  await page.locator('.tiny-date-picker').getByText('15').click()
  await expect(page.getByRole('tooltip', { name: '不符合规则的日期格式' })).not.toBeVisible()

  // url输入框
  const urlInput = formItem.nth(2).locator('input')
  const validUrl = 'https://test.com'
  urlInput.fill('1111')
  await expect(page.getByRole('tooltip', { name: '非法 URL 地址' })).toBeVisible()
  urlInput.fill(validUrl)
  await expect(page.getByRole('tooltip', { name: '非法 URL 地址' })).not.toBeVisible()

  // email输入框
  const emailInput = formItem.nth(4).locator('input')
  const validEmail = '111@test.com'
  emailInput.fill('1111')
  await expect(page.getByRole('tooltip', { name: '非法邮件地址' })).toBeVisible()
  emailInput.fill(validEmail)
  await expect(page.getByRole('tooltip', { name: '非法邮件地址' })).not.toBeVisible()

  // 级联选择器
  const cascade = formItem.locator('.tiny-cascader input')
  const cascadeSelect = page.locator('.tiny-cascader-dropdown')
  await cascade.click()
  await firstInput.click()
  await expect(requiredTip.first()).toBeVisible()
  await cascade.click()
  await cascadeSelect.getByText('指南').click()
  await cascadeSelect.getByText('安装').click()
  await expect(requiredTip.first()).not.toBeVisible()

  // numeric输入
  const numeric = formItem.locator('.tiny-numeric').first()
  const increase = numeric.locator('.tiny-numeric__increase')
  await increase.click()
  await expect(page.getByRole('tooltip', { name: '必填 2~11 之间的数字' })).toBeVisible()
  await increase.click()
  await expect(page.getByRole('tooltip', { name: '必填 2~11 之间的数字' })).not.toBeVisible()

  // ip输入
  const ipInput = formItem.locator('.tiny-ip-address input')
  await ipInput.nth(0).fill('2')
  await ipInput.nth(1).fill('2')
  await ipInput.nth(2).fill('2')
  await ipInput.nth(3).fill('2')
  await expect(page.getByRole('tooltip', { name: '必填1.1.1.1' })).toBeVisible()
  await ipInput.nth(0).fill('1')
  await ipInput.nth(1).fill('1')
  await ipInput.nth(2).fill('1')
  await ipInput.nth(3).fill('1')
  await expect(page.getByRole('tooltip', { name: '必填1.1.1.1' })).not.toBeVisible()

  // 提交成功
  const submitButton = form.getByRole('button', { name: '提交' })
  const successModal = page.locator('.tiny-modal__box').getByText('提交成功')
  await formItem.locator('.tiny-radio').first().click()
  await submitButton.click()
  await expect(successModal).toBeVisible()
})
