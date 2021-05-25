<template>
  <div id='fulltable' class="text-caption">
    <v-card class="d-flex mb-4 justify-space-around transparent overline"  flat>
      <v-card-actions class="pa-2">
        <v-text-field 
          type='text' 
          label="Filter by..."
          v-model="inputTable" 
          clearable
          @click:clear="clearFilter"
        ></v-text-field>
      </v-card-actions>

      <v-card-actions>
        <v-btn 
          @click="handle" large
          color="grey" 
          class="font-weight-bold white--text">
          {{nameButton}}</v-btn>
      </v-card-actions>
    </v-card>
    
    <v-card outlined color="grey lighten-1" id="countryTable" class="justify-space-around">
      <v-simple-table 
      fixed-header
      height="80vh" 
      class="grey lighten-4 justify-center" 
      v-if="countries.length">
        <template v-slot: default>
          <thead class="text-caption" v-once>
            <tr>
              <th 
                lang="pt-br"
                class="title font-weight-bold grey lighten-4 text-center " 
                v-for="(title, index) in headTable" 
                :key="index">{{title}}</th>
            </tr>
          </thead>
          <tbody class="justify-space-around grey lighten-4">
            <row 
              class="text-center overline text-caption"
              v-for="country in countries" 
              :key="country.id" 
              :table="country"
            />
          </tbody>
        </template>
      </v-simple-table>

      <v-card-title v-else v-once
        class="font-weight-bold justify-center grey lighten-4 text-caption overline"
      >Country or Capital not found.
      </v-card-title>
    </v-card>
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
        headTable: ['Country', 'Capital', 'Flag'],
    }
  },
  mounted() {
    this.$store.dispatch('listData')
  },
  methods: {
    handle() {
      this.reverseNameButton()
      this.reverseTable()
    },
    reverseTable() {
      this.$store.commit('REVERSE_TABLE') 
    },
    reverseNameButton() {
      this.nameButton = this.nameButton.split('').reverse().join('')
    },
    clearFilter() {
      this.inputTable = ''
    }
  },
  computed: {
    countries() {
      return searchTable(this.$store.state.countries, this.inputTable)
    }
  },
}
</script>

<style lang="scss" scoped>
  $headWidth: 33%;
  $mobile: 767px;

  #fulltable {
    width: 70vw;
    margin: 0 auto;
  
    @media screen and (max-width: $mobile) {
      width: 95vw;
    }

    #countryTable {
      th {
        min-width: $headWidth;
        width: $headWidth;
        max-width: $headWidth;
      }
    }
  }
  
</style>