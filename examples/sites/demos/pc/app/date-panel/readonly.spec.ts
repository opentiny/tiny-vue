import { test, expect } from '@playwright/test'

test('[DatePanel] 测试只读', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('date-panel#readonly')
  await page.getByText('21', { exact: true }).click()
  await expect(page.getByText('-01-05')).toBeVisible()

  await page.getByLabel('上个月').click()
  await page.getByText('18').click()
  await page.getByLabel('下个月').click()
  await expect(page.getByText('-01-05')).toBeVisible()
  await expect(page.getByText('5', { exact: true }).first()).toHaveCSS('background-color', 'rgb(20, 118, 255)')
})
