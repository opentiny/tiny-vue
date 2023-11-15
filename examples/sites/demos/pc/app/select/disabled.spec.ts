import { test, expect } from '@playwright/test'

test('disabled', async ({ page }) => {
  await page.goto('http://localhost:7130/pc/select/disabled')
  const input = page.locator('#preview .tiny-input__inner')
  const hasDisabled = await input.evaluate((input) => input.hasAttribute('disabled'))
  await expect(hasDisabled).toBe(true)
})

test('disabled-options-multiple', async ({ page }) => {
  await page.goto('http://localhost:7130/pc/select/disabled-options')
  const select = page.locator('#preview .tiny-select')
  const tags = page.locator('#preview .tiny-select .tiny-tag')

  await select.click()
  await expect(page.getByRole('listitem').filter({ hasText: '黄金糕' })).toHaveClass(/is-disabled/)
  await expect(page.getByRole('listitem').filter({ hasText: '蚵仔煎' })).toHaveClass(/is-disabled/)
  await page.getByRole('listitem').filter({ hasText: '黄金糕' }).click()
  await expect(tags).toHaveCount(0)
  await page.getByRole('listitem').filter({ hasText: '双皮奶' }).click()
  await expect(tags).toHaveCount(1)
  await expect(tags.filter({ hasText: '双皮奶' })).toHaveCount(1)
})

test('disabled-and-selected-options', async ({ page }) => {
  await page.goto('http://localhost:7130/pc/select/disabled-and-selected-options')
  const slect = page.locator('#preview .tiny-select')
  const tags = page.locator('#preview .tiny-select .tiny-tag')
  const listitem = page.getByRole('listitem')
  await expect(tags.filter({ hasText: '黄金糕' }).locator('svg')).toHaveCount(0)
  await slect.click()
  await expect(listitem.filter({ hasText: '全部' })).toHaveCount(0)
  await expect(listitem.filter({ hasText: '黄金糕' })).toHaveClass(/is-disabled/)
  await page.getByRole('listitem').filter({ hasText: '双皮奶' }).click()
  await expect(tags.filter({ hasText: '黄金糕' }).locator('.tiny-svg')).toHaveCount(0)
  await expect(tags.filter({ hasText: '双皮奶' }).locator('.tiny-svg')).toHaveCount(1)
  await page.getByRole('listitem').filter({ hasText: '黄金糕' }).click()
  await expect(tags.filter({ hasText: '黄金糕' }).locator('.tiny-svg')).toHaveCount(0)
})


