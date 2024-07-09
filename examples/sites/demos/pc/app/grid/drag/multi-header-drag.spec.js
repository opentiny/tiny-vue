import { test, expect } from '@playwright/test'

test('多级表头拖拽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-drag#multi-header-drag')
  await page.setViewportSize({
    width: 2000,
    height: 1000
  })
  const draggerDom = page.getByRole('cell', { name: '创建日期1' })
  // 获取拖拽元素位置
  const { x, y } = await draggerDom.boundingBox()
  // 验证不可拖拽
  await page.mouse.move(x + 2, y + 3)
  await page.waitForTimeout(200)
  await page.mouse.down()
  await page.waitForTimeout(200)
  await page.mouse.move(x + 200, y)
  await page.waitForTimeout(200)
  await page.mouse.up()
  await page.waitForTimeout(200)
  await expect(page.locator('.tiny-grid-header__row').nth(1).locator('.tiny-grid-header__column').nth(3)).toContainText(
    '创建日期1'
  )

  // 获取拖拽元素位置
  const { x: left, y: top } = await draggerDom.boundingBox()
  // 验证可拖拽
  await page.mouse.move(left + 2, top + 3)
  await page.waitForTimeout(200)
  await page.mouse.down()
  await page.waitForTimeout(200)
  await page.mouse.move(left - 50, top)
  await page.waitForTimeout(200)
  await page.mouse.up()
  await page.waitForTimeout(200)
  await expect(page.locator('.tiny-grid-header__row').nth(1).locator('.tiny-grid-header__column').nth(2)).toContainText(
    '创建日期1'
  )
})
