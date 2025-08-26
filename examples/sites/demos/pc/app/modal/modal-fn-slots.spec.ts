import { test, expect } from '@playwright/test'

test('弹窗的插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#modal-fn-slots')
  const demoElement = page.locator('#modal-fn-slots')
  await demoElement.getByRole('button', { name: '打开带插槽弹窗' }).first().click()
  const content = page.locator('div').filter({ hasText: /^使用默认插槽$/ })
  await expect(content.nth(3)).toHaveText(/使用默认插槽/)
  const inner = page.locator('a').filter({ hasText: '记录最近事项' })
  await expect(inner.nth(1)).toHaveText(/记录最近事项/)
  await page.getByRole('button', { name: '取消' }).click()
})
