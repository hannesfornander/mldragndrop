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
    background-color: pink;
    border: 2px solid white;
    width: 200px;
    height: 50px;
    border-radius: 3px;
    cursor: pointer;
    margin: 10px auto;
}

.layer-item:hover {
    border: 2px solid pink;
}

.layer-name {
    background-color: pink;
}

.delete-btn {
    background-color: pink;
    color: black;
}

.delete-btn:hover {
    background-color: black;
    color: pink;
}

/*.selected-list-move {
    transition: transform 0.5s;
}*/
</style>