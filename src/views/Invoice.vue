<template>
  <div id="invoice">
      <LineItem v-for="(lineItem, lineItemIndex) in store.lineItems" :key="lineItemIndex"/>
      <div id="add-line-item">
        <button @click="handleAddLineItem">Add Line Item</button>
      </div>
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
      'module', ['handleAddLineItem']
    ),
  }
}
</script>

<style scoped lang="scss">
  @import "@/styles/app.scss";

  #invoice{
    font-family: $body-font;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 20px;
    background: $White-Widow;
    #add-line-item{
      width: 100%;
      max-width: 1100px;
      button{
        @include transition(opacity 0.25s ease-in-out);
        font-family: $body-font;
        font-size: 1.8rem;
        font-weight: 600;  
        padding: 10px 16px;
        background: $Blue-Dream;
        text-align: center;
        color: $White-Widow;
        border: 0;
        cursor: pointer;
        margin: 14px 0;
        &:hover{
          opacity: .5;
        }
      }
    }
  }
</style>
