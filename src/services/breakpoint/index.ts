import { IBreakpoint } from '../../../types'


export default class Breakpoint implements IBreakpoint {
  private resizeTimeout = 0

  public isMobile = false

  public isTablet = false

  public isDesktop = false

  public xs = false // Mobile

  public sm = false // Tablet

  public md = false // Laptop
  
  public lg = false // Desktop

  public xl = false // 2K...

  public thresholds = {
    xs: 600,
    sm: 960,
    md: 1264,
    lg: 1904
  }

  constructor () {
    this.update()
  }

  public init () {
    this.update()

    if (typeof window === 'undefined') return // SSR
    window.addEventListener('resize', this.onResize.bind(this), { passive: true })
  }

  public update () {
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
    if (typeof window === 'undefined') return 0 // SSR (Mobile = xs = true)

    return Math.max(
      document.documentElement!.clientWidth,
      window.innerWidth || 0
    )
  }
}