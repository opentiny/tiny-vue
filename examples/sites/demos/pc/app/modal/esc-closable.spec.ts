import { test, expect } from '@playwright/test'

test('按 Esc 键关闭弹出框', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#esc-closable')

  const modal = page.locator('.tiny-modal.type__alert')
  await page.getByRole('button', { name: '按 Esc 键可以关闭弹出框' }).click()
  await page.keyboard.press('Escape')
  await expect(modal).not.toBeVisible()
})
