<template>
  <div class="lineItem">
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
      'module', ["handleLineItemDescription", "handleLineItemUnitPrice", "handleLineItemQuantity"]
    ),
  }
}
</script>

<style scoped lang="scss">
 @import "@/styles/app.scss";
  .lineItem{
    display: flex;
    font-family: $headline-font;
    font-size: 18rem;
    width: 100%;
    max-width: 1100px;
    flex-direction: row;
    justify-content: space-between;
    align-content: flex-start;
    padding: 10px 0;
    input{
      flex: 1;
      margin: 0 4px;
    }
 }

</style>
