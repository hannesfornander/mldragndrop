<template>
    <draggable v-model="layerList" :options="clonedLayerOptions">
        <transition-group type="transition" name="selected-list">
            <div class="sortable" v-for="(layer, index) in layerList" :key="uuid(layer)">
                <div class="layer-name" @click="selectLayer(layer)">{{layer.name}}</div>
                <div class="delete-btn" @click="deleteLayer(index)">X</div>
            </div>
        </transition-group>
    </draggable>
</template>

<script>
import draggable from 'vuedraggable'
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'SelectedList',
    components: {
        draggable
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
        ...mapActions(['selectLayer', 'deleteLayer', 'updateSelectedLayers']),
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
    display: grid;
    grid-template-columns: 3fr 1fr;
    background-color: rgb(75, 66, 157);
    width: 200px;
    height: 50px;
    border: 2px solid black;
    border-radius: 3px;
    cursor: pointer;
    margin: 10px auto;
}
.layer-name {
    background-color: rgb(66, 206, 157);
}
.delete-btn {
    background-color: rgb(66, 206, 157);
    color: black;
}
.delete-btn:hover {
    background-color: black;
    color: rgb(66, 206, 157);
}
/*.selected-list-move {
    transition: transform 0.5s;
}*/
</style>