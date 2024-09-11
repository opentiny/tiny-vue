import { test, expect } from '@playwright/test'

test('树场景', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('virtual-scroll-box#tree')

  const demo = page.locator('#tree')
  await demo.getByText('item-501').click()
  const vsRows = demo.locator('.tiny-tree-node__wrapper').all()
  // 只渲染可视区域范围之内的元素
  await expect((await vsRows).length).toBeLessThan(20)
})
