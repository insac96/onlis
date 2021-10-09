<template>
  <ui-app>
    <ui-main>
      <ui-row jus="center">
        <ui-col w="6" sm="12" xs="12">
          <home></home>      
        </ui-col>
      </ui-row>
    </ui-main>
  </ui-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import home from './home.vue'

@Component({
  components: {
    home
  }
})
export default class App extends Vue {
  active : boolean = false

  left : boolean = false

  right : boolean = false
}
</script>
