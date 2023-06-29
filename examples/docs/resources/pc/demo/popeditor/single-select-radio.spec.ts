import { test, expect } from '@playwright/test'

test('PopEditor 树模式单选', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/pop-editor/single-select-radio')

  const preview = page.locator('#preview')
  const textBox = preview.getByRole('textbox')
  const dialogBox = page.locator('.tiny-dialog-box')
  const tree = dialogBox.locator('.tiny-tree')
  const treeNode = tree.locator('label')

  // 单选tree模式
  await textBox.click()
  await expect(dialogBox).toBeVisible()
  await expect(tree).toBeVisible()
  await expect(treeNode.locator('.is-checked')).toHaveCount(1)
})
