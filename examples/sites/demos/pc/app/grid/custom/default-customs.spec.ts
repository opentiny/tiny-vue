import { test, expect } from '@playwright/test'

test('初始化个性配置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-custom#custom-default-csutoms')
  const demo = page.locator('#custom-default-csutoms')
  await expect(demo.getByRole('cell', { name: '名称' })).not.toBeVisible()
  await expect(page.getByRole('cell', { name: '员工数' })).toBeVisible()
})
