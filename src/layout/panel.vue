<template>
    <div class="panel">
        <slot></slot>
    </div>
</template>
<script>

export default {
}

</script>
<style lang="scss" scoped>
.panel {
    border-radius: 0.3em;
    border:1px solid rgba(#000,0.1);
    margin-bottom: 2em;
    box-shadow: 0 3px 20px 2px rgba(0, 0, 0, 0.05);
}



</style>