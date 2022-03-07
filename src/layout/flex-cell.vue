<template>
    <div class="flex-cell">
        <slot></slot>
    </div>
</template>
<script>

export default {
}

</script>
<style scoped lang="scss">
.flex-cell {
    overflow: hidden;
    flex: 1;
    flex-direction: row;

    &[flex] {
        display: flex;
    }

    &[center] {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &[vcenter] {
        display: flex;
        align-items: center;
    }

    &[align-bottom] {
        display: flex;
        align-items: self-end;
    }

    &[shrink] {
        flex:none;
    }
}



</style>