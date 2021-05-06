import { emitters } from '../../modules/io'
let intervalId = 0
let index = 0

export default {
    namespaced: true,
    actions: {
        switchActive({ commit, state }) {
            state.playing = false
            clearInterval(intervalId)
            commit('setActive', !state.active)
        },
        addPosition({ commit, state }, { x, y, z, claw }) {
            state.playing = false
            state.positions.push({ x, y, z, claw })
            // commit('setPositions', a)
        },
        delete({ commit, state }) {
            state.playing = false
            commit('setActive', false)
            commit('setPositions', [])
            clearInterval(intervalId)
        },
        play({ commit, state }) {
            commit('setActive', false)
            if (state.playing) {
                clearInterval(intervalId)
                state.playing = false
                return
            }
            intervalId = setInterval(() => {
                emitters.setCoordinates(state.positions[index])
                index++
                if (!state.positions[index]) {
                    index = 0
                }
            }, 50)
            state.playing = true
        }
    },
    mutations: {
        setActive(state, b) {
            state.active = b
        },
        setPositions(state, a) {
            state.positions = a
        }
    },
    state: {
        active: false,
        playing: false,
        positions: []
    },
    getters: {
        active({ active }) {
            return active
        },
        positions({ positions }) {
            return positions
        },
        playing({ playing }) {
            return playing
        }
    }
}