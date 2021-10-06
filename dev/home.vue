<template>
  <div>
    <ui-button @click="$onlis.theme.toggleDark()" color="dark" block class="mb-2">Dark</ui-button>
    <ui-button @click="active = !active" fashion="flat" block class="mb-2">Active</ui-button>

    <div class="pa-2">
      <p><b>isMobile</b>: {{$onlis.breakpoint.isMobile}}</p>
      <p><b>isDesktop</b>: {{$onlis.breakpoint.isDesktop}}</p>
      <p><b>isTablet</b>: {{$onlis.breakpoint.isTablet}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  active: boolean = false
  value: number = 10
}
</script>