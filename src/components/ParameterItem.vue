<template>
    <div class="parameter-item">
        <div class="parameter-name">{{parameter.pName}}:</div> 
        <input type="text" :value="parameter.pValue">
    </div>
</template>

<script>
export default {
    name: 'ParameterItem',
    props: ['parameter']
}
</script>

<style scoped>
.parameter-item {
    margin-bottom: 5px;
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.parameter-item .parameter-name {
    margin: auto 0px;
    text-align: right;
    padding-right: 5px; 
}
.parameter-item input {
    border: 2px solid black;
    border-radius: 5px;
    padding: 3px;
    max-width: 50%;
}
</style>