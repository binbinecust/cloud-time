export default function({ isServer, req, redirect, route }) {
  const isMobile = ua => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      ua
    )
  }
  route.isMobile = isMobile
  console.log(route.fullPath)
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent || ''
  if (route.fullPath.indexOf('/m') > -1 && !isMobile(userAgent)) {
    const url = route.fullPath.substring(2)
    redirect(url)
  }

  if (route.fullPath.indexOf('/m') < 0 && isMobile(userAgent)) {
    redirect('/m' + route.fullPath)
  }

  if (route.fullPath === '/' || route.fullPath === '/m/') {
    redirect(route.fullPath + 'index')
  }
}
