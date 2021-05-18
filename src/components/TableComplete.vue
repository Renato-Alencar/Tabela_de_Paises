<template>
  <div class='fulltable'>
    <input type='text' placeholder="Filtre por..." v-model="inputTable">
    <button @click="handle">{{nameButton}}</button>
    <table>
      <thead>
        <tr v-once>
          <th v-for="(title, index) in headTable" :key="index">{{title}}</th>
        </tr>
      </thead>
      <tbody v-if="countries.length">
        <row 
          v-for="country in countries" 
          :key="country.id" 
          :table="country"
        />
      </tbody>
      <tbody v-else>País ou Capital não encontrado</tbody>
    </table>
  </div>
</template>

<script>

import row from '@/components/TableRow'
import {searchTable} from '@/helpers/searchTable'

export default {
  name: 'fulltable',
  components: {
    row
  },
  data() {
    return {
        inputTable: '',
        nameButton: 'A - Z',
        headTable: ['País', 'Capital', 'Bandeira'],
    }
  },
  mounted() {
    this.$store.dispatch('listData')
  },
  methods: {
    handle() {
      this.reverseTable()
      this.reverseNameButton()
    },
    reverseTable() {
      this.$store.commit('REVERSE_TABLE') 
    },
    reverseNameButton() {
      this.nameButton = this.nameButton.split('').reverse().join('')
    },
  },
  computed: {
    countries() {
      return searchTable(this.$store.state.countries, this.inputTable)
    },
  },
}
</script>