import { test, expect } from '@playwright/test'

test('locales-custom-service', async ({ page }) => {
  await page.goto('http://localhost:7130/pc/locales/custom-service')
  const reference = page.locator('.reference-wrapper')
  const popper = page.locator('.tiny-locales__popper')

  await expect(reference).toHaveText('zhCN')
  await expect(popper).toBeHidden()
  await reference.hover()
  await page.waitForTimeout(200)
  await expect(popper).toBeVisible()
  await popper.getByText('enUS').click()
  await page.waitForTimeout(200)
  await expect(reference).toHaveText('enUS')
  await expect(popper).toBeHidden()
})
