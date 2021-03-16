<template>
    <div class="p-2">
        <v-card outlined>
            <v-list-item three-line>
                <v-list-item-content>
                    <div class="overline mb-4">{{ title }}</div>
                    <v-list-item-title class="headline mb-1">{{ name }}</v-list-item-title>
                    <v-list-item-subtitle>{{ email }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-avatar size="80" color="grey">
                    <v-icon class="icon">mdi-account</v-icon>
                </v-list-item-avatar>
            </v-list-item>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'ContactCardComponent',
    props: {
        title: {
            type: String,
            default: '',
        },
        name: {
            type: String,
            default: '',
        },
        email: {
            type: String,
            default: '',
        },
    },
};
</script>

<style scroped>
.icon {
    font-size: 36px !important;
}
</style>
