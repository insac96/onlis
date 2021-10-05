function getTag(value : any) : string {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]'
  }
  else return Object.prototype.toString.call(value)
}

function isObjectLike(value : any) : boolean {
  return typeof value === 'object' && value !== null
}

export const isBoolean = (value : any) : boolean => {
  return value === true 
  || value === false 
  || (isObjectLike(value) && getTag(value) == '[object Boolean]')
}

export const isFunction = (value : any) : boolean => {
  return typeof value === 'function'
}

export const isNull = (value : any) : boolean => {
  return value === null && value !== 0
}

export const isNumber = (value : any) : boolean => {
  return typeof value === 'number' 
  || (isObjectLike(value) && getTag(value) == '[object Number]')
}

export const isString = (value : any) : boolean => {
  const type = typeof value

  return type === 'string' 
  || (type === 'object' 
  && value != null 
  && !Array.isArray(value) 
  && getTag(value) == '[object String]')
}

export const isUndefined = (value : any) : boolean => {
  return value === undefined
}

export const isObject = (value : any) : boolean => {
  return typeof value === 'object' 
  && !Array.isArray(value) 
  && value !== null
}

export const isPercent = (value : any) : boolean => {
  return !!isNumber(value) && (0 <= value && value <= 100)
}

export const isPxRemEm = (value : string) : boolean => {
  return /px$|rem$|em$/i.test(value)
}

export const returnPX = (value : any) : string | null => {
  if(!isNumber(value) && !isString(value)) return null

  if(!!isNumber(value)){
    return !isNaN(value) ?  `${value}px` : null
  }
  else if (!!isString(value)){
    return !isNaN(Number(value)) ? `${value}px` : (!!isPxRemEm(value) ? value : null)
  }
}

export const getObject = (value : any) : any => {
  if(!value) return undefined
  if(!isObject(value) && !isFunction(value)) return

  let newValue

  // Check Type
  if(!!isObject(value)){
    newValue = value
  }
  else if (!!isFunction(value)){
    newValue = value()
  }

  // Return
  return !!isObject(newValue) ? newValue : undefined
}

export const toLowerCase = (text : string, replaceSpace? : string) : string => {
  let string = text
  const replace = replaceSpace ? replaceSpace : ''

  string = string.toLowerCase()
  string = string.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g,"a")
  string = string.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g,"e")
  string = string.replace(/ì|í|ị|ỉ|ĩ|Ì|Í|Ị|Ỉ|Ĩ/g,"i")
  string = string.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g,"o")
  string = string.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g,"u")
  string = string.replace(/ỳ|ý|ỵ|ỷ|ỹ|Ỳ|Ý|Ỵ|Ỷ|Ỹ/g,"y")
  string = string.replace(/đ|Đ/g,"d")
  string = string.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ")
  string = string.replace(/(^\s+)/gm,"")
  string = string.replace(/(\s+$)/gm,"")
  string = string.replace(/\s+/g, replace)
  
  return string
}