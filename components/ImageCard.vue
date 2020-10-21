<template>
    <v-card class="mx-auto w-4/5 mb-8">
        <div class="p-4">
            <v-img
                v-if="direction == 'horizontal'"
                class="white--text align-end w-2/3 m-auto"
                :src="src"
            >
                <template v-slot:placeholder>
                    <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
                </template>
            </v-img>
            <v-img
                v-if="direction == 'vertical'"
                class="white--text align-end w-1/3 m-auto"
                :src="src"
            >
                <template v-slot:placeholder>
                    <v-skeleton-loader class="mx-auto" type="image"></v-skeleton-loader>
                </template>
            </v-img>
        </div>
        <v-card-subtitle v-show="caption != ''" class="pb-0 flex justify-center items-center"
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
        direction: {
            type: String,
            default: 'horizontal',
        },
    },
};
</script>
