import { expect, test } from '@playwright/test'

test('迷你模式下的透明模式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('search#transparent-mode')

  const search = page.locator('.tiny-search.mini')
  const blank = page.getByRole('code').first()
  const option = search.locator('.tiny-search__poplist-item').filter({ hasText: '找文档' })
  const line = search.locator('.tiny-search__line')
  const input = search.locator('.tiny-search__input')
  const icon = search.locator('.tiny-search__input-btn > a')
  const text = search.locator('.tiny-search__text')
  const expand = search.locator('.icon-outer')

  await expect(search).toHaveClass(/collapse/)
  await expect(input).not.toBeVisible()
  await expect(line).toHaveCSS('width', '28px')
  await expect(line).toHaveCSS('border-radius', '28px')

  await icon.click()
  await expect(search).not.toHaveClass(/collapse/)
  await expect(input).toBeVisible()
  await expect(text).toHaveText('找人')
  await expand.click()
  await option.click() // 下拉选择
  await expect(text).toHaveText('找文档')

  await blank.click() // 点击空白处收回
  await expect(search).toHaveClass(/collapse/)
  await expect(input).not.toBeVisible()
  await expect(line).toHaveCSS('width', '28px')
  await expect(line).toHaveCSS('border-radius', '28px')
})
