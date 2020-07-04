<template>
    <div class="layer-item" @click="selectLayer(layer)">
        {{layer.name}}
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'LayerItem',
    props: ['layer'],
    methods: mapActions(['selectLayer']),
}
</script>

<style scoped>
.layer-item {
    background-color: rgb(157, 115, 66);
    border: 2px solid rgb(66, 206, 157);
    width: 200px;
    height: 50px;
    border-radius: 3px;
    cursor: pointer;
    margin: 10px auto;
}

.layer-item:hover {
    border: 2px solid rgb(157, 115, 66);
}
</style>