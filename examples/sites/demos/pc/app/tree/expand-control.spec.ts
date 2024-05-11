import { test, expect } from '@playwright/test'

test('测试节点的展开', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#expand-control')

  const preview = page.locator('.pc-demo-container')
  const tree1 = preview.locator('.tiny-tree').nth(0)
  const tree2 = preview.locator('.tiny-tree').nth(1)
  const allBtn = preview.getByText('切换全部展开收起')
  const openBtn = preview.getByText('展开高亮')
  const closeBtn = preview.getByText('收起高亮')

  // 测试全部收起
  await expect(tree1.locator('.is-expanded')).toHaveCount(9) //  叶子节点也有这个类
  await allBtn.click()
  await expect(tree1.locator('.is-expanded')).toHaveCount(0)

  // 测试收起/展开
  await page.waitForTimeout(50)
  await expect(tree2.locator('.is-expanded')).toHaveCount(1)
  await closeBtn.click()
  await expect(tree2.locator('.is-expanded')).toHaveCount(0)
  await page.waitForTimeout(50)
  await openBtn.click()
  await expect(tree2.locator('.is-expanded')).toHaveCount(1)
})
