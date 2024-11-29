import { test, expect } from '@playwright/test'

test('弹窗大小全屏', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#modal-size')
  const modal = page.locator('.tiny-modal')
  const box = page.locator('.type__confirm > .tiny-modal__box')
  await page.getByRole('button', { name: '自定义弹窗大小' }).first().click()
  await expect(box.first()).toHaveCSS('width', '800px')
  await page.getByRole('button', { name: '确定' }).click()

  await page.getByRole('button', { name: '弹窗全屏' }).first().click()
  await expect(modal.nth(2)).toHaveClass(/is__maximize/)
  await page.getByRole('button', { name: '确定' }).click()
})
