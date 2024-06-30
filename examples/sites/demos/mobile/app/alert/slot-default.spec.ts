import { test, expect } from '@playwright/test'

test('自定义提示内容', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('alert#slot-default')

  const alert = page.locator('.tiny-mobile-alert')

  await expect(alert).toBeVisible()
  await expect(page.getByText('配置详细信息请点击')).toBeVisible()
  await expect(page.getByRole('link', { name: '默认配置说明' })).toBeVisible()
})
