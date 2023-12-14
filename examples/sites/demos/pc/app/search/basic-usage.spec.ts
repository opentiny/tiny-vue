import { expect, test } from '@playwright/test'

test('是否正常渲染', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('search#basic-usage')

  const first = page.locator('.tiny-search__line')
  const selector = page.locator('.tiny-search__selector')
  const firstPresent = first.locator('.tiny-search__present')
  const firstInput = first.locator('.tiny-search__input')
  const icon = page.locator('#basic-usage a svg')

  await expect(first).toHaveCount(1)
  await expect(icon).toHaveCount(1)
  await expect(selector).not.toBeVisible()
  await expect(firstPresent).not.toBeVisible()
  await expect(firstInput).toHaveValue('默认值')
  await firstInput.fill('123')
  await expect(firstInput).toHaveValue('123')
})
