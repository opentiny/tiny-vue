export const linkClick = ({ props, refs, router, emit, breadcrumbEmitter, constants }) => (event) => {
  const { replace, to, option } = props
  const currentBreadcrumbItem = { link: refs.link, replace, to, event, option }

  breadcrumbEmitter.emit(constants.EVENT_NAME.breadcrumbItemSelect, currentBreadcrumbItem)
  emit('select', currentBreadcrumbItem)

  if (!to || !router) {
    return
  }

  replace ? router.replace(to) : router.push(to)
}
