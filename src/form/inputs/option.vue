<template>
    <slot :plainValue="plainValue">
        <pre>{{option}}</pre>
    </slot>
</template>
<script>
export default {
    props: {
        option: {
            required:true,
        }
    },
    computed: {
        plainValue() {
            return this.option._id || this.option.value || this.option;
        },
    }
}
</script>