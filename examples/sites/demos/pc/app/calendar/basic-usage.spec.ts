import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('calendar#basic-usage')
  const pcDemo = page.locator('.pc-demo')
  const nowDate = new Date().getDate()
  const nowMonth = new Date().getMonth() + 1
  const selectedDay = page.getByRole('cell', { name: '14' }).locator('div').first()
  const selectedMonth = page.getByRole('cell', { name: '7 月' }).locator('div').first()
  // 校验日期，查看页面显示是否是月
  await pcDemo.getByRole('listitem').filter({ hasText: '月' }).nth(2).click()
  await expect(pcDemo.locator('.tiny-calendar > div').last()).toHaveClass(/month/)
  // 校验日期选择，选中的样式有selected
  await selectedDay.click()
  await expect(selectedDay).toHaveClass(/selected/)
  // 校验今天按钮，选中的样式有selected today
  await pcDemo.getByRole('button', { name: '今天' }).click()
  await expect(
    pcDemo
      .getByRole('cell', { name: `${nowDate}` })
      .locator('div')
      .first()
  ).toHaveClass(/selected/)

  // 校验年里的月份代码逻辑一致
  await pcDemo.getByRole('listitem').filter({ hasText: '年' }).nth(2).click()
  await expect(pcDemo.locator('.tiny-calendar > div').last()).toHaveClass(/year/)
  await selectedMonth.click()
  await expect(selectedMonth).toHaveClass(/selected/)
  await pcDemo.getByRole('button', { name: '本月' }).click()
  await expect(
    pcDemo
      .getByRole('cell', { name: `${nowMonth}` + ' 月' })
      .locator('div')
      .first()
  ).toHaveClass(/selected/)
})
