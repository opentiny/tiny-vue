import { test, expect } from '@playwright/test'

test('滚动容器', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('anchor#set-container')

  const anchor = page.locator('.tiny-anchor')
  const container = page.locator('#container')
  const link2 = anchor.getByRole('link', { name: 'Sec 2' })
  const link3 = anchor.getByRole('link', { name: 'Sec 3' }).first()
  const sec2 = page.locator('#sec-2')
  const sec3 = page.locator('#sec-3')
  const { x: x1, y: y1 } = await container.boundingBox()

  await link2.click()
  await page.waitForTimeout(400)
  const { x: x2, y: y2 } = await sec2.boundingBox()
  await expect(x2).toEqual(x1)
  await expect(y2).toEqual(y1)
  await link3.click()
  await page.waitForTimeout(400) // 滚动的距离较长，需要足够的等待时间
  const { x: x3, y: y3 } = await sec3.boundingBox()
  await expect(x3).toEqual(x1)
  await expect(y3).toEqual(y1)
})
