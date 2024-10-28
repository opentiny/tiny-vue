import { test, expect } from '@playwright/test'

test('测试虚拟tree的拖拽节点', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#virtual-drag-node')

  const preview = page.locator('.pc-demo-container')
  const tree = preview.locator('.tiny-tree')
  const vScroll = tree.locator('.tiny-virtual-scroll')
  const scrollItem = vScroll.locator('.virtual-scroll-item')

  await expect(scrollItem.nth(0)).toHaveText('数据 0')

  await tree.getByText('数据 2-1').dragTo(tree.getByText('数据 1-1'))
  await page.waitForTimeout(1000)
  await tree.getByText('数据 1-1').dragTo(tree.getByText('数据 2-0'))
  await page.waitForTimeout(1000)
})
