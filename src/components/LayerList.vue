<template>
    <draggable v-model="availableLayers" :options="availableLayerOptions" :clone="handleClone">
        <transition-group type="transition" name="layer-list">
            <LayerItem :key="uuid(layer)" v-for="layer in availableLayers" @click="selectLayer(layer)" :layer="layer" />
        </transition-group>
    </draggable>
</template>

<script>
import LayerItem from './LayerItem.vue'
import draggable from 'vuedraggable'
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'LayerList',
    components: {
        draggable,
        LayerItem,
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
        ...mapActions(['selectLayer']),
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
</style>