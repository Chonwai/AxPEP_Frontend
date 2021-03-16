<template>
    <v-dialog v-model="show" max-width="1000px">
        <v-card>
            <v-card-title>
                <span>{{ title }}</span>
                <v-spacer></v-spacer>
            </v-card-title>
            <v-card-text>
                <slot></slot>
            </v-card-text>
            <v-card-actions>
                <v-btn color="primary" text @click="closeDialog"> Close </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'ExampleDialogComponent',
    props: {
        dialog: {
            default: false,
            type: Boolean,
        },
        title: {
            default: '',
            type: String,
        },
        content: {
            default: '',
            type: String,
        },
    },
    data() {
        return {
            show: false,
        };
    },
    watch: {
        dialog: {
            deep: false,
            immediate: true,
            handler: function (val, oldVal) {
                this.show = this.dialog;
                if (val == false) {
                    this.$emit('dialogToggle', false);
                }
            },
        },
        show: {
            deep: false,
            immediate: true,
            handler: function (val, oldVal) {
                this.$emit('dialogToggle', val);
            },
        },
    },
    methods: {
        closeDialog() {
            this.$emit('dialogToggle', false);
        },
    },
};
</script>
