<template>
  <v-app>
    <v-app-bar app color="white" flat>
      <v-container class="py-0 fill-height">
        <span>Toy picker</span>
        <v-spacer></v-spacer>

        <v-spacer></v-spacer>
        <v-btn @click="configDialog = !configDialog"
          ><v-icon>mdi-cog</v-icon></v-btn
        >
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-dialog v-model="configDialog"
      ><ToyConfiguration></ToyConfiguration>
    </v-dialog>
  </v-app>
</template>

<script>
import ToyConfiguration from '@/components/ToyConfiguration.vue'
export default {
  components: {
    ToyConfiguration,
  },
  data: () => ({
    configDialog: false,
  }),
}
</script>
