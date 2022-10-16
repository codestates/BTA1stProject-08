export default {
    async SET_Mnemonic({ commit }, payload) {
        commit('SET_Mnemonic', payload);
    },
    async SET_PWD({ commit }, payload) {
        commit('SET_PWD', payload);
    },
    async CHK_Mnemonic({ commit }, payload) {
        commit('CHK_Mnemonic', payload);
    },
    async SET_WALLET({ commit }, payload) {
        commit('SET_WALLET', payload);
    },
    async SET_ADDR({ commit }, payload) {
        commit('SET_ADDR', payload);
    },
    async SET_ENTROPY({ commit }, payload) {
        commit('SET_ENTROPY', payload);
    },
    async SET_PUBLIC({ commit }, payload) {
        commit('SET_PUBLIC', payload);
    }
}