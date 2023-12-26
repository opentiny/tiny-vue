import { test, expect } from '@playwright/test'

test('自定义工具栏', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('calendar#custom-calendar-toolbar')
  const pcDemo = page.locator('.pc-demo')
  const selectedDay = page.getByRole('cell', { name: '10' }).locator('div').first()
  const time = page.locator('.today')

  // 校验选中功能
  await selectedDay.click()
  await page.waitForTimeout(200)
  await expect(selectedDay).toHaveClass(/selected/)
  // 校验插槽日期按钮是否生效
  await pcDemo.getByRole('button', { name: '今天' }).click()
  await page.waitForTimeout(200)
  await expect(time).toHaveClass(/selected/)
})
