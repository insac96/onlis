<template>
  <div>
    <ui-button @click="$onlis.theme.toggleDark()" dark block class="mb-2">Dark</ui-button>
    <ui-button @click="active = !active" fashion="flat" block class="mb-2">Active</ui-button>

    <ui-button>
      <ui-icon name="bx-home" left />
      Button
    </ui-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  active: boolean = false
  value: any = 8
  type: string = ''
}
</script>