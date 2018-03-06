export const b = {
    namespaced: true,
    state: {
        sex: "male"
    },
    getters: {
        sex(state) {
            return state.sex;
        }
    },
    mutations: {
        setSex(state, sex) {
            state.sex = sex;
        }
    }
};