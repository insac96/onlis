import { IConfigs, IBreakpoint } from '../../../types'

export default class Breakpoint implements IBreakpoint {
  private resizeTimeout : any = 0

  private isSSR : boolean

  public thresholds = {
    xs: 600,
    sm: 960,
    md: 1264,
    lg: 1904
  }

  public isMobile = true // SSR = true

  public isTablet = false

  public isDesktop = false

  public xs = true // Mobile - SSR = true

  public sm = false // Tablet

  public md = false // Desktop Medium
  
  public lg = false // Desktop Large

  public xl = false // Desktop >= 2k

  constructor (configs : IConfigs) {
    this.isSSR = configs.isSSR
    if(!!this.isSSR) return

    this.init()
  }

  public init () {
    this.update()

    if (typeof window === 'undefined') return 
    window.addEventListener('resize', this.onResize.bind(this), { passive: true })
  }

  public updateFromDevice (device : any) {
    this.xs = device.isMobile
    this.sm = device.isTablet
    this.md = device.isDesktop

    this.isMobile = this.xs
    this.isTablet = this.sm
    this.isDesktop = this.md
  }

  private update () {
    const width = this.getClientWidth()

    this.xs = width < this.thresholds.xs
    this.sm = width < this.thresholds.sm && !this.xs
    this.md = width < this.thresholds.md && !(this.sm || this.xs)
    this.lg = width < this.thresholds.lg && !(this.md || this.sm || this.xs)
    this.xl = width >= this.thresholds.lg

    this.isMobile = this.xs
    this.isTablet = this.sm
    this.isDesktop = width >= this.thresholds.sm
  }
  
  private onResize () {
    clearTimeout(this.resizeTimeout)
    this.resizeTimeout = window.setTimeout(this.update.bind(this), 50)
  }

  private getClientWidth () {
    if (typeof window === 'undefined') return 0

    return Math.max(
      document.documentElement!.clientWidth,
      window.innerWidth || 0
    )
  }
}