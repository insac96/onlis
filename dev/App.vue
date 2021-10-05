<template>
  <ui-app>
    <ui-main>
      <ui-row jus="center">
        <ui-col w="5" sm="12" xs="12">

          <ui-button @click="$onlis.theme.toggleDark()" color="dark" block class="mb-2">Dark</ui-button>
          <ui-button @click="active = !active" fashion="flat" block>Active</ui-button>

          <div class="mb-2"></div>

          {{$onlis.breakpoint.isDesktop}}

          <ui-sidebar v-model="value" :open.sync="active" auto-scrol layout>
            <template #logo>Onlis</template>

            <ui-sidebar-group>
              <template #target>
                <ui-sidebar-item target>
                  <template #icon><i class="bx bx-home"></i></template>
                  Group 1
                </ui-sidebar-item>
              </template>


              <template #child>
                <ui-sidebar-item :value="1">Child 1</ui-sidebar-item>
                <ui-sidebar-item :value="2">Child 2</ui-sidebar-item>
                <ui-sidebar-item :value="3">Child 3</ui-sidebar-item>

                <ui-sidebar-group>
                  <template #target>
                    <ui-sidebar-item target>Group Nest</ui-sidebar-item>
                  </template>

                  <template #child>
                    <ui-sidebar-item :value="10">Child Nest 1</ui-sidebar-item>
                    <ui-sidebar-item :value="11">Child Nest 2</ui-sidebar-item>
                    <ui-sidebar-item :value="12">Child Nest 3</ui-sidebar-item>
                  </template>
                </ui-sidebar-group>
              </template>
            </ui-sidebar-group>

            <ui-sidebar-group>
              <template #target>
                <ui-sidebar-item target>
                  <template #icon><i class="bx bx-search"></i></template>
                  Group 2
                </ui-sidebar-item>
              </template>

              <template #child>
                <ui-sidebar-item :value="4">Child 1</ui-sidebar-item>
                <ui-sidebar-item :value="5">Child 2</ui-sidebar-item>
                <ui-sidebar-item :value="6">Child 3</ui-sidebar-item>
              </template>
            </ui-sidebar-group>

            <ui-sidebar-item :value="7">
              <template #icon><i class="bx bx-lock"></i></template>
              Item 3
            </ui-sidebar-item>

            <ui-sidebar-item :value="8">
              <template #icon><i class="bx bxl-vuejs"></i></template>
              Item 4
            </ui-sidebar-item>

            <template #footer>Footer</template>
          </ui-sidebar>

        </ui-col>
      </ui-row>
    </ui-main>
  </ui-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class App extends Vue {

  active: boolean = false

  value: number = 10

  name: string = null
  pass: string = null
  status: number = null
}
</script>
