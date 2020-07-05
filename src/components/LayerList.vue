<template>
    <draggable v-model="availableLayers" v-bind="availableLayerOptions" :clone="handleClone">
        <transition-group type="transition" name="layer-list">
            <LayerItem v-for="layer in availableLayers" :key="uuid(layer)" :layer="layer" />
        </transition-group>
    </draggable>
</template>

<script>
import LayerItem from './LayerItem.vue'
import draggable from 'vuedraggable'
import { mapGetters } from 'vuex'

export default {
    name: 'LayerList',
    components: {
        LayerItem,
        draggable,
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