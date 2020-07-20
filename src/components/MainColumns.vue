<template>
    <div class="main-columns">
        <LayerColumn />
        <ArchitectureColumn />
        <PipelineColumn />
    </div>
</template>

<script>
import LayerColumn from './LayerColumn.vue'
import ArchitectureColumn from './ArchitectureColumn.vue'
import PipelineColumn from './PipelineColumn.vue'

export default {
    name: 'MainColumns',
    components: {
        LayerColumn,
        ArchitectureColumn,
        PipelineColumn
    },
}
</script>

<style scoped>
.main-columns {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    min-height: 1000px;
}
</style>