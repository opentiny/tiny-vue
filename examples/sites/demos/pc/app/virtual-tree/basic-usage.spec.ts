import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('virtual-tree#basic-usage')

  const demo = page.locator('#basic-usage')
  await page.getByRole('button', { name: '生成新数据' }).click()
  const vsRows = demo.locator('.tiny-tree-node__wrapper').all()
  // 只渲染可视区域范围之内的元素
  await expect((await vsRows).length).toBeLessThan(20)
})
