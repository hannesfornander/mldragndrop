<template>
    <div class="architecture-column">
        <div class="column-head">
            <h2>Architecture</h2>
        </div>
        <SelectedList />
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
    padding: 0 20px;
}
</style>