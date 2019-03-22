<template>
    <b-row>
      <b-col lg="6">
        <b-card>
            <b-table striped hover :items="items" />
        </b-card>
      </b-col>
    </b-row>
</template>

<script>
import { Callout } from '@coreui/vue'

export default {
  data() {
    return {
      items: [
        { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
      ]
    }
  }
}
</script>

<style>
  /* IE fix */
  #card-chart-01, #card-chart-02 {
    width: 100% !important;
  }
</style>