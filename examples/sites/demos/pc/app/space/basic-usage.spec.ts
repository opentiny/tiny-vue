import { test, expect } from '@playwright/test'

test('Space Basic Demo - direction & size', async ({ page }) => {
  // 跳转到 Basic Demo 页面
  await page.goto('space#space-basic-demo')

  const space = page.locator('[data-tag="tiny-space"]')
  const slider = page.locator('.tiny-slider')

  // -----------------------------
  // 1️⃣ 初始值检查
  // -----------------------------
  await expect(space).toHaveAttribute('style', /flex-direction:\s*column/)
  await expect(space).toHaveAttribute('style', /gap:\s*10px/)

  // -----------------------------
  // 2️⃣ 点击按钮切换方向
  // -----------------------------
  await page.getByRole('button', { name: '行' }).click()
  await expect(space).toHaveAttribute('style', /flex-direction:\s*row/)

  await page.getByRole('button', { name: '列' }).click()
  await expect(space).toHaveAttribute('style', /flex-direction:\s*column/)

  // -----------------------------
  // 3️⃣ 调整 slider 改变间距
  // -----------------------------
  await slider.evaluate((el: any) => {
    el.value = 20
    el.dispatchEvent(new Event('input'))
  })
  await expect(space).toHaveAttribute('style', /gap:\s*20px/)
})
