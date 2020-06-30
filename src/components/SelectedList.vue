<template>
    <draggable v-model="selectedLayers" :options="clonedLayerOptions">
        <transition-group type="transition" name="selected-list">
            <div class="sortable" v-for="(layer, index) in selectedLayers" :key="uuid(layer)">
                <div class="layer-name" @click="selectLayer(layer)">{{layer.name}}</div>
                <div class="delete-btn" @click="deleteItem(index)">X</div>
            </div>
        </transition-group>
    </draggable>
</template>

<script>
import draggable from 'vuedraggable'
import { mapGetters } from 'vuex'

export default {
    name: 'SelectedList',
    components: {
        draggable
    },
    computed: mapGetters(['selectedLayers']),
    data() {
        return {
            clonedLayerOptions: {
                group: "layers"
            }
        }
    },
    methods: {
        selectLayer(layer) {
            for (let i = 0; i < this.selectedLayers.length; i++) {
                this.selectedLayers[i].selected = false;
            }
            layer.selected = true;
        },
        deleteItem(index) {
            this.selectedLayers.splice(index, 1);
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
    width: 200px;
    height: 50px;
    border: 2px solid black;
    display: grid;
    grid-template-columns: 3fr 1fr;
    cursor: pointer;
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