<template>
    <div class="architecture-column">
        <div class="column-head">
            <h2>Architecture</h2>
        </div>
        <div class="column-main">
            <SelectedList />
        </div>
    </div>
</template>

<script>
import SelectedList from './SelectedList.vue'

export default {
    name: 'ArchitectureColumn',
    components: {
        SelectedList
    },
}
</script>

<style scoped>
.architecture-column {
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