import Vue from 'vue'

import Onlis, {
  <%= [].concat(options.components, options.directives).filter(Boolean).join(',\n  ') %>
} from 'Onlis'

// Init Components
<%= options.components.reduce((acc, component) => (acc += `Vue.use(${component});\n` ), '') %>

// Init Directives
<%= options.directives.reduce((acc, directive) => (acc += `Vue.directive('${directive}', ${directive});\n` ), '') %>

// Init Mixin
Onlis.initMixin(Vue)

// Init Services
export default async function (ctx, inject) {
  const opts = <%= serializeFunction(options) %>
  const service = Onlis.initServices(Vue, opts, ctx)

  inject('onlis', service)
}