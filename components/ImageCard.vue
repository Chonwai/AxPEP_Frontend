<template>
    <v-card class="mx-auto w-4/5 mb-8">
        <v-img class="white--text align-end w-2/3 m-auto" :src="src">
            <template v-slot:placeholder>
                <v-skeleton-loader class="mx-auto" type="image"></v-skeleton-loader>
            </template>
        </v-img>
        <v-card-subtitle class="pb-0 flex justify-center items-center"
            >{{ caption }}
        </v-card-subtitle>
    </v-card>
</template>

<script>
export default {
    name: 'ImageCard',
    props: {
        src: {
            type: String,
            default: '',
        },
        caption: {
            type: String,
            default: '',
        },
    },
};
</script>
