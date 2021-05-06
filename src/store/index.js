import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import recorder from './modules/recorder'
import coordinates from './modules/coordinates'

export default new Vuex.Store({
    modules: {
        recorder,
        coordinates
    },
})
