import { test, expect } from '@playwright/test'

test('垂直布局', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('checkbox#vertical-checkbox')

  const demo = page.locator('#vertical-checkbox')
  const checkedLabelBJ = demo.getByRole('checkbox', { name: '北京' }).filter({ hasText: '北京' })

  await checkedLabelBJ.click()
  await expect(checkedLabelBJ).toHaveClass(/is-checked/)
  const checkedLabelSH = demo.getByRole('checkbox', { name: '上海' }).filter({ hasText: '上海' })
  await checkedLabelSH.click()
  await expect(checkedLabelSH).not.toHaveClass(/is-checked/)
  const checkedLabelGZ = demo.getByRole('checkbox', { name: '广州' }).filter({ hasText: '广州' })
  await checkedLabelGZ.click()
  await expect(checkedLabelGZ).toHaveClass(/is-checked/)
  const checkedLabelSZ = demo.getByRole('checkbox', { name: '深圳' }).filter({ hasText: '深圳' })
  await checkedLabelSZ.click()
  await expect(checkedLabelSZ).toHaveClass(/is-checked/)
  const parentWrapper = demo.locator('div.tiny-checkbox-group.is-vertical')
  await expect(parentWrapper).toHaveCSS('display', 'inline-block')
  await expect(checkedLabelBJ).toHaveCSS('display', 'block')
  await expect(checkedLabelSH).toHaveCSS('display', 'block')
  await expect(checkedLabelGZ).toHaveCSS('display', 'block')
  await expect(checkedLabelSZ).toHaveCSS('display', 'block')
})
