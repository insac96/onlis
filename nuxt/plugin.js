import Vue from 'vue'
import Onlis from 'onlis'

// Init Directives
Onlis.initDirectives(Vue)

// Init Components
Onlis.initComponents(Vue)

// Init Services
export default async function (ctx, inject) {
  Onlis.installNuxt(ctx, inject, Vue, <%= serializeFunction(options) %>)
}

// Update Hydration
Onlis.updateHydration(Vue)