import { test, expect } from '@playwright/test'

test('左右翻页', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('slider-button#page-turn')

  const demo = page.locator('#page-turn')
  const groups = demo.locator('.tiny-slider-button-group')
  const textGroup = groups.nth(0)
  const iconGroup = groups.nth(1)

  await expect(textGroup.locator('.tiny-slider-button-bar')).toBeVisible()
  await expect(textGroup.locator('.tiny-slider-button-bar-left-icon')).toBeVisible()
  await expect(textGroup.locator('.tiny-slider-button-bar-right svg')).toBeVisible()
  await expect(textGroup.locator('.tiny-slider-button').first()).toHaveAttribute('aria-checked', 'true')
  await expect(textGroup.locator('.tiny-slider-button').first()).toContainText('默认 Basic Info')

  await textGroup.locator('.tiny-slider-button').nth(1).click()
  await expect(page.locator('.tiny-modal').filter({ hasText: '节点label: 已完成 BOQ Info' })).toBeVisible()
  await expect(textGroup.locator('.tiny-slider-button').nth(1)).toHaveAttribute('aria-checked', 'true')

  await expect(iconGroup.locator('.tiny-slider-button-bar')).toBeVisible()
  await expect(iconGroup.locator('.tiny-slider-button').first()).toHaveAttribute('aria-checked', 'true')
  await expect(iconGroup.locator('.tiny-slider-button').first().locator('svg')).toBeVisible()

  await demo.getByRole('button', { name: 'size to big', exact: true }).click()
  await expect(groups.nth(0).locator('.tiny-slider-button').first()).toHaveClass(/tiny-slider-button--large/)

  await demo.getByRole('button', { name: 'icon size to big', exact: true }).click()
  await expect(groups.nth(1).locator('.tiny-slider-button__text').first()).toHaveClass(
    /tiny-slider-button__text--large-icon/
  )
})
