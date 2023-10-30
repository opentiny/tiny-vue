import { test, expect } from '@playwright/test'

test('文字内显和外显', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('progress#format-text')

  const progress = page.getByRole('progressbar')
  const innerText = progress.locator('.tiny-progress-bar >> .tiny-progress-bar__innerText')
  const outerText = progress.locator('.tiny-progress__text')
  const button1 = page.getByRole('button', { name: '外置文字' })
  const button2 = page.getByRole('button', { name: '内置文字' })

  await expect(innerText).toBeVisible()
  await button1.click()
  await expect(outerText).toBeVisible()
  await button2.click()
  await expect(innerText).toBeVisible()
})
