<template>
    <v-card class="mx-auto" color="#26c6da" dark max-width="400">
        <v-card-title>
            <v-icon large left> mdi-star </v-icon>
            <span class="title font-weight-light">{{ title }}</span>
        </v-card-title>
        <v-card-text class="headline font-weight-bold">
            {{ text }}
        </v-card-text>
        <v-card-actions>
            <v-list-item class="grow">
                <v-row align="center" justify="end">
                    <v-icon class="mr-1"> mdi-download </v-icon>
                    <span class="subheading">{{ downloadNumber }}</span>
                </v-row>
            </v-list-item>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: 'DownloadCard',
    props: {
        title: {
            type: String,
            default: '',
        },
        text: {
            type: String,
            default: '',
        },
        downloadNumber: {
            type: String,
            default: '',
        },
    },
};
</script>

<style lang="scss"></style>
