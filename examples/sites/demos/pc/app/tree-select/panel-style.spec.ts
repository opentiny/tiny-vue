import { test, expect } from '@playwright/test'

test('不挂载在 body 元素上', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-select#panel-style')

  const wrap = page.locator('#panel-style')
  const select = wrap.locator('.tiny-tree-select').nth(0)
  const dropdown = select.locator('.tiny-base-select__tags-group > .tiny-select-dropdown')

  await select.click()
  await expect(dropdown).toHaveCount(1)
})

test('自定义类名', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-select#panel-style')

  const wrap = page.locator('#panel-style')
  const select = wrap.locator('.tiny-tree-select').nth(1)
  const dropdown = page.locator('body > .tiny-select-dropdown')

  await select.click()
  await expect(dropdown).toHaveClass(/drop/)
  await expect(dropdown).toHaveCSS('box-shadow', 'rgba(0, 0, 0, 0.35) 0px 5px 15px 0px')
})

test('从上方弹出面板', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-select#panel-style')

  const wrap = page.locator('#panel-style')
  const select = wrap.locator('.tiny-tree-select').nth(2)
  const dropdown = page.locator('body > .tiny-select-dropdown')

  await select.click()
  await expect(dropdown).toHaveAttribute('x-placement', 'top')
})
