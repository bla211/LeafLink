<template>
  <div id="invoice">
      <LineItem v-for="(lineItem, lineItemIndex) in store.lineItems" :key="lineItemIndex"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import LineItem from '@/components/Invoice/LineItem.vue';

export default {
  components: {
    LineItem
  },
  created(){
  },
  computed: {
    store(){
      return this.$store.state.store.state;
    }
  },
  methods: {
    ...mapActions(
      'module', []
    ),
  }
}
</script>

<style scoped lang="scss">
  @import "@/styles/app.scss";

  #invoice{
    font-family: $body-font;
    font-size: 12rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 20px;
    background: $White-Widow;
  }
</style>
