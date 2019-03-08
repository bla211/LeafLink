<template>
  <div class="lineItem">
    <input type="text"/>
    <input type="text"/>
    <input type="text"/>
    <input type="text"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  components: {
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
