export interface IDevice {
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
}

export interface IDeviceConfig {
  resize? : boolean
  defaultUserAgent? : string
}
