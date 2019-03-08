<template>
  <div class="line-item">
    <div class="remove-line-item">     
      <i class="material-icons" @click="removeLineItem($vnode.key)">cancel</i>
      <button class="big-remove" @click="removeLineItem($vnode.key)">Remove Line Item</button>
    </div>
    <div class="line-item-input-wrapper">
      <label>Description</label>
      <input type="text" v-model="description" placeholder="Description" aria-label="Description" />
    </div>
    <div class="line-item-input-wrapper">
      <label>Unit Price ($)</label>
      <input type="text" v-model="unitPrice" aria-label="Unit Price" />
    </div>
    <div class="line-item-input-wrapper">
      <label>Quantity (#)</label>
      <input type="text" v-model="quantity" aria-label="Quantity" />
    </div>
    <div class="line-item-input-wrapper">
      <label>Total</label>
      <input type="text" :value="total" aria-label="Total" disabled/>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  created(){
  },
  computed: {
    store(){
      return this.$store.state.store.state;
    },
    description: {
      get(){
        return this.store.lineItems[this.$vnode.key].Description;
      },
      set(value){
        this.handleLineItemDescription({index: this.$vnode.key, value: value});
      }
    },
    unitPrice: {
      get(){
        return this.store.lineItems[this.$vnode.key].UnitPrice;
      },
      set(value){
        this.handleLineItemUnitPrice({index: this.$vnode.key, value: value});
      }
    },
    quantity: {
      get(){
        return this.store.lineItems[this.$vnode.key].Quantity;
      },
      set(value){
        this.handleLineItemQuantity({index: this.$vnode.key, value: value});
      }
    },
    total: {
      get(){       
        return '$' + this.store.lineItems[this.$vnode.key].Total;
      }
    }

  },
  methods: {
    ...mapActions(
      'module', ["handleLineItemDescription", "handleLineItemUnitPrice", "handleLineItemQuantity", 'removeLineItem']
    ),
  }
}
</script>

<style scoped lang="scss">
 @import "@/styles/app.scss";
  .line-item{
    display: flex;
    font-family: $body-font;
    font-size: 18rem;
    width: 100%;
    max-width: 1100px;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    @include breakpoint(mobile) {
      margin: 0 0 20px 0; 
    }
    @include breakpoint(tabletP) {
      margin: 0 0 20px 0;   
    }
    @include breakpoint(desktop) {
      
    }
    .remove-line-item{
      @include transition(opacity 0.25s ease-in-out);
      align-self: center;
      display: flex;
      @include breakpoint(mobile) {
        flex-basis: 100%;
        order: 2;
        justify-content: flex-start;
      }
      @include breakpoint(tabletP) {
        justify-content: flex-end;
      }
      @include breakpoint(desktop) {       
        flex-basis: 24px;
        order: 0;
      }
      i{
        color: #ed5665;
        cursor: pointer;
        opacity: .25;
        @include breakpoint(mobile) {
          display: none;
        }
        @include breakpoint(desktop) { 
          display: block
        }
        &:hover{
          opacity: 1;
        }
      }
      .big-remove{
        @include transition(opacity 0.25s ease-in-out);
        background: #ed5665;
        border: 0;
        padding: 4px 6px;
        color: $White-Widow;
        font-family: $body-font;
        opacity: .25;
        cursor: pointer;
        @include breakpoint(mobile) {
          display: block;
        }
        @include breakpoint(desktop) { 
          display: none;
        }
        &:hover{
          opacity: 1;
        }
      }
    }
    .line-item-input-wrapper{
      font-size: 1.2rem;
      @include breakpoint(mobile) {
        width:  100%;  
      }
      @include breakpoint(tabletP) {
        width: calc(50% - 10px);  
      }
      @include breakpoint(desktop) {
        flex: 1;
        margin: 0 6px;
      }
    }
    input{
      padding: 10px 16px;
      background: rgba(27, 20, 67, .1);
      border: 0;
      font-family: $body-font;
      font-size: 1.6rem;
      width: 100%;

      @include breakpoint(mobile) {
        margin: 2px 0 6px;    
      }
      @include breakpoint(tabletP) {
        margin: 2px 0 6px;  
      }
      @include breakpoint(desktop) {
        margin: 10px 0;
      }
    }
    label{
      width: 100%;
      @include breakpoint(mobile) {
        margin: 10px 0;   
      }
      @include breakpoint(tabletP) {
        margin: 10px 0;  
      }
      @include breakpoint(desktop) {
        display: none;
      }
    }
 }

</style>
