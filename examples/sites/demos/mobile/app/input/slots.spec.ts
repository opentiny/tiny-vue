import { test, expect } from '@playwright/test'

test('插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  page.goto('input#slots')

  const inputs = page.locator('.demo-input .tiny-mobile-input')
  const prependSlot = inputs.first().locator('.tiny-mobile-input-group__prepend')
  const appendSlot = inputs.nth(1).locator('.tiny-mobile-input-group__append')
  const prefixSlot = inputs.nth(2).locator('.tiny-mobile-input__prefix')
  const suffixSlot = inputs.nth(3).locator('.tiny-mobile-input__suffix')
  const titleSlot = inputs.nth(4).locator('.tiny-mobile-input__title')
  const tipsSlot = inputs.nth(4).locator('.tiny-mobile-input__tips')

  await expect(prependSlot).toBeVisible()
  await expect(prependSlot).toContainText('Http://')

  await expect(appendSlot).toBeVisible()
  await expect(appendSlot).toContainText('.com')

  await expect(prefixSlot).toBeVisible()
  await expect(prefixSlot.locator('.tiny-svg')).toBeVisible()

  await expect(suffixSlot).toBeVisible()
  await expect(suffixSlot.locator('.tiny-svg')).toBeVisible()

  await expect(titleSlot).toBeVisible()
  await expect(titleSlot).toContainText('自定义标题')

  await expect(tipsSlot).toBeVisible()
  await expect(tipsSlot).toContainText('自定义提示')
})
