import { test, expect } from '@playwright/test'

test('自定义图标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('link#custom-icon')
  const demo = page.locator('#custom-icon')
  const edit = demo.locator('a').filter({ hasText: '编辑' })
  await expect(edit.locator('svg')).toHaveCount(1)
  const disabled = demo.locator('a').filter({ hasText: '禁用' })
  await expect(disabled.locator('svg')).toHaveCount(1)
  const view = demo.locator('a').filter({ hasText: '查看' })
  await expect(view.locator('svg')).toHaveCount(1)
  const del = demo.locator('a').filter({ hasText: '删除' })
  await expect(del.locator('svg')).toHaveCount(1)
})
