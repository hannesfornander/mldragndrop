<template>
    <ul class="parameter-list">
        <li :key="parameter.pName" v-for="parameter in layer.parameters">
            <ParameterItem :parameter="parameter" />
        </li>
    </ul>
</template>

<script>
import ParameterItem from './ParameterItem.vue'

export default {
    name: 'ParameterList',
    props: ['layer'],
    components: {
        ParameterItem
    },
}
</script>

<style scoped>
.parameter-list {
    list-style: none;
    margin: 0;
    padding: 0;
}
</style>