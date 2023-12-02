import { test, expect } from '@playwright/test'

test('可拖拽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tabs#tabs-draggable')

  const items = page.getByRole('tab')
  const box2 = await page.getByRole('tab', { name: 'Tab 2' }).boundingBox()
  const box3 = await page.getByRole('tab', { name: 'Tab 3' }).boundingBox()
  const arr2 = ['2', '3', '1']

  for (let i = 0; i < 3; ++i) {
    await expect(items.nth(i)).toHaveText(`Tab ${i + 1}`)
  }

  await page.getByRole('tab', { name: 'Tab 1' }).hover()
  await page.mouse.down()
  await page.mouse.move(box2.x + box2.width / 2, box2.y + box2.height / 2)
  await page.mouse.up()

  await page.waitForTimeout(200)
  await page.getByRole('tab', { name: 'Tab 1' }).hover()
  await page.mouse.down()
  await page.mouse.move(box3.x + box3.width / 2, box3.y + box3.height / 2)
  await page.mouse.up()
  for (let i = 0; i < 3; ++i) {
    await expect(items.nth(i)).toHaveText(`Tab ${arr2[i]}`)
  }
})
