const componentsStore = {
    state: {
        components: []
    },
    getters: {
        getComponents: (state) => state.components
    },
    mutations: {
        addComponent: (state, data) => state.components.push(data),
        cleanComponents: (state) => state.components = []
    },
    actions: {
        addComponent({ commit }, data) {
            commit("addComponent", data);
        },
        cleanComponents({ commit }) {
            commit("cleanComponents");
        },

    }

}
export default componentsStore