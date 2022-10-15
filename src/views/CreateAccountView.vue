<template>
  <div>
    <h1>축하합니다!!</h1>

    <span>니모닉 : {{ mnemonicChk }}</span>
  </div>
</template>

<script>
import { BIP39, Hash, Base64 } from "@ardenthq/sdk-cryptography";
import secp256k1 from "secp256k1";
import {Profile} from "@ardenthq/sdk-profiles";
// import {IProfile} from "@ardenthq/sdk-profiles";
// import {IProfileInput} from "@ardenthq/sdk-profiles/distribution/esm/profile.contract";
import { ARK } from "@ardenthq/sdk-ark";
import { Environment } from "@ardenthq/sdk-profiles";
import {HttpClient} from "js-httpclient";
// import {WalletFactory} from "@ardenthq/sdk-profiles/distribution/esm/wallet.factory";

export default {
  name: "CreateAccountView",
  props: {
    mnemonicChk: {
      type: String,
      default: 'oak minor lens bunker radio region before spawn space curious lizard year'
    }
  },
  created() {
    const privateKey = Hash.sha256(BIP39.toEntropy(this.mnemonicChk.toString()))
    console.log('>privateKey', privateKey)
    const publicKey = secp256k1.publicKeyCreate(privateKey).toString("hex")
    console.log('>publicKey', publicKey)

    //
    // console.log('this.mnemonicChk')
    // console.log(this.mnemonicChk) // walletFromBIP39/passphrase
    //
    // console.log( "BIP39.toEntropy(this.mnemonicChk)")
    // console.log( BIP39.toEntropy(this.mnemonicChk)) // getAddress/const buffer = 초기 publicKey
    //
    // console.log("Hash.sha256(someBuffer)")
    // console.log( BIP39.toEntropy(this.mnemonicChk.toString()))
    // console.log( Hash.sha256(BIP39.toEntropy(this.mnemonicChk.toString())))
    //
    // console.log("Base64.encode(Hash.sha256(someBuffer))")
    // console.log( Base64.encode(Hash.sha256(this.mnemonicChk.toString())))
    //
    // console.log("Base64.decode(Base64.encode(Hash.sha256(someBuffer)))")
    // console.log( Base64.decode(Base64.encode(Hash.sha256(this.mnemonicChk))))


    //------------------------------------------------------------------------------------------

    // const env = new Environment({ coins: { ARK }, httpClient: new HttpClient(), storage: "localstorage" });
    //
    // console.log(env.profiles().create('test'))
    // console.log(env.profiles().all())
    // console.log(env.data().all())
    // console.log(env.availableNetworks())
    //
    // let profile = new Profile({
    //   id: 'uuid',
    //   name: 'name',
    //   avatar: '',
    //   password: '',
    //   data: 'test',
    //   appearance: {
    //     accentColor: '',
    //     dashboardTransactionHistory: '',
    //     theme: '',
    //     useExpandedTables: '',
    //     useNetworkWalletNames: '',
    //   },
    // });
    //
    // console.log('profile', profile)
    // console.log('all',env.profiles().all())
    //
    // // const factory = new WalletFactory(profile);
    // // console.log('factory', factory)
    // console.log(this.mnemonicChk)
    // console.log(profile.walletFactory().generate(
    //     'ARK',
    //     "ark.devnet",
    //     this.mnemonic
    // ))
    //
    // console.log(profile.walletFactory().fromMnemonicWithBIP39(
    //     'DARK',
    //     "ark.devnet",
    //     // 'testnet',
    //     // network,
    //     this.mnemonic
    // ))

  }
}
</script>

<style scoped>

</style>