import { test, expect } from '@playwright/test'

test.describe('挂载节点', () => {
  test('挂载节点', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('drawer#drawer-to-body')
    const demo = page.locator('#drawer-to-body')

    await expect(page.locator('body > .tiny-drawer')).toHaveCount(0)

    const openBtn = demo.getByRole('button', { name: /抽屉组件AppendToBody/ })
    await openBtn.click()

    const drawer = page.locator('body > .tiny-drawer')

    // drawer 被挂载到 document.body 下
    const isAppendToBody = await drawer.evaluate((el) => el.parentElement === document.body)
    expect(isAppendToBody).toBe(true)

    // demo 容器内部不应该包含 drawer 的根 DOM
    await expect(demo.locator('.tiny-drawer')).toHaveCount(0)
  })
})
