import { test, expect } from '@playwright/test'

test('配置式多级表头', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-header#header-config-grid-header')
  await expect(page.getByText('前期系统反映，本期入金')).toBeVisible()
  await expect(page.getByText('支付机构业务系统中未反映但备付金账户已收到款项')).toBeVisible()
  await expect(page.getByText('业务系统中贷记客户账户金额').nth(2)).toBeVisible()
})
