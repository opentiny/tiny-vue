import { test, expect } from '@playwright/test'

test('测试插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#slot')

  const tree = page.locator('.pc-demo-container')
  const button = page.getByRole('button', { name: '加载数据' })

  // 测试无数据
  await expect(tree.getByText('组件无数据')).toHaveCount(1)

  // 测试有数据
  await button.click()
  await expect(tree.getByText('数据 1-1-1')).toHaveCount(2)
  await expect(tree.getByText('新增')).toHaveCount(8)
})
