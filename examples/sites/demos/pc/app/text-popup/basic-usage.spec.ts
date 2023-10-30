import { test, expect } from '@playwright/test'

test('Textpopup 基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('text-popup#basic-usage')

  const preview = page.locator('#preview')
  const small = preview.locator('input')
  const larger = preview.locator('textarea')

  // 正常时只显示小输入框
  await expect(small).toBeVisible()
  await expect(small).toHaveCSS('border-color', 'rgb(173, 176, 184)')
  await expect(larger).toHaveCSS('display', 'none')
  await small.hover()
  await expect(small).toHaveCSS('border-color', 'rgb(87, 93, 108)')

  // 点击输入框后，大输入框弹出，小输入框消失
  await small.click()
  await expect(larger).toBeVisible()
  await expect(small).toHaveCSS('display', 'none')
  await expect(larger).toHaveCSS('border-color', 'rgb(94, 124, 224)')

  // 点击非输入框区域，大输入框消失
  await preview.click()
  await expect(small).toBeVisible()
  await expect(larger).toHaveCSS('display', 'none')
})
