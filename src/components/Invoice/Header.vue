<template>
  <div id="header">
    <div class="logo" id="large-logo">
      <img src="../../assets/leaflink.svg">
    </div>
    <div class="logo" id="small-logo">
      <img src="../../assets/ll.svg">
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
    padding: 0 0 20px 0;
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
    @include breakpoint(desktop) {
      display: flex;
    }
  }
  #small-logo{
    @include breakpoint(mobile) {
      display: flex;
    }
    @include breakpoint(desktop) {
      display: none;
    }
  }
 }

</style>
