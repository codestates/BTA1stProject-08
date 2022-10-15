<template>
  <div class="home">
    <img alt="onFlow" src="../assets/onFlow.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  computed: {

  },
  created() {

  }
}
</script>
