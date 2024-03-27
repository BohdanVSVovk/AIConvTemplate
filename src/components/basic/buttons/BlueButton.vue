<template>
    <v-btn round color="info">
        {{ title }}
        <template v-slot:loader>
            <span class="custom-loader">
                <v-icon light>cached</v-icon>
            </span>
        </template>
    </v-btn>
</template>
<script>
export default {
    props: {
        title: String,
    }
}
</script>
