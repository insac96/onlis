import Vue from 'vue'
import Onlis from 'onlis'

Onlis.initDirectives(Vue)
Onlis.initComponents(Vue)
Onlis.updateHydration(Vue)

export default function (ctx, inject) {
  <% if (options) { %>
    Onlis.installNuxt(ctx, inject, Vue, options)
  <% } else { %>
    Onlis.installNuxt(ctx, inject, Vue)
  <% } %>
}