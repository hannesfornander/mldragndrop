<template>
    <div class="layer-item">
        <div class="layer-name" @click="selectLayer(layer)">{{layer.name}}</div>
        <div class="delete-btn" @click="deleteLayer(index)">X</div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'SelectedLayerItem',
    props: ['layer', 'index'],
    methods: mapActions(['selectLayer', 'deleteLayer']),
}
</script>

<style scoped>
.layer-item {
    display: grid;
    grid-template-columns: 3fr 1fr;
    background-color: rgb(157, 115, 66);
    border: 2px solid white;
    width: 200px;
    height: 50px;
    border-radius: 3px;
    cursor: pointer;
    margin: 10px auto;
}

.layer-item:hover {
    border: 2px solid rgb(157, 115, 66);
}

.layer-name {
    background-color: rgb(157, 115, 66);
}

.delete-btn {
    background-color: rgb(157, 115, 66);
    color: black;
}

.delete-btn:hover {
    background-color: black;
    color: rgb(157, 115, 66);
}

/*.selected-list-move {
    transition: transform 0.5s;
}*/
</style>