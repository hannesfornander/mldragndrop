<template>
    <div class="parameter-column">
        <div v-if="selectedAvailableLayer">
            <div class="column-head">
                <h2>Parameters</h2>
            </div>
            <ParameterInfo :selectedLayer="selectedAvailableLayer" />
        </div>
    </div>
</template>

<script>
import ParameterInfo from './ParameterInfo.vue'
import { mapGetters } from 'vuex'

export default {
    name: 'ParameterColumn',
    components: {
        ParameterInfo
    },
    computed: mapGetters(['selectedAvailableLayer']),
}
</script>

<style scoped>
.parameter-column {
    background-color: rgb(200, 252, 233);
    border: 1px solid rgb(200, 252, 233);
    padding: 0 20px;
}
.parameter-btns {
    margin: 20px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.parameter-btns button {
    background-color: rgb(66, 206, 157);
    width: 100px;
    height: 50px;
    border: 2px solid black;
    cursor: pointer;
    margin: auto;
}
</style>