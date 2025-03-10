import { test, expect } from '@playwright/test'

test('ProcessDesigner 国际化', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  page.on('download', async (download) => {
    await download.cancel()
    expect(download.suggestedFilename().endsWith('.xml')).toBeTruthy()
  })
  await page.goto('process-designer#i18n')
  const el = await page.waitForSelector(
    '#properties > div > div > div.bio-properties-panel-scroll-container > div:nth-child(1) > div.bio-properties-panel-group-header > div.bio-properties-panel-group-header-title'
  )
  expect(await el.textContent()).toBe('通用')
})
