<template>
  <div>
    <h1>축하합니다!!</h1><br>

    <span>공개키 : {{ publicKey }}</span><br><br>
    <span>지갑 주소 : {{ address }}</span>
  </div>
</template>

<script>

export default {
  name: "CreateAccountView",
  props: {
    mnemonicChk: {
      type: String,
      default: ''
    },
    publicKey: {
      type: String,
      default: ''
    },
    address: {
      type: String,
      default: ''
    }
  },
}
</script>

<style scoped>

</style>