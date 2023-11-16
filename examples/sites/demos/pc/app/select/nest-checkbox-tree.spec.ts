import { expect, test } from '@playwright/test'

test('tree-multiple', async ({ page }) => {
  await page.goto('select#nest-checkbox-tree')
  const suffix = page.locator('#preview .tiny-input__suffix')
  const select = page.locator('#preview .tiny-select')
  const selectDropdown = page.locator('.tiny-select-dropdown')
  const tag = select.locator('.tiny-tag')

  await expect(tag).toHaveCount(2)
  await suffix.click()
  await page.waitForTimeout(500)
  const treeNodes = selectDropdown.getByRole('treeitem')
  const checkedTreeNodes = selectDropdown.locator('.tiny-tree-node.is-checked')

  await page.waitForTimeout(500)
  await expect(checkedTreeNodes).toHaveCount(4)
  await expect(treeNodes).toHaveCount(7)
  await page
    .locator('div')
    .filter({ hasText: /^一级 2$/ })
    .locator('.tiny-checkbox')
    .click()
  await page.waitForTimeout(500)
  await expect(checkedTreeNodes).toHaveCount(7)
  await expect(tag).toHaveCount(7)
})
