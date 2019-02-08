<template>
    <div>
        <site-header/>
        <h1 class="test">Hello {{ world }}!</h1>
    </div>
</template>
<script>
import SiteHeader from '~/components/site-header.vue';

export default {
    data() {
        return { world: 'World' };
    },
    components: { SiteHeader },
};
</script>
<style lang="scss">
.test {
    background-color: #a20;
    color: #fff;
}
</style>
