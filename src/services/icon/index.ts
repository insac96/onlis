import { IConfigs, IIcon } from '../../../types'
import { is_Number, is_String } from '../../util'

export default class Icon implements IIcon {
  public tab = 'i'

  public font = 'bx'

  public left = 1

  public right = 1

  constructor(configs : IConfigs){
    this.initConfig(configs.icon as IIcon)
  }

  private initConfig (config: IIcon) {
    if(!config) return

    // Init Tab
    if(!!is_String(config.tab)){
      this.tab = config.tab
    }

    // Init Font
    if(!!is_String(config.font)){
      this.font = config.font
    }

    // Init Space Left
    if(!!is_Number(config.left) && config.left <= 10){
      this.left = config.left
    } 
    
    // Init Space Right
    if(!!is_Number(config.right) && config.right <= 10){
      this.right = config.right
    }
  }
}