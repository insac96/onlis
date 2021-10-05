import './_style.sass'

import uiCol from './_uiCol'
import uiRow from './_uiRow'

uiCol.install = (vue: any) => {
  vue.component('ui-col', uiCol)
}

uiRow.install = (vue: any) => {
  vue.component('ui-row', uiRow)
}

export {
  uiCol,
  uiRow
}