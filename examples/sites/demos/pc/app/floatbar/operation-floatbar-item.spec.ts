import { test, expect } from '@playwright/test'

test('操作浮动块内容', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('floatbar#operation-floatbar-item')

  const floatbar = page.locator('#preview .tiny-float-bar')
  const item = floatbar.getByRole('listitem').filter({ hasText: 'custom-Add' })
  await page.getByRole('button', { name: '增加一项' }).click()
  await expect(item).toBeVisible()
  await page.getByRole('button', { name: '删除一项' }).click()
  await expect(item).not.toBeVisible()
  await page.getByRole('button', { name: '删除所有项' }).click()
  await expect(floatbar.getByRole('listitem')).toHaveCount(0)
})
