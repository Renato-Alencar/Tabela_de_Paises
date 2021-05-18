<template>
  <tr class="row">
    <td>{{table.name}}</td>
    <td>{{table.capital}}</td>
    <td><img :src="table.flag" :alt="`Bandeira do país ${table.name}`"></td>
  </tr>
</template>

<script>
  export default {
    name: 'row',
    props: {
      table: {
        type: Object,
        default: () => {},
      },
    }
}
</script>

<style lang="scss" scoped>
  .row {
    img {
      width: 7vw;
      height: auto;
    }
  }
</style>