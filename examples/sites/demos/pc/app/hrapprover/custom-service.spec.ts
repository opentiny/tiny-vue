import { test, expect } from '@playwright/test'

test('自定义服务', async ({ page }) => {
  await page.goto('hrapprover#custom-service')
  await page.locator('#preview').getByRole('img').nth(1).click()
  await expect(page.getByText('已选权签人备注 test1 test2权限申请 test3资产申请')).toBeVisible()
})
