import { test, expect } from '@playwright/test'

test('禁用复选框', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())

  await page.goto('checkbox#disabled')

  const checkbox = page.locator('#disabled .tiny-checkbox')

  await expect(checkbox).toHaveClass(/is-disabled/)
  await expect(checkbox).toHaveClass(/is-checked/)

  // 在浏览器上下文调用原生 click，但先作类型判断，避免 TS 报错
  await checkbox.evaluate((node: Element) => {
    if (node instanceof HTMLElement) {
      node.click()
    }
  })

  // 状态应保持不变
  await expect(checkbox).toHaveClass(/is-checked/)
})
