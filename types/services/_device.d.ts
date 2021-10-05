export interface IDevice {
  userAgent : string
  resizeTimeout : any
  defaultUserAgent : string
  ctx : any

  isMobile : boolean
  isTablet : boolean
  isMobileOrTablet : boolean
  isDesktop : boolean

  isAndroid : boolean
  isIOS : boolean
  isWindow : boolean
  isMacOS : boolean

  isSamsung : boolean
  isEdge : boolean
  isFirefox : boolean
  isChrome : boolean
  isSafari : boolean

  isCrawler : boolean

  onResize () : void
  update () : void
  makeFlags () : void
}
