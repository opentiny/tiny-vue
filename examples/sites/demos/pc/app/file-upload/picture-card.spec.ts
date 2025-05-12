import { test, expect } from '@playwright/test'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

test('照片墙', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('file-upload#picture-card')

  const container = page.locator('#picture-card')
  const upload = container.locator('.tiny-upload')
  const li = container.locator('.tiny-upload-list__li')
  const items = container.locator('.tiny-upload-list__item')
  const first = items.nth(0)
  const [fileChooser] = await Promise.all([page.waitForEvent('filechooser'), upload.click()])
  const delButton = container.getByRole('img').first().locator('visible=true')
  const prevPic = container.getByTitle('预览文件').first()
  const prevImg = page.locator('.tiny-dialog-box__body > img')
  const dialogClose = page.getByRole('button', { name: 'Close' })
  const { width, height } = await first.boundingBox()

  const currentPath = path.resolve(__dirname, '测试.jpg')

  await expect(width).toEqual(100)
  await expect(height).toEqual(100)
  await expect(li).toHaveCount(4)
  await fileChooser.setFiles(currentPath)
  await first.hover()
  await prevPic.click()
  await expect(prevImg).toHaveAttribute('src', /\/fruit.jpg/)
  await dialogClose.click()
  await first.hover()
  await delButton.click()
  await page.waitForTimeout(200)
  await first.isHidden()
})
