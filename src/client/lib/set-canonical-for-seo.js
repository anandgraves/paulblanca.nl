export default function (route) {
  const routeWithTrailingSlash = route.fullPath.endsWith('/')
    ? route.fullPath
    : `${route.fullPath}/`
  const canonicalUrl = `${process.env.baseUrl}${routeWithTrailingSlash}`

  return {
    link: [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: canonicalUrl
      }
    ]
  }
}
