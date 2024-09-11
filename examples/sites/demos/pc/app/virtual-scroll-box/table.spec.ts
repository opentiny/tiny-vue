import { test, expect } from '@playwright/test'

test('表格场景', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('virtual-scroll-box#table')

  const demo = page.locator('#table')
  const vsRows = demo.locator('.vs-row').all()
  // 只渲染可视区域范围之内的元素
  await expect((await vsRows).length).toBeLessThan(20)
})
