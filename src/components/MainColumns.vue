<template>
    <div class="main-columns">
        <LayerColumn />
        <ArchitectureColumn />
        <ParameterColumn />
    </div>
</template>

<script>
import LayerColumn from './LayerColumn.vue'
import ArchitectureColumn from './ArchitectureColumn.vue'
import ParameterColumn from './ParameterColumn.vue'

export default {
    name: 'MainColumns',
    components: {
        LayerColumn,
        ArchitectureColumn,
        ParameterColumn
    },
}
</script>

<style scoped>
.main-columns {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    min-height: 1000px;
}
</style>