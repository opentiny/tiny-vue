import { test, expect } from '@playwright/test'

test('测试编辑节点', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#edit')

  const preview = page.locator('.pc-demo-container')
  const tree = preview.locator('.tiny-tree').nth(0)
  const btn1 = preview.getByText('进入编辑')
  const btn2 = preview.getByText('取消编辑')
  const btn3 = preview.getByText('新建子节点')
  const editIcons = tree.locator('[title="编辑"]')
  const input = tree.locator('.tiny-input input')

  await expect(tree.getByText('数据 1-1-1')).toHaveCount(1)
  await btn1.click()
  await expect(editIcons).toHaveCount(9)
  await page.waitForTimeout(20)

  await btn2.click()
  await expect(editIcons).toHaveCount(0)
  await page.waitForTimeout(20)

  await btn3.click()
  await expect(input).toHaveCount(1)
  input.fill('123')
})
