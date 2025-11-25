import { test, expect } from '@playwright/test'

test('dialogSelect 树单选', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dialog-select#nest-tree-single')
  await page.locator('#nest-tree-single').getByRole('button', { name: '打开窗口' }).click()

  const nodeContent = await page.locator('.tiny-tree-node__content-left label').nth(1)

  const iconNode = await nodeContent.getAttribute('class')

  expect(iconNode?.includes('tiny-radio')).toBe(true)
  expect(iconNode?.includes('tiny-checkbox')).toBe(false)

  let current
  current = await page.getByRole('treeitem', { name: '二级 4' }).locator('label')
  await current.click()
  expect(current).toHaveClass(/is-checked/)

  current = await page.getByText('二级 5')
  await expect(current).not.toHaveClass(/is-checked/)
})
