import { test, expect } from '@playwright/test'

test('列拖拽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-drag#drag-column-drag')
  const draggerDom = page.getByRole('cell', { name: '公司名称' })
  const { x, y } = await draggerDom.boundingBox()
  // 开始拖拽
  await page.mouse.move(x + 2, y + 3)
  await page.waitForTimeout(200)
  await page.mouse.down()
  await page.waitForTimeout(200)
  await page.mouse.move(x + 260, y)
  await page.waitForTimeout(200)
  await page.mouse.up()
  await page.waitForTimeout(200)

  await expect(page.locator('.tiny-grid-header__column').nth(1)).toContainText('员工数')
})
