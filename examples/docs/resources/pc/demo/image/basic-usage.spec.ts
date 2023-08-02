import { test, expect } from '@playwright/test'

test('基础用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  const requestPromise = page.waitForRequest('	http://localhost:7130/static/images/mountain.png')
  await page.goto('http://localhost:7130/pc/image/basic-usage')
  const request = await requestPromise
  await expect(request.url()).toEqual('http://localhost:7130/static/images/mountain.png')
  const img = page.locator('.tiny-image > .tiny-image__inner')
  await page.waitForTimeout(500)
  await expect(img).toHaveAttribute('style', 'width: 100px; height: 100px;')
})
