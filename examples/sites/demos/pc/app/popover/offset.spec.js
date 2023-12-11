import { test, expect } from '@playwright/test'

test('箭头偏移', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popover#offset')

  const preview = page.locator('.pc-demo-container')
  const input1 = preview.locator('.tiny-slider__input input').nth(0)
  const input2 = preview.locator('.tiny-slider__input input').nth(1)
  const arrow = page.getByText('箭头偏移的内容').locator('.popper__arrow')
  const panel = page.getByText('面板偏移的内容')

  // 箭头偏移
  await expect(arrow).toBeVisible()
  let middle = await arrow.boundingBox()
  await input1.fill('8')
  await page.waitForTimeout(1000)
  let left = await arrow.boundingBox()
  await input1.fill('100')
  await page.waitForTimeout(1000)
  let right = await arrow.boundingBox()

  expect(left.x < middle.x)
  expect(middle.x < right.x)

  // 面板偏移
  await expect(panel).toBeVisible()
  middle = await panel.boundingBox()
  await input2.fill('-100')
  await page.waitForTimeout(1000)
  left = await panel.boundingBox()
  await input2.fill('100')
  await page.waitForTimeout(1000)
  right = await panel.boundingBox()

  expect(left.x < middle.x)
  expect(middle.x < right.x)
})
