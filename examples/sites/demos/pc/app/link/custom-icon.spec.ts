import { test, expect } from '@playwright/test'

test('自定义图标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('link#custom-icon')
  const preview = page.locator('#preview')
  const edit = preview.locator('a').filter({ hasText: '编辑' })
  await expect(edit.locator('svg')).toHaveCount(1)
  const disabled = preview.locator('a').filter({ hasText: '禁用' })
  await expect(disabled.locator('svg')).toHaveCount(1)
  const view = preview.locator('a').filter({ hasText: '查看' })
  await expect(view.locator('svg')).toHaveCount(1)
  const del = preview.locator('a').filter({ hasText: '删除' })
  await expect(del.locator('svg')).toHaveCount(1)
})
