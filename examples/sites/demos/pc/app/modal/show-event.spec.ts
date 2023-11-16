import { test, expect } from '@playwright/test'

test('窗口显示事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#show-event')

  const modal = page.locator('.tiny-modal').filter({ hasText: 'test' })
  await page.getByRole('button', { name: '在窗口显示时触发事件' }).click()
  await expect(modal).toBeVisible()
  await expect(page.locator('.tiny-modal.type__message')).toHaveText('在窗口显示时触发事件')
})
