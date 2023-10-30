import { expect, test } from '@playwright/test'

test('[DatePicker] 测试事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('date-picker#events')

  // blur 事件
  await page.getByRole('textbox').nth(1).click()
  await page.getByText('blur：').click()
  const blurEventMessageDom = page.locator('div').filter({ hasText: '可获取组件实例' }).nth(1)
  await expect(blurEventMessageDom).toBeVisible()

  // change 事件
  await page.getByRole('textbox').nth(2).click()
  await page.getByRole('cell', { name: '20' }).getByText('20').last().click()
  const changeEventMessageDom = page.locator('div').filter({ hasText: '组件绑定值' }).nth(1)
  await expect(changeEventMessageDom).toBeVisible()

  // focus 事件
  await page.getByRole('textbox').nth(3).click()
  const focusEventMessageDom = page.locator('div').filter({ hasText: '回调参数为组件实例' }).nth(1)
  await expect(focusEventMessageDom).toBeVisible()
})
