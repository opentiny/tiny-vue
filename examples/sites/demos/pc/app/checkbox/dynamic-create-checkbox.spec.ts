import { test, expect } from '@playwright/test'

test('动态生成复选框组', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('checkbox#dynamic-create-checkbox')

  const demo = page.locator('#dynamic-create-checkbox')
  await demo.getByRole('checkbox', { name: '上海' }).filter({ hasText: '上海' }).click()
  await expect(page.getByText('当前选择：["北京","广州","上海"]')).toBeVisible()
  await demo.getByRole('checkbox', { name: '上海' }).filter({ hasText: '上海' }).click()
  await expect(page.getByText('当前选择：["北京","广州"]')).toBeVisible()
})
