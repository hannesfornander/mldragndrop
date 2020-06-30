<template>
    <div class="parameter-info">
        <h3 id="parameterTitle">{{selectedLayer.name}}</h3>
        <ul class="parameter-list">
            <li :key="parameter.pName" v-for="parameter in selectedLayer.parameters">
                <ParameterItem :parameter="parameter" />
            </li>
        </ul>
    </div>
</template>

<script>
import ParameterItem from './ParameterItem.vue'
import { mapGetters } from 'vuex'

export default {
    name: 'ParameterInfo',
    components: {
        ParameterItem
    },
    computed: mapGetters(['selectedLayer']),
}
</script>

<style scoped>
.parameter-list {
    list-style: none;
    margin: 0;
    padding: 0;
}
</style>