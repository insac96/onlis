import Vue from 'vue'
import Onlis from 'onlis'

// Init Components
Onlis.initComponents(Vue)

// Init Directives
Onlis.initDirectives(Vue)

// SSR Service Update
<% if (options.isSSR === true) { %>
Onlis.ssrServiceUpdate(Vue)
<% } %>

// Init Services
export default async function (ctx, inject) {
  const opts = <%= serializeFunction(options) %>
  
  const service = Onlis.initServices(Vue, opts, ctx)

  inject('onlis', service)
}
