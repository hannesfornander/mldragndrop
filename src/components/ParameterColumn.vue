<template>
    <div class="parameter-column">
        <div class="column-head">
            <h2>Parameters</h2>
        </div>
        <div>
            <ParameterInfo />
        </div>
        <div class="parameter-btns">
            <button type="button">Avbryt</button>
            <button type="button">Spara</button>
        </div>
    </div>
</template>

<script>
import ParameterInfo from './ParameterInfo.vue'

export default {
    name: 'ParameterColumn',
    components: {
        ParameterInfo
    },
}
</script>

<style scoped>
.parameter-column {
    background-color: rgb(200, 252, 233);
    padding: 0 20px;
}
.parameter-btns {
    margin-top: 20px;
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