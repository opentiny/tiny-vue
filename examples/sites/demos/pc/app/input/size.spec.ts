import { test, expect } from '@playwright/test'

test('[Input]size', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/input/size')
  const medium = page.locator('.demo-input > .tiny-input-medium')
  const small = page.locator('.demo-input > .tiny-input-small ')
  const mini = page.locator('.demo-input > .tiny-input-mini')
  await expect(medium).toBeVisible()
  await expect(small).toBeVisible()
  await expect(mini).toBeVisible()
})
