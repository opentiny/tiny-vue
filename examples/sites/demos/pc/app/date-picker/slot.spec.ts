import { expect, test } from '@playwright/test'

test('[DatePicker] 测试尺寸设置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('date-picker#slot')

  let btn = page.getByRole('button', { name: '自定义按钮' })
  let nowBtn = page.getByRole('button', { name: '自定义此刻' })

  await page.locator('#slot').getByRole('textbox', { name: '请选择日期', exact: true }).click()
  await page.waitForTimeout(200)
  await expect(btn).toBeVisible()

  await page.getByRole('textbox', { name: '请选择日期时间' }).click()
  await page.waitForTimeout(200)
  await expect(nowBtn).toBeVisible()

  await page.locator('#slot').getByRole('textbox', { name: '请选择周' }).click()
  await page.waitForTimeout(200)
  await expect(btn.first()).toBeVisible()

  await page.locator('#slot').getByRole('textbox', { name: '请选择月份' }).click()
  await page.waitForTimeout(200)
  await expect(btn.first()).toBeVisible()

  await page.locator('#slot').getByRole('textbox', { name: '请选择年份' }).click()
  await page.waitForTimeout(200)
  await expect(btn.first()).toBeVisible()

  await page.getByPlaceholder('开始日期时间').click()
  await page.waitForTimeout(200)
  await expect(btn.first()).toBeVisible()

  await page.locator('#slot').getByPlaceholder('开始月份').click()
  await page.waitForTimeout(200)
  await expect(btn.first()).toBeVisible()

  await page.locator('#slot').getByPlaceholder('开始年份').click()
  await page.waitForTimeout(200)
  await expect(btn.first()).toBeVisible()
})
