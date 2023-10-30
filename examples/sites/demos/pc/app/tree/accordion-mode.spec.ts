import { test, expect } from '@playwright/test'

test('手风琴模式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#accordion-mode')

  const tree = page.locator('#preview .tiny-tree')
  await expect(tree.getByText('二级 1-1')).toBeVisible()
  await expect(tree.getByText('二级 2-1')).not.toBeVisible()
  await expect(tree.getByText('二级 3-1')).not.toBeVisible()
  await page.getByText('一级 2').click()
  await expect(tree.getByText('三级 2-1-1').first()).toBeVisible()
  await expect(tree.getByText('三级 2-2-1')).not.toBeVisible()
})
