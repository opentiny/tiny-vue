import { test, expect } from '@playwright/test'

test('尺寸', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/checkbox/with-border')
  const checkedLabelGZ = page.getByRole('checkbox', { name: '广州' }).filter({ hasText: '广州' })
  // 点击第1个选项
  await checkedLabelGZ.first().click()
  await expect(checkedLabelGZ.first()).toHaveClass(/is-checked/)
  let box = await checkedLabelGZ.first().boundingBox()
  // 判断高度是否符合
  await expect(box?.height).toBeCloseTo(42)
  await checkedLabelGZ.nth(1).click()
  await expect(checkedLabelGZ.nth(1)).toHaveClass(/is-checked/)
  box = await checkedLabelGZ.nth(1).boundingBox()
  await expect(box?.height).toBeCloseTo(36)
  await checkedLabelGZ.nth(2).click()
  await expect(checkedLabelGZ.nth(2)).toHaveClass(/is-checked/)
  box = await checkedLabelGZ.nth(2).boundingBox()
  await expect(box?.height).toBeCloseTo(30)
  await checkedLabelGZ.nth(3).click()
  await expect(checkedLabelGZ.nth(3)).toHaveClass(/is-checked/)
  box = await checkedLabelGZ.nth(3).boundingBox()
  await expect(Math.floor(box?.height || 24)).toBeCloseTo(24)
  await expect(checkedLabelGZ.nth(4)).toHaveClass(/is-disabled/)
})
