import { test, expect } from '@playwright/test'

test('dialogSelect 树多选', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dialog-select#nest-tree-multi')
  await page.locator('#nest-tree-multi').getByRole('button', { name: '打开窗口', exact: true }).click()

  const nodeContent = await page.locator('.tiny-tree-node__content-left label').nth(1)

  const iconNode = await nodeContent.getAttribute('class')

  expect(iconNode?.includes('tiny-radio')).toBe(false)
  expect(iconNode?.includes('tiny-checkbox')).toBe(true)

  let isChecked

  isChecked = await page
    .getByRole('treeitem', { name: '三级 9' })
    .locator('.tiny-checkbox input[type="checkbox"]')
    .isChecked()
  expect(isChecked).toBeFalsy()

  let current
  current = await page.getByRole('treeitem', { name: '三级 9' }).locator('path').nth(1)
  await current.click()

  isChecked = await page
    .getByRole('treeitem', { name: '三级 9' })
    .locator('.tiny-checkbox input[type="checkbox"]')
    .isChecked()
  expect(isChecked).toBeTruthy()

  await page
    .locator('div')
    .filter({ hasText: /^一级 1二级 4三级 8三级 9暂无数据$/ })
    .getByRole('img')
    .nth(3)
    .click()

  isChecked = await page
    .getByRole('treeitem', { name: '三级 9' })
    .locator('.tiny-checkbox input[type="checkbox"]')
    .isChecked()
  expect(isChecked).toBeFalsy()

  await page.getByRole('treeitem', { name: '三级 9' }).locator('path').nth(1).click()

  isChecked = await page
    .getByRole('treeitem', { name: '三级 9' })
    .locator('.tiny-checkbox input[type="checkbox"]')
    .isChecked()
  expect(isChecked).toBeTruthy()
})
