<template>
  <div id="invoice">
      <div id="invoice-header">
        <span>Description</span>
        <span>Unit Price ($)</span>
        <span>Quantity (#)</span>
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
          <input type="text" :value="store.tax" disabled/>
        </div> 
        <div class="total-bar__field">
          <label>Deductions</label>
          <input type="text" v-model="deductions"/>
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
    },
    deductions: {
      get(){
        return this.store.deductions;
      },
      set(value){
        this.handleInvoiceDeductions(value);
      }
    },
  },
  methods: {
    ...mapActions(
      'module', ['addLineItem', 'handleInvoiceDeductions']
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

      @include breakpoint(mobile) {
        display: none;
      }
      @include breakpoint(tabletP) {
        display: none;
      }
      @include breakpoint(desktop) {
        display: flex;
      }

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
        margin: 0 6px;
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
        margin: 14px 34px;

        @include breakpoint(mobile) {
          margin: 0 0 60px;
        }
        @include breakpoint(tabletP) {
          margin: 0 0 60px;
        }
        @include breakpoint(desktop) {
          margin: 14px 34px;
        }
        &:hover{
          opacity: .5;
        }
      }
    }
    #total-bar{
      display: flex;
      flex-wrap: wrap;
      background: $Green-Crack;
      width: 100%;
      color: $White-Widow;
      font-family: $body-font;

      @include breakpoint(mobile) {
        padding: 20px;
      }
      @include breakpoint(tabletP) {

      }
      @include breakpoint(desktop) {
        position: fixed;
        bottom:0;
        left:0;
        padding: 20px 40px;     
        justify-content: center;
      }

      .total-bar__field{     
        font-size: 2.4rem;
        margin: 0 16px;
        display: flex;

        @include breakpoint(mobile) {
          width: 100%;
          align-self: flex-end;
          justify-content: flex-end;
          margin: 0 0 10px 0;
        }
        @include breakpoint(tabletP) {
          margin: 0 0 10px 0;
        }
        @include breakpoint(desktop){ 
          flex: 1;
          margin: 0 10px;
          justify-content: center;
        }
        label{
          display: flex;
          @include breakpoint(mobile) {
            justify-content: flex-start;
            flex: 1;
          }
          @include breakpoint(tabletP) {
          }
          @include breakpoint(desktop){
            align-self: center;
            justify-content: flex-end;
            margin-right: 10px;   
          }
        }
        input{
          padding: 10px 16px;
          border: 0;
          font-family: $body-font;
          font-size: 1.6rem;
          margin: 0 0 0 10px;
          background: rgba(255, 255, 255, .25);
          color: $White-Widow;
          font-size: 2.4rem;
          text-align: right;

          @include breakpoint(mobile) {
            width: 150px;
          }
          @include breakpoint(tabletP) {
            margin: 0 0 10px 0;
          }
          @include breakpoint(desktop){ 
            flex: 1;
            align-self: auto;
            margin: 0;
            width: auto;
          }
        }
      }
      #total{
        font-size: 2.4rem;
        font-weight: 900;
        text-transform: uppercase;
        margin: 0 0 0 16px;
        display: flex;
        
        @include breakpoint(mobile) {
          width: 100%;
          text-align: right;
          justify-content: flex-end;
          padding: 0 16px;
        }
        @include breakpoint(tabletP) {
        }
        @include breakpoint(desktop){  
          align-self: center;
          width: auto;
          justify-content: flex-end;

        }
      }
    }
  }
</style>
