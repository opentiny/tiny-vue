export const BIG_DELTA_LIMIT = 2000 // Delta数据行太多超出该限制时，加载会比较慢，需要提示用户

import { EN_US } from './i18n/en-us'
import { ZH_CN } from './i18n/zh-cn'
const localLang = localStorage.getItem('lang') || 'zh-cn'
export const LANG_CONF = localLang === 'en-us' ? EN_US : ZH_CN

// Image
export const IMAGE_UPLOADER_MIME_TYPES = [
  'image/png',
  'image/jpeg',
  'image/gif',
  'image/svg+xml',
]

// 常用文件格式
export const OTHER_FILE_UPLOADER_MIME_TYPES = [
  'text/plain',
  'application/json',
  'application/pdf',
]

export const AUDIO_VIDEO_UPLOADER_MIME_TYPES = [
  'audio/wave',
  'audio/wav',
  'audio/x-wav',
  'audio/x-pn-wav',
  'audio/mpeg',
  'video/mpeg',
  'video/x-msvideo',
]

//  MS office
export const DOC_UPLOADER_MIME_TYPES = [
  'application/msword',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
  'application/vnd.ms-word.document.macroEnabled.12',
  'application/vnd.ms-word.template.macroEnabled.12',
]

export const XSL_UPLOADER_MIME_TYPES = [
  'application/vnd.ms-excel',
  'application/vnd.ms-excel',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
  'application/vnd.ms-excel.sheet.macroEnabled.12',
  'application/vnd.ms-excel.template.macroEnabled.12',
  'application/vnd.ms-excel.addin.macroEnabled.12',
  'application/vnd.ms-excel.sheet.binary.macroEnabled.12',
]

export const PPT_UPLOADER_MIME_TYPES = [
  'application/vnd.ms-powerpoint',
  'application/vnd.ms-powerpoint',
  'application/vnd.ms-powerpoint',
  'application/vnd.ms-powerpoint',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  'application/vnd.openxmlformats-officedocument.presentationml.template',
  'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
  'application/vnd.ms-powerpoint.addin.macroEnabled.12',
  'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
  'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
  'application/vnd.ms-powerpoint.slideshow.macroEnabled.12',
]

// Compressed files
export const COMPRESSED_UPLOADER_MIME_TYPES = [
  'application/x-tar',
  'application/x-zip-compressed',
  'application/zip-compressed',
  'application/gzip',
  '.rar',
  '.7z',
]

// default
export const FILE_UPLOADER_MIME_TYPES = [
  ...OTHER_FILE_UPLOADER_MIME_TYPES,
  ...AUDIO_VIDEO_UPLOADER_MIME_TYPES,
  ...DOC_UPLOADER_MIME_TYPES,
  ...XSL_UPLOADER_MIME_TYPES,
  ...PPT_UPLOADER_MIME_TYPES,
  ...COMPRESSED_UPLOADER_MIME_TYPES,
]
