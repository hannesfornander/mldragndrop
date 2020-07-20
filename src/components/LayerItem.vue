<template>
    <button class="layer-item" :class="{ 'layer-item--selected': layer.selected }" @click="selectLayer(layer)">
        <div class="layer-name">{{layer.name}}</div>
        <div class="parameter-container" v-if="layer.selected">
            <ParameterList :layer="layer" />
        </div>
    </button>
</template>

<script>
import { mapActions } from 'vuex'
import ParameterList from './ParameterList.vue'

export default {
    name: 'LayerItem',
    props: ['layer'],
    components: {
        ParameterList
    },
    methods: mapActions(['selectLayer']),
}
</script>

<style scoped>
.layer-item {
    display: block;
    background-color: rgb(200, 252, 233);
    border: 2px solid rgb(66, 206, 157);
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

.layer-name {
    line-height: 50px;
    font-size: 20px;
}

.parameter-container {
    margin: 10px 0px;
}
</style>