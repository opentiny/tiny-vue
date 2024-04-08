import { test, expect } from '@playwright/test'

test('指定挂载节点', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('alert#target')

  const target = page.locator('.alert-wrap')
  const alert = target.locator('> .tiny-mobile-alert')

  await expect(alert).toBeVisible()
})
