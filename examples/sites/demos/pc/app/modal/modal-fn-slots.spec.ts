import { test, expect } from '@playwright/test'

test('弹窗的插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#modal-fn-slots')
  const content = page.locator('.tiny-modal__content')
  const inner = page.locator('.tiny-link__inner')
  await page.getByRole('button', { name: '打开带插槽弹窗' }).first().click()
  await expect(content.nth(1)).toHaveText(/使用默认插槽/)
  await expect(inner.nth(1)).toHaveText(/记录最近事项/)
  await page.getByRole('button', { name: '取消' }).click()
  await page.getByRole('button', { name: '打开带插槽弹窗' }).nth(1).click()
  await expect(content.nth(1)).toHaveText(/使用默认插槽/)
  await expect(inner).toHaveText(/记录最近事项/)
})
