import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        
    },
    mutations: {
        selectLayer(layer) {
            for (let i = 0; i < this.availableLayers.length; i++) {
                this.availableLayers[i].selected = false;
            }
            layer.selected = true;
        },
    },
    getters: {
        
    }
})