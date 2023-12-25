import { test, expect } from '@playwright/test'

test('测试多选功能', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#checkbox')

  const preview = page.locator('.pc-demo-container')
  const tree1 = preview.locator('.tiny-tree').nth(0)
  const tree2 = preview.locator('.tiny-tree').nth(1)

  const tree1Checked = tree1.locator('label.is-checked')
  const tree2Checked = tree2.locator('label.is-checked')

  await expect(tree1.getByText('数据 1-1-1')).toHaveCount(1)
  await page.waitForTimeout(50)

  // 测试左树
  await expect(tree1Checked).toHaveCount(3)
  await tree1.getByText('数据 3').nth(0).click()
  await page.waitForTimeout(50)
  await expect(tree1Checked).toHaveCount(5)

  // 测试右树
  await expect(tree2Checked).toHaveCount(1)
  await tree2.locator('.tiny-checkbox__inner').nth(5).click()
  await page.waitForTimeout(50)
  await expect(tree2Checked).toHaveCount(2)
})
