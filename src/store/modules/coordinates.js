export default {
    namespaced: true,
    actions: {
        update({commit}, c) {
            commit('update', c)
        }
    },
    mutations: {
        update(state, {x, y, z, claw}) {
            state.x = x
            state.y = y
            state.z = z
            state.claw = claw
        }
    },
    state: {
        x: 0,
        y: 0,
        z: 0,
        claw: 0
    },
    getters: {
        coords({x, y, z, claw}) {
            return {x, y, z, claw}
        }
    }
}