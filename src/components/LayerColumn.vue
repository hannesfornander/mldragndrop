<template>
    <div class="layer-column">
        <div class="column-head">
            <h2>Layers</h2>
        </div>
        <div class="column-main">
            <LayerList />
        </div>
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
    position: relative;
}

.column-head {
    margin: 0 20px;
}

.parameter-container {
    position: absolute;
    bottom: 0;
    width: 100%;
}
</style>