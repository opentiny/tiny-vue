import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dropdown#lazy-show-popper')

  const wrap = page.locator('#lazy-show-popper')
  const dropDownLi = wrap.locator('.tiny-dropdown li')
  const dropDownOnBody = page.locator('body .tiny-dropdown-menu li')

  const dropDown2 = wrap.locator('.tiny-dropdown').nth(1)

  // 2 个示例应该是 10 个菜单项，懒加载成功的话，应该只加载 5 个。
  await expect(dropDownLi).toHaveCount(5)

  // 点击后，应该加载 10 个，但展开的 5 项是 appendToBody 的。
  await dropDown2.click()
  await expect(dropDownLi).toHaveCount(5)
  await expect(dropDownOnBody).toHaveCount(5)
})
