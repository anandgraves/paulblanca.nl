export default function (route) {
  const canonicalUrl = `${process.env.baseUrl}${route.fullPath}`

  return {
    link: [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: canonicalUrl,
      },
    ],
  }
}
