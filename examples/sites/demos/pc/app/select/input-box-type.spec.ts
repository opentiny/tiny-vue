import { test, expect } from '@playwright/test'

test('下划线默认', async ({ page }) => {
  await page.goto('select#input-box-type')
  const wrap = page.locator('#input-box-type')
  const select = wrap.locator('.tiny-select').nth(0)
  const input = select.locator('.tiny-input__inner')
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const option = dropdown.locator('.tiny-option')

  await expect(select).toHaveClass(/tiny-select__underline/)
  await expect(input).toHaveCSS('border-top-width', '0px')
  await expect(input).toHaveCSS('border-left-width', '0px')
  await expect(input).toHaveCSS('border-right-width', '0px')
  await expect(input).toHaveCSS('border-color', 'rgb(173, 176, 184)')
  await expect(select.locator('svg')).toHaveCSS('fill', 'rgb(87, 93, 108)')

  await select.click()
  await option.first().click()
  await expect(dropdown).toBeHidden()
  await expect(input).toHaveValue('黄金糕')
})

test('下划线禁用', async ({ page }) => {
  await page.goto('select#input-box-type')
  const wrap = page.locator('#input-box-type')
  const select = wrap.locator('.tiny-select').nth(1)
  const input = select.locator('.tiny-input__inner')
  const dropdown = page.locator('body > .tiny-select-dropdown')

  await expect(select).toHaveClass(/tiny-select__underline/)
  await expect(input).toHaveCSS('border-top-width', '0px')
  await expect(input).toHaveCSS('border-left-width', '0px')
  await expect(input).toHaveCSS('border-right-width', '0px')
  await expect(input).toHaveCSS('border-color', 'rgb(223, 225, 230)')
  await expect(input).toHaveCSS('cursor', 'not-allowed')
  await expect(select.locator('svg')).toHaveCSS('fill', 'rgb(173, 176, 184)')
  const hasDisabled = await input.evaluate((input) => input.hasAttribute('disabled'))
  await expect(hasDisabled).toBe(true)

  await select.click()
  await expect(dropdown).toBeHidden()
  await expect(input).toHaveValue('')
})

test('下划线多选', async ({ page }) => {
  await page.goto('select#input-box-type')
  const wrap = page.locator('#input-box-type')
  const select = wrap.locator('.tiny-select').nth(2)
  const input = select.locator('.tiny-input__inner')
  const tag = wrap.locator('.tiny-tag')
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const option = dropdown.locator('.tiny-option')

  await expect(select).toHaveClass(/tiny-select__underline/)
  await expect(input).toHaveCSS('border-top-width', '0px')
  await expect(input).toHaveCSS('border-left-width', '0px')
  await expect(input).toHaveCSS('border-right-width', '0px')
  await expect(input).toHaveCSS('border-color', 'rgb(173, 176, 184)')
  await expect(select.locator('.tiny-select__caret')).toHaveCSS('fill', 'rgb(87, 93, 108)')

  await select.click()
  await expect(dropdown).toBeVisible()
  await option.first().click()
  await expect(tag).toHaveCount(5)

  await expect(select).toHaveClass(/tiny-select__underline/)
  await expect(select).toHaveClass(/tiny-select__multiple/)
})
