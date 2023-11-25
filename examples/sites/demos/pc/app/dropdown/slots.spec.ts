import { test, expect } from '@playwright/test'

test('插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dropdown#slots')

  const wrap = page.locator('#slots')
  const dropDown = wrap.locator('.tiny-dropdown')
  const dropDownSvg = dropDown.locator('svg')

  // 默认插槽
  await expect(dropDown).toContainText('默认插槽')
  // suffix-icon 插槽
  await expect(dropDownSvg.locator('path')).toHaveAttribute(
    'd',
    'M337.288 105.538c11.775-6.513 13.163-7.275 22.5-2.313l4.188 2.3c3.712 4.863 4.387 5.75 5.063 9.962l.475 3.388v377.463h-37.5V163.875l-105.5 105.538L200 242.9l137.288-137.362zM500 418.75v37.5h-75v-37.5h75zm37.5-87.5v37.5H425v-37.5h112.5zm37.5-87.5v37.5H425v-37.5h150zm37.5-87.5v37.5H425v-37.5h187.5z'
  )
})
