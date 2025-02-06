import { test, expect } from '@playwright/test'

test('[DatePanel] 测试事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('date-panel#event')

  await page.getByRole('button', { name: '2025 年' }).click()
  await expect(page.getByRole('cell', { name: '2025' })).toBeVisible()

  await page.getByText('2025').click()
  await expect(page.getByRole('cell', { name: '一月', exact: true })).toBeVisible()

  await page.getByText('六月').click()
  await page.getByRole('cell', { name: '11' }).locator('div').click()
  await expect(page.getByText('触发 面板选中 事件，组件绑定值为：2025-06-')).toBeVisible()
})
