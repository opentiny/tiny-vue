import { test, expect } from '@playwright/test'

test('多选的勾选 ', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#check-op')

  const preview = page.locator('.pc-demo-container')
  const tree = preview.locator('.tiny-tree').nth(0)
  const treeChecked = tree.locator('label.is-checked')
  const btn1 = preview.getByText('查询勾选状态')
  const btn2 = preview.getByText('清除全部勾选')
  const btn3 = preview.getByText('根据节点数据勾选')
  const btn4 = preview.getByText('根据node-key勾选')
  const btn5 = preview.getByText('根据node-key,多值勾选')
  const btn6 = preview.getByText('根据node,多值勾选')

  await expect(tree.getByText('数据 1-1-1')).toHaveCount(1)
  await expect(treeChecked).toHaveCount(0)

  await btn3.click()
  await expect(treeChecked).toHaveCount(4)
  await page.waitForTimeout(20)

  await btn4.click()
  await expect(treeChecked).toHaveCount(1)
  await page.waitForTimeout(20)

  await btn5.click()
  await expect(treeChecked).toHaveCount(6)
  await page.waitForTimeout(20)

  await btn6.click()
  await expect(treeChecked).toHaveCount(3)
  await page.waitForTimeout(20)

  await btn2.click()
  await expect(treeChecked).toHaveCount(0)
  await page.waitForTimeout(20)

  await btn1.click()
})
