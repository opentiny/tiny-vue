import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('calendar#custom-calendar-toolbar')
  const pcDemo = page.locator('.pc-demo')
  const year = new Date().getFullYear()
  const month = new Date().getMonth() + 1
  const day = new Date().getDate()
  const nowDate = year + '-' + month + '-' + day
  // 校验选中功能
  const selectDemo = pcDemo
    .getByRole('row', { name: '3 4 5 6 7 8 9' })
    .getByRole('cell', { name: '6' })
    .locator('div')
    .first()
  selectDemo.click()
  await expect(selectDemo).toHaveClass('tiny-calendar__day selected')
  // 校验插槽日期按钮是否生效
  const time = pcDemo.getByText('时间：')
  pcDemo.getByRole('button', { name: '今天' }).click()
  await expect(time).toHaveText('时间：' + nowDate)
})
