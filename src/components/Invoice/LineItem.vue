<template>
  <div class="lineItem">
    <i class="material-icons" @click="removeLineItem($vnode.key)">cancel</i>
    <input type="text" v-model="description"/>
    <input type="text" v-model="unitPrice"/>
    <input type="text" v-model="quantity"/>
    <input type="text" :value="total"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    data: Object
  },
  components: {
  },
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
  .lineItem{
    display: flex;
    font-family: $body-font;
    font-size: 18rem;
    width: 100%;
    max-width: 1100px;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 10px 0;
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
    input{
      flex: 1;
      margin: 0 10px;
      padding: 10px 16px 4px 0;
      border: 0;
      border-bottom: 1px solid $Grandaddy-Purp;
      font-family: $body-font;
      font-size: 1.6rem;
    }
 }

</style>
