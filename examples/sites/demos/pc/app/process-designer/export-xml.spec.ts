import { test, expect } from '@playwright/test'

test('ProcessDesigner 追加模块', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  page.on('download', async (download) => {
    await download.cancel()
    expect(download.suggestedFilename().endsWith('.xml')).toBeTruthy()
  })
  await page.goto('process-designer#export-xml')
  await (await page.waitForSelector('#export-xml > div > div.pc-demo-container > div > div > button')).click()
})
