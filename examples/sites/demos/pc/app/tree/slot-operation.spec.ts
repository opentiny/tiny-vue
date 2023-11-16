import { test, expect } from '@playwright/test'

test('右侧操作插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#slot-operation')

  const tree = page.locator('#preview .tiny-tree')
  const node = tree.locator('.tiny-tree-node').first()
  const operationSlot = node.locator('.operation-slot').first()
  const operationPopover = page.getByRole('tooltip', { name: '一级 1 邮件 分享' })

  await expect(operationSlot).toBeVisible()
  await operationSlot.click()
  await expect(operationPopover).toBeVisible()
  await expect(operationPopover.locator('.label')).toHaveText('一级 1')
})
