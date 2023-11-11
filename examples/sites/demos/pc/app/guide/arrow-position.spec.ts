import { test, expect } from '@playwright/test'

test('引导框箭头距离', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('guide#arrow-position')

  const guide = page.locator('body > .tiny-guide')
  const arrow = guide.locator('.shepherd-arrow')
  const guideEle = page.locator('.tiny-alert--success')
  const button = page.getByRole('button', { name: '上居中', exact: true })

  await button.click()
  await expect(guide).toBeVisible()
  const guideEleBox = await guideEle.boundingBox()
  const guideBox = await guide.boundingBox()
  const arrowBox = await arrow.boundingBox()

  expect(guideBox.y + arrowBox.height).toBeLessThan(guideEleBox.y)
})
