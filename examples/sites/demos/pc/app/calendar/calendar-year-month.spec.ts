import { test, expect } from '@playwright/test'

test('日历年月显示测试', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('calendar#calendar-year-month')
  const pcDemo = page.locator('.pc-demo')

  // 验证初始化年月是否正确（2000年5月）
  await expect(pcDemo.locator('.tiny-calendar__tool input').first()).toHaveValue('2000年')
  await expect(pcDemo.locator('.tiny-calendar__tool input').nth(1)).toHaveValue('5 月')

  // 验证年份视图下的月份显示
  await pcDemo.locator('.tiny-calendar__tabs').getByText('年').click()
  await expect(pcDemo.locator('.tiny-calendar__tool input').first()).toHaveValue('2000年')
  await expect(pcDemo.getByRole('cell', { name: '5 月' }).locator('div').first()).toHaveClass(/selected/)
})
