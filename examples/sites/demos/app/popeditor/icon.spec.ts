import { test, expect } from '@playwright/test'

test('PopEditor 自定义图标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/popeditor/icon')

  const preview = page.locator('#preview')
  const icon = preview.locator('.tiny-popeditor-readonly svg path')

  // 图标非默认图标
  await expect(icon).not.toHaveAttribute(
    'd',
    'M292.768 449.694c2.491.515 4.99.987 7.469 1.551 28.956 6.587 48.828 32.893 47.59 62.98-1.187 28.85-23.508 53.387-52.383 57.605-.904.132-1.784.433-2.676.655H280.21c-.773-.21-1.536-.498-2.323-.615-26.22-3.891-46.433-23.108-51.662-49.134-.36-1.793-.753-3.579-1.13-5.369V504.81c.233-.992.536-1.973.694-2.977 3.902-24.797 21.983-44.51 46.302-50.418 2.688-.653 5.413-1.151 8.12-1.722 4.185.002 8.371.002 12.557.002zm212.46 122.792c-2.49-.515-4.99-.988-7.469-1.55-28.956-6.589-48.828-32.895-47.59-62.981 1.186-28.85 23.507-53.387 52.383-57.604.905-.132 1.785-.433 2.676-.656h12.557c2.491.515 4.99.987 7.47 1.551 28.956 6.587 48.828 32.893 47.59 62.98-1.186 28.85-23.507 53.387-52.383 57.605-.904.132-1.784.433-2.676.655h-12.558zm224.692 0c-2.491-.515-4.991-.988-7.47-1.55-28.957-6.589-48.829-32.895-47.59-62.981 1.186-28.85 23.507-53.387 52.383-57.604.904-.132 1.784-.433 2.676-.656h12.557c.774.209 1.536.498 2.324.615 26.22 3.89 46.433 23.108 51.661 49.134.361 1.793.753 3.58 1.131 5.368v12.558c-.234.992-.536 1.973-.695 2.977-3.902 24.798-21.983 44.51-46.302 50.418-2.688.654-5.412 1.152-8.12 1.723-4.184-.002-8.369-.002-12.555-.002z'
  )
})
