import { test, expect } from '@playwright/test'

test.describe('自定义底部按钮Props', () => {
  test('确认按钮Props', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('modal#footer-btn-props')

    const modal = page.locator('.tiny-modal')
    const confirmBtn1 = modal.locator('.tiny-modal__footer .tiny-button--primary').nth(1)
    const confirmBtn2 = modal.locator('.tiny-modal__footer .tiny-button--primary').first()

    await page.getByRole('button', { name: '方法调用' }).click()
    await expect(confirmBtn1).toHaveClass(/is-disabled/)
    await expect(confirmBtn1).toHaveText('OK')
    await modal.locator('.tiny-modal__header > .tiny-modal__close-btn').nth(1).click()

    await page.getByRole('button', { name: '组件形式使用' }).click()
    await expect(confirmBtn2).toHaveAttribute('autoFocus', 'true')
  })

  test('取消按钮Props', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('modal#footer-btn-props')

    const modal = page.locator('.tiny-modal')
    const cancelBtn1 = modal.locator('.tiny-modal__footer .tiny-button--default').first()
    const cancelBtn2 = modal.getByRole('button', { name: '取消' })

    await page.getByRole('button', { name: '方法调用' }).click()
    await expect(cancelBtn1).toHaveClass(/is-plain/)
    await expect(cancelBtn1).toHaveText('返回')
    await modal.locator('.tiny-modal__header > .tiny-modal__close-btn').nth(1).click()

    await page.getByRole('button', { name: '组件形式使用' }).click()
    await expect(cancelBtn2).toHaveClass(/tiny-button--warning/)
  })
})
