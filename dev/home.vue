<template>
  <div>
    <ui-button @click="$onlis.theme.toggleDark()" color="dark" class="mb-2">Dark</ui-button>
    <ui-button @click="active = !active" fashion="flat" class="mb-2">Active</ui-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  active: boolean = false
  value: number[] = []
}
</script>