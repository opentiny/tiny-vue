import { test, expect } from '@playwright/test'

test('自定义确定按钮文本', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#footer-btn-content')

  const demo = page.locator('#footer-btn-content')
  const modal = page.locator('.tiny-modal.active')
  const confirmBtn = modal.locator('.tiny-modal__footer .tiny-button--primary')
  const cancelBtn = modal.locator('.tiny-modal__footer .tiny-button--default')

  await demo.getByRole('button', { name: '方法调用' }).click()
  await expect(confirmBtn).toHaveText('好的')
  await expect(cancelBtn).toHaveText('返回')
  await confirmBtn.click()

  await demo.getByRole('button', { name: '组件形式使用' }).click()
  await expect(confirmBtn).toHaveText('确定')
  await expect(cancelBtn).toHaveText('再想想')
  await confirmBtn.click()
})
