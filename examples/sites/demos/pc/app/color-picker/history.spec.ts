import { test, expect } from '@playwright/test'

test('测试历史记录', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('color-picker#history')
  await page.locator('.tiny-color-picker__trigger').click()
  await page.waitForSelector('.tiny-collapse-item__arrow')
  const arrow = page.locator('.tiny-collapse-item__arrow')
  await arrow.click()
  await expect(page.locator('.tiny-color-select-panel__history')).toHaveCount(1)
  await page.locator('.mr20.fw-bold').click()
  //用户行为更改历史记录测试
  await page.getByRole('button', { name: 'Append history color' }).click()
  await page.locator('.tiny-color-picker__trigger').click()
  await page.waitForSelector('.tiny-collapse-item__arrow')
  await page.locator('.tiny-collapse-item__arrow').click()
  await expect(page.locator('.tiny-color-select-panel__history .tiny-color-select-panel__history__color-block:nth-child(2)')).toBeVisible()
  //点击色块中心，并点击选择，历史记录增加1的测试
  const black = page.locator('.black')
  const center = await black.boundingBox()
  const x = center?.x ?? 0 + (center?.width ?? 0) / 2
  const y = center?.y ?? 0 + (center?.height ?? 0) / 2
  await black.click(x, y)
  await page.getByRole('button', { name: '选择' }).click()
  await page.locator('.tiny-color-picker__trigger').click()
  await page.waitForSelector('.tiny-collapse-item__arrow')
  await page.locator('.tiny-collapse-item__arrow').click()
  await expect(page.locator('.tiny-color-select-panel__history .tiny-color-select-panel__history__color-block:nth-child(3)')).toBeVisible()
})
