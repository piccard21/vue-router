export const a =  {
    namespaced: true,
    state: {
        name: "piccard"
    },
    getters: {
        name(state) {
            return state.name;
        }
    },
    mutations: {
        setName(state, name) {
            state.name = name;
        }
    }
};