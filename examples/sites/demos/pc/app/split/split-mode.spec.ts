import { test, expect } from '@playwright/test'

test('分割方式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('split#split-mode')
  const split = page.locator('.tiny-split-wrapper')
  const centerBtn = page.locator('.tiny-split-trigger-con')
  const { width: splitWidth } = await split.boundingBox()
  const { width: centerWidth } = await centerBtn.boundingBox()
  //   判断宽度是否和面板总宽度保持一致
  await expect(splitWidth).toEqual(centerWidth)
})
