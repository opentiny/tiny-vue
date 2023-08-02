import { test, expect } from '@playwright/test'
import exp from 'constants'

test('PopUpload 设置组件大小', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/pop-upload/size')

  const preview = page.locator('#preview')
  const modalAppearBtn = preview.getByRole('button', { name: '选择文件' })

  await expect(modalAppearBtn).toHaveClass(/tiny-button--medium/)
  await expect(modalAppearBtn).toHaveCSS('height', '40px')
  await expect(modalAppearBtn).toHaveCSS('min-width', '88px')
})
