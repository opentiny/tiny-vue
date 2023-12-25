import { test, expect } from '@playwright/test'

test('自定义工具栏', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('calendar#custom-calendar-toolbar')
  const pcDemo = page.locator('.pc-demo')
  const year = new Date().getFullYear()
  const month = new Date().getMonth() + 1
  const day = new Date().getDate()
  const nowDate = year + '-' + month + '-' + day
  const selectedDay = page.getByRole('cell', { name: '14' }).locator('div').first()
  const time = pcDemo.getByText('时间：')
  // 校验选中功能
  await selectedDay.click()
  await expect(selectedDay).toHaveClass(/selected/)
  // 校验插槽日期按钮是否生效
  await pcDemo.getByRole('button', { name: '今天' }).click()
  await expect(time).toHaveText('时间：' + nowDate)
})
