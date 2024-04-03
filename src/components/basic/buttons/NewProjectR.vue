<template>
    <b-button @click="changeRoute('SelectUtility', 2)" variant="primary">New Project</b-button>
</template>
<script>
export default {
    methods: {
        changeRoute(routeName, selectedIndex) {
            const vm = this;

            vm.selectedIndex = selectedIndex;

            return vm.$router.push({ name: routeName });
        }
    }
}

</script>