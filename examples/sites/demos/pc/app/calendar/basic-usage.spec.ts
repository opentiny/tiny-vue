import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('calendar#basic-usage')
  const pcDemo = page.locator('.pc-demo')
  const nowDate = new Date().getDate()
  // 校验日期，查看页面显示是否是月
  pcDemo.getByRole('listitem').filter({ hasText: '月' }).nth(2).click()
  await expect(pcDemo.locator('.tiny-calendar > div').last()).toHaveClass('tiny-calendar__main month')
  // 校验日期选择，选中的样式有selected
  const demo7 = pcDemo.getByRole('row', { name: '3 4 5 6 7 8 9' })
  demo7.getByText('7').click()
  await expect(demo7.getByRole('cell', { name: '7' }).locator('div').first()).toHaveClass('tiny-calendar__day selected')
  // 校验今天按钮，选中的样式有selected today
  pcDemo.getByRole('button', { name: '今天' }).click()
  await expect(
    pcDemo
      .getByRole('cell', { name: `${nowDate}` })
      .locator('div')
      .first()
  ).toHaveClass('tiny-calendar__day selected today')

  // 校验年里的月份代码逻辑一致
  const nowMonth = new Date().getMonth() + 1
  pcDemo.getByRole('listitem').filter({ hasText: '年' }).nth(2).click()
  await expect(pcDemo.locator('.tiny-calendar > div').last()).toHaveClass('tiny-calendar__main year')
  const demo11 = pcDemo.getByRole('cell', { name: '11 月' }).locator('div').first()
  demo11.click()
  await expect(demo11).toHaveClass('tiny-calendar__day selected')
  pcDemo.getByRole('button', { name: '本月' }).click()
  await expect(
    pcDemo
      .getByRole('cell', { name: `${nowMonth}` + ' 月' })
      .locator('div')
      .first()
  ).toHaveClass('tiny-calendar__day selected this-month')
})
