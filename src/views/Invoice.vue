<template>
  <div id="invoice">
      <div id="invoice-header">
        <span>Description</span>
        <span>Unit Price</span>
        <span>Quantity</span>
        <span>Total</span>
      </div>
      <LineItem v-for="(lineItem, lineItemIndex) in store.lineItems" :key="lineItemIndex"/>
      <div id="add-line-item">
        <button @click="addLineItem">Add Line Item</button>
      </div>

      <div id="total-bar">   
        <div class="total-bar__field">
          <label>Subtotal</label>
          <input type="text" :value="store.subTotal" disabled/>
        </div> 
        <div class="total-bar__field">
          <label>Tax</label>
          <input type="text" :value="store.tax"/>
        </div> 
        <div class="total-bar__field">
          <label>Deductions</label>
          <input type="text" :value="store.deductions"/>
        </div> 
        <div class="total-bar__field" id="total">
          Total: ${{ store.total }}
        </div>
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
      'module', ['addLineItem']
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
    padding: 60px 20px;
    background: $White-Widow;
    #invoice-header{
      display: flex;
      font-family: $body-font;
      font-size: 18rem;
      width: 100%;
      max-width: 1100px;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 10px 0 10px 24px;
      i{
        @include transition(opacity 0.25s ease-in-out);
        align-self: flex-end;
        color: #ed5665;
        cursor: pointer;
        opacity: .25;
        &:hover{
          opacity: 1;
        }
      }
      span{
        flex: 1;
        margin: 0 10px;
        padding: 10px 16px 4px 0;
        font-family: $body-font;
        font-size: 1.6rem;
      }
    }
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
    #total-bar{
      position: fixed;
      bottom:0;
      left:0;
      display: flex;
      padding: 20px 40px;
      background: $Green-Crack;
      width: 100%;
      color: $White-Widow;
      font-family: $body-font;
      justify-content: center;
      .total-bar__field{     
        font-size: 2.4rem;
        margin: 0 16px;
        display: flex;
        align-content: flex-end;
        label{
          display: flex;
          align-self: center;
        }
        input{
          flex: 1;
          padding: 10px 16px;
          border: 0;
          font-family: $body-font;
          font-size: 1.6rem;
          margin: 0 0 0 10px;
          background: rgba(255, 255, 255, .25);
          color: $White-Widow;
          width: 120px;
          font-size: 2.4rem;
        }
      }
      #total{
        font-size: 2.4rem;
        font-weight: 900;
        text-transform: uppercase;
        margin: 0 0 0 16px;

        display: flex;
        align-self: center;
      }
    }
  }
</style>
