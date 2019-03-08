<template>
  <div id="header">
    <div class="logo" id="large-logo">
      <img src="../../assets/leaflink.svg" alt="LeafLink logo">
    </div>
    <div class="logo" id="small-logo">
      <img src="../../assets/ll.svg" alt="LeafLink logo">
    </div>
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
  #header{
    display: flex;
    font-family: $headline-font;
    font-size: 18rem;
    width: 100%;
    @include breakpoint(mobile) {
      padding: 20px;
    }
    @include breakpoint(tabletP) {
      padding: 0 0 20px 0; 
    }
    @include breakpoint(desktop) {     
      padding: 0 0 20px 0;
    }
  .logo{
    height: 57px;
    img{
      height: 100%;
    }
  }
  #large-logo{
    @include breakpoint(mobile) {
      display: none;
    }
    @include breakpoint(tabletP) {
      display: flex;
    }
  }
  #small-logo{
    @include breakpoint(mobile) {
      display: flex;
    }
    @include breakpoint(tabletP) {
      display: none;
    }
  }
 }

</style>
