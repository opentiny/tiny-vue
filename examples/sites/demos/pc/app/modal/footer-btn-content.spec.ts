import { test, expect } from '@playwright/test'

test.describe('自定义底部按钮文本', () => {
  test('自定义确定按钮文本', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('modal#footer-btn-content')

    const modal = page.locator('.tiny-modal')
    const confirmBtn1 = modal.locator('.tiny-modal__footer .tiny-button--primary').nth(1)
    const confirmBtn2 = modal.locator('.tiny-modal__footer .tiny-button--primary').first()

    await page.getByRole('button', { name: '方法调用' }).click()
    await expect(confirmBtn1).toHaveText('好的')
    await confirmBtn1.click()

    await page.getByRole('button', { name: '组件形式使用' }).click()
    await expect(confirmBtn2).toHaveText('确定')
  })

  test('自定义取消按钮文本', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('modal#footer-btn-content')

    const modal = page.locator('.tiny-modal')
    const cancelBtn1 = modal.locator('.tiny-modal__footer .tiny-button--default').nth(1)
    const cancelBtn2 = modal.locator('.tiny-modal__footer .tiny-button--default').first()

    await page.getByRole('button', { name: '方法调用' }).click()
    await expect(cancelBtn1).toHaveText('返回')
    await cancelBtn1.click()

    await page.getByRole('button', { name: '组件形式使用' }).click()
    await expect(cancelBtn2).toHaveText('再想想')
  })
})
