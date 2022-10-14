<template>
  <div class="home">
    {{ a }}
    <img alt="onFlow" src="../assets/onFlow.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapGetters } from 'vuex';

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  computed: {
    ...mapGetters(['a'])
  },
  created() {

    this.$store.commit('SET_A', this.a+1);
    console.log(23, this.a);
  }
}
</script>
