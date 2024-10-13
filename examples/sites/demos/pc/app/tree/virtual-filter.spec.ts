import { test, expect } from '@playwright/test'

test('测试虚拟tree的过滤功能', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#virtual-filter')
  const preview = page.locator('.pc-demo-container')
  const tree = preview.locator('.tiny-tree')
  const vScroll = tree.locator('.tiny-virtual-scroll')
  const scrollItem = vScroll.locator('.virtual-scroll-item')
  const input = preview.locator('.tiny-input input')
  await expect(scrollItem.getByText('数据 0')).toHaveCount(1)
  await input.fill('1-1')
})
