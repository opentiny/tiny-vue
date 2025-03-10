const translate = (translations: Record<string, string>) => {
  return (template: string, replacement: Record<string, string>) => {
    const _replacement = replacement || {}
    const _template = translations[template] || template
    return _template.replace(/{([^}]+)}/g, function (_, key) {
      return _replacement[key] || '{' + key + '}'
    })
  }
}

export const translateModule = (maps: Record<string, any>) => {
  return {
    translate: ['value', translate(maps)]
  }
}

export default translate
