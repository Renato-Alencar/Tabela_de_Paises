<template>
  <div id="app">
    <fulltable/>
  </div>
</template>

<script>

import fulltable from '@/components/TableComplete'

export default {
  name: 'App',
  components: {
    fulltable
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>