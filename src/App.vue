<template>
  <v-app id="app">
    <fulltable class="mytable justify-center"/>
  </v-app>
</template>

<script>
import fulltable from './components/TableComplete';

export default {
  name: 'App',

  components: {
    fulltable,
  }
};
</script>

<style lang="scss">
  #app {
    background-color: #f5f5f5;
    mytable: {
      margin: 0 auto;
    }
  }
</style>