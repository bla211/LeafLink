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
    padding: 40px;
  }
</style>
