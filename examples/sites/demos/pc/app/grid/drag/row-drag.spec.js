import { test, expect } from '@playwright/test'

test('行拖拽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-drag#drag-row-drag')
  const draggerDom = page.locator('.row__drop-handle').first()
  // 获取拖拽元素位置
  const { x, y } = await draggerDom.boundingBox()
  // 开始拖拽
  await page.mouse.move(x + 2, y + 3)
  await page.waitForTimeout(200)
  await page.mouse.down()
  await page.waitForTimeout(200)
  await page.mouse.move(x, y + 160)
  await page.waitForTimeout(200)
  await page.mouse.up()
  await page.waitForTimeout(200)
  await expect(page.locator('.tiny-grid-body__row').nth(5)).toContainText('WSX科技YX公司')
})
