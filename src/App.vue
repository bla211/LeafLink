<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import Header from '@/components/Invoice/Header.vue';

export default {
  components: {
    Header
  },
  computed: {
    store(){
      return this.$store.state.store.state;
    },
  },
  mounted(){
    this.addLineItem();
  },
  methods: {
    ...mapActions(
      'module', ['addLineItem']
    ),
  }
}
</script>

<style lang="scss">
  @import "@/styles/app.scss";

  #app{
    display: flex;
    flex-direction: column;
    @include breakpoint(mobile) {
    }
    @include breakpoint(tabletP) {
      padding: 20px 20px 300px;  
    }
    @include breakpoint(desktop) {
      padding: 20px 40px 300px; 
    }
  }
</style>
