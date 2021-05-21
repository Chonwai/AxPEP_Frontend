<template>
    <div class="reference-card-component">
        <v-card class="mx-auto w-4/5 mb-8">
            <v-card-text>
                <div>Reference</div>
                <div class="text--primary">{{ authors }}</div>
                <a :href="link" class="text-base font-bold text--primary">
                    {{ title }}
                </a>
                <p>{{ subtitle }}</p>
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
        link: {
            type: String,
            default: '#',
        },
    },
};
</script>
