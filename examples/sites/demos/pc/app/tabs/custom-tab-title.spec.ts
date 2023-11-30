import { test, expect } from '@playwright/test'

test('自定义标签页标题', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tabs#custom-tab-title')

  const tabs = page.locator('.tiny-tabs')
  const svg = page.getByRole('tab', { name: '数据组件' }).locator('svg')
  const content = tabs.getByRole('tabpanel')

  await expect(svg).toBeVisible()
  await expect(content).toHaveText(/数据组件/)
})
