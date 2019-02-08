<template>
    <h1 class="test">Hello {{ world }}!</h1>
</template>
<script>
export default {
    data() {
        return { world: 'World' };
    },
};
</script>
<style lang="scss">
.test {
    background-color: #a20;
    color: #fff;
}
</style>
