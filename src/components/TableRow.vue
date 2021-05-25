<template>
  <tr class="row">
    <td>{{table.name}}</td>
    <td>{{table.capital}}</td>
    <td><img :src="table.flag" :alt="`Country flag ${table.name}`"></td>
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
  $headWidth: 33.3%;
  $mobile: 767px;
  .row {
    td {
      min-width: $headWidth;
      width: $headWidth;
      max-width: $headWidth;

      img {
        width: clamp(3.5rem, 8vw, 10rem);
        height: auto;

        margin: 1vw;
      }
    }
  }
</style>