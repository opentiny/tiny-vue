import { test, expect } from '@playwright/test'

test('默认插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#slot-deffault')

  const tree = page.locator('#preview .tiny-tree')
  const node = tree.locator('.tiny-tree-node').first()
  const currentNodeContent = page.getByText('一级 1')
  await expect(currentNodeContent).toHaveClass('custom-label')
  await expect(node.locator('.prefix-slot')).toContainText('前缀插槽')
  await expect(node.locator('.subfix-slot')).toContainText('后缀插槽')
})
