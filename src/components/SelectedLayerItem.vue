<template>
    <button class="layer-item" :class="{ 'layer-item--selected': layer.selected }">
        <div class="layer-item-head">
            <div class="layer-name" @click="selectLayer(layer)">{{layer.name}}</div>
            <div class="delete-btn" @click="deleteLayer(index)">X</div>
        </div>
        <div class="parameter-container" v-if="layer.selected">
            <ParameterList :layer="layer" />
            <button type="button" class="parameter-btn">Spara</button>
        </div>
    </button>
</template>

<script>
import { mapActions } from 'vuex'
import ParameterList from './ParameterList.vue'

export default {
    name: 'SelectedLayerItem',
    props: ['layer', 'index'],
    components: {
        ParameterList
    },
    methods: mapActions(['selectLayer', 'deleteLayer']),
}
</script>

<style scoped>
.layer-item {
    display: block;
    background-color: rgb(200, 252, 233);
    border: 2px solid white;
    min-width: 150px;
    width: 50%;
    min-height: 54px;
    max-height: 54px;
    border-radius: 3px;
    cursor: pointer;
    margin: 10px auto;
    padding: 0px 10px;
    overflow: hidden;
    transition: 500ms width ease-out, max-height 500ms linear;
}

.layer-item:hover {
    border: 2px solid rgb(200, 252, 233);
}

.layer-item--selected {
    border: 2px solid rgb(200, 252, 233);
    border-radius: 0px;
    width: 100%;
    max-height: 1000px;
    transition: 500ms width ease-out, max-height 1000ms 500ms linear;
}

.layer-item-head {
    display: grid;
    grid-template-columns: 3fr 1fr;
}

.layer-name {
    background-color: rgb(200, 252, 233);
    line-height: 50px;
    font-size: 20px;
}

.delete-btn {
    background-color: rgb(200, 252, 233);
    color: black;
    margin: auto;
    padding: 5px;
    border-radius: 50%;
}

.delete-btn:hover {
    background-color: black;
    color: rgb(200, 252, 233);
}

.parameter-container {
    margin: 10px 0px;
}

.parameter-btn {
    background-color: rgb(66, 206, 157);
    width: 100px;
    height: 50px;
    border: 2px solid black;
    cursor: pointer;
    margin: auto;
    margin-top: 10px;
}
</style>