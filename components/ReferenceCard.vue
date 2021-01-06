<template>
    <div class="reference-card-component">
        <v-card class="mx-auto w-4/5 mb-8">
            <v-card-text>
                <div>Reference</div>
                <p class="text-base font-bold text--primary">
                    {{ title }}
                </p>
                <p>{{ subtitle }}</p>
                <div class="text--primary">{{ authors }}</div>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'ReferenceCard',
    props: {
        title: {
            type: String,
            default: '',
        },
        subtitle: {
            type: String,
            default: '',
        },
        authors: {
            type: String,
            default: '',
        },
    },
};
</script>
