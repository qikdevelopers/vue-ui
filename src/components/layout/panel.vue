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
    margin-bottom: 1em;
    box-shadow: 0 4px 4px 0px rgba(0, 0, 0, 0.02);
    background: #fff;

    @media (prefers-color-scheme: dark) {
        background: var(--darkshade, #444654)
    }

}



</style>