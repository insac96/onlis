import Vue from 'vue'
import Onlis from 'onlis'

// Init Directives
Onlis.initDirectives(Vue)

// Init Components
Onlis.initComponents(Vue)

// Init Mixin
Onlis.initMixin(Vue)

// Init Services
export default async function (ctx, inject) {
  const opts = <%= serializeFunction(options) %>
  const service = Onlis.initServices(Vue, opts, ctx)

  inject('onlis', service)
}
