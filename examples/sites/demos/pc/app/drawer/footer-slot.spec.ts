import { test, expect } from '@playwright/test'

test('底部插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('drawer#footer-slot')

  const drawer = page.locator('#preview .tiny-drawer')
  const footer = drawer.locator('.tiny-drawer__footer')

  await page.getByRole('button', { name: '底部插槽示例' }).click()
  await expect(footer).toBeVisible()
  await expect(footer.locator('> div')).toHaveClass('my-footer')
  await expect(footer).toContainText('自定义底部文本')
})
