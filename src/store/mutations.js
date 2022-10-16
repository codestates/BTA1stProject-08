export default {
    SET_Mnemonic(state, val){
        state.mnemonic = val;
    },
    SET_PWD(state, val){
        state.pwd = val;
    },
    CHK_PWD(state, val){
        state.loginPwd = val;
    },
    CHK_Mnemonic(state, val){
        state.mnemonicChk = val;
    },
    SET_WALLET(state, val){
        state.wallet = val;
    },
    SET_ADDR(state, val){
        state.address = val;
    },
    SET_ENTROPY(state, val){
        state.entropy  = val;
    },
    SET_PUBLIC(state, val){
        state.publicKey  = val;
    }
}