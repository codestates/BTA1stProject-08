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
import * as fcl from "@onflow/fcl";
export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  computed: {
    ...mapGetters(['a'])
  },
  created() {
    fcl.config()
        .put("app.detail.title", "Test Harness")
        .put("app.detail.icon", "https://placekitten.com/g/200/200")
        .put("service.OpenID.scopes", "tkdlqj2006@naver.com")
        .put("fcl.appDomainTag", "harness-app")

    fcl.config()
        .put("flow.network", "testnet")
        .put("env", "testnet")
        .put("accessNode.api", "https://access-testnet.onflow.org")
        .put("discovery.wallet", "https://fcl-discovery.onflow.org/testnet/authn")

    fcl.authenticate();

    this.$store.commit('SET_A', this.a+1);
    console.log(23, this.a);
  }
}
</script>
