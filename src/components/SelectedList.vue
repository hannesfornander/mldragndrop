<template>
    <draggable v-model="layerList" :options="clonedLayerOptions">
        <transition-group type="transition" name="selected-list">
            <SelectedLayerItem v-for="(layer, index) in layerList" :key="uuid(layer)" :layer="layer" :index="index" />
        </transition-group>
    </draggable>
</template>

<script>
import SelectedLayerItem from './SelectedLayerItem.vue'
import draggable from 'vuedraggable'
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'SelectedList',
    components: {
        SelectedLayerItem,
        draggable,
    },
    computed: {
        ...mapGetters(['selectedLayers']),
        layerList: {
            get() {
                return this.selectedLayers
            },
            set(selectedLayers) {
                this.updateSelectedLayers(selectedLayers)
            }
        }
    },
    data() {
        return {
            clonedLayerOptions: {
                group: "layers"
            }
        }
    },
    methods: {
        ...mapActions(['updateSelectedLayers']),
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