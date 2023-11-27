import { test, expect } from '@playwright/test'

test('TagGroup 尺寸', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tag-group#tag-group-size')

  const mediumTag = page.locator('.tiny-demo-tag-group-size .tiny-tag-group .tiny-tag.tiny-tag--medium').nth(0)
  await expect(mediumTag).toHaveCSS('height', '24px')
  await expect(mediumTag).toHaveCSS('line-height', '24px')
  

  const smallTag = page.locator('.tiny-demo-tag-group-size .tiny-tag-group .tiny-tag.tiny-tag--small').nth(0)
  await expect(smallTag).toHaveCSS('height', '20px')
  await expect(smallTag).toHaveCSS('line-height', '20px')

  const miniTag = page.locator('.tiny-demo-tag-group-size .tiny-tag-group .tiny-tag.tiny-tag--mini').nth(0)
  await expect(miniTag).toHaveCSS('height', '16px')
  await expect(miniTag).toHaveCSS('line-height', '16px')

})
