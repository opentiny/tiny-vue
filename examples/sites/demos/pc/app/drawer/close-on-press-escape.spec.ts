import { test, expect } from '@playwright/test'

test('按 Esc 键关闭 Drawer（close-on-press-escape）', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())

  await page.goto('drawer#close-on-press-escape')

  const demo = page.locator('#close-on-press-escape')

  const drawer = demo.locator('.tiny-drawer__main')

  // 打开 Drawer（用文本更稳定）
  await demo.getByText('抽屉组件').click()
  await expect(drawer).toBeVisible()

  // 按 Esc
  await page.keyboard.press('Escape')

  // Drawer 关闭
  await expect(drawer).toBeHidden()
})
