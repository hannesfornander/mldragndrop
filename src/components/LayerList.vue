<template>
    <draggable v-model="availableLayers" :options="availableLayerOptions" :clone="handleClone">
        <transition-group type="transition" name="layer-list">
            <div class="sortable" :key="uuid(layer)" v-for="layer in availableLayers" @click="selectLayer(layer)">
                {{layer.name}}
            </div>
        </transition-group>
    </draggable>
</template>

<script>
import draggable from 'vuedraggable'
import { mapGetters } from 'vuex'

export default {
    name: 'LayerList',
    components: {
        draggable
    },
    computed: mapGetters(['availableLayers']),
    data() {
        return {
            availableLayerOptions: {
                group: {
                name: "layers",
                pull: "clone",
                put: false
                },
                sort: false
            }
        }
    },
    methods: {
        selectLayer(layer) {
            this.$store.commit('select', layer)
        },
        handleClone (item) {
            // Create a fresh copy of item
            let cloneMe = JSON.parse(JSON.stringify(item));
            
            this.$delete(cloneMe, 'uid');

            return cloneMe;
        },
        uuid(e) {
            if (e.uid) return e.uid;
            const key = Math.random().toString(16).slice(2);
            this.$set(e, "uid", key);
            
            return e.uid;
        }
    }
}
</script>

<style scoped>
.sortable {
    background-color: rgb(66, 206, 157);
    width: 200px;
    height: 50px;
    border: 2px solid black;
    cursor: pointer;
    margin: auto;
}
</style>