import { test, expect } from '@playwright/test'

test('在模态叠加层开口周围添加的填充量', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('guide#modal-overlay-opening')

  const showBtn = page.getByRole('button', { name: '新手引导' })
  const guide = page.getByRole('dialog')

  await showBtn.click()
  await expect(guide).toBeVisible()
  await expect(page.locator('.shepherd-modal-overlay-container')).toBeVisible()
})
