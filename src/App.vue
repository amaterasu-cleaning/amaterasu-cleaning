<template>
  <v-app>
    <v-app-bar app dark>
      <div class="d-flex align-center">天照大掃除</div>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
