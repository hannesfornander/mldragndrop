<template>
    <div class="sortable">
        {{layer.name}}
    </div>
</template>

<script>
export default {
    name: 'LayerItem',
    props: ['layer']
}
</script>

<style scoped>
.sortable {
    background-color: rgb(157, 115, 66);
    border: 2px solid rgb(66, 206, 157);
    width: 200px;
    height: 50px;
    border-radius: 3px;
    cursor: pointer;
    margin: 10px auto;
}

.sortable:hover {
    border: 2px solid rgb(157, 115, 66);
}
</style>