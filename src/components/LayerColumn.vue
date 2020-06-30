<template>
    <div class="layer-column">
        <div class="column-head">
            <h2>Layers</h2>
        </div>
        <LayerList />
    </div>
</template>

<script>
import LayerList from './LayerList.vue'

export default {
    name: 'LayerColumn',
    components: {
        LayerList
    },
}
</script>

<style scoped>
.layer-column {
    background-color: rgb(66, 206, 157);
    padding: 0 20px;
}
</style>