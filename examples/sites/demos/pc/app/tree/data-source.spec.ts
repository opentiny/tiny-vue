import { test, expect } from '@playwright/test'

test('测试数据源是否正常显示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#data-source')

  const tree = page.locator('#preview .tiny-tree')
  await expect(tree.locator('.tiny-tree-node').first()).toHaveText('一级 1')
  await tree.locator('.tiny-tree-node').first().click()
  await expect(tree.locator('.tiny-tree-node').nth(1)).toHaveText('二级 1-1')
  await tree.locator('.tiny-tree-node').nth(1).click()
  await expect(tree.locator('.tiny-tree-node').nth(2)).toHaveText('三级 1-1-1')
  await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div/div[3]/div')).toHaveText('一级 3')
})
