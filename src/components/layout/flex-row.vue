<template>
    <div class="flex-row">
        <slot></slot>
    </div>
</template>
<script>

export default {
}

</script>
<style scoped lang="scss">
.flex-row {
    display: flex;
    // overflow: hidden;
    min-height: 0;
    min-width: 0;
    flex: 1;
    flex-direction: row;

    &[center] {
        align-items: center;
        justify-content: center;
    }

    &[vcenter] {
        align-items: center;
    }

    &[wrap] {
        flex-wrap: wrap;
    }

    &[gap] {
        gap: 0.4em;
    }
}



</style>