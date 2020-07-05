<template>
    <div class="parameter-info">
        <h3 id="parameterTitle">{{selectedLayer.name}}</h3>
        <ul class="parameter-list" v-if="selectedLayer">
            <li :key="parameter.pName" v-for="parameter in selectedLayer.parameters">
                <ParameterItem :parameter="parameter" />
            </li>
        </ul>
    </div>
</template>

<script>
import ParameterItem from './ParameterItem.vue'

export default {
    name: 'ParameterInfo',
    props: ['selectedLayer'],
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