<template>
    <div class="task-retrieve-dialog-component">
        <v-dialog v-model="show" persistent max-width="600px">
            <v-card>
                <v-card-title>
                    <span class="headline">View Previously Submitted Sequences</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="email"
                                    label="Email*"
                                    required
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                    <small>*Indicates Required Field</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="closeDialog"> Close </v-btn>
                    <v-btn color="blue darken-1" text @click="retrieve"> Retrieve </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    name: 'TaskRetrieveDialog',
    props: {
        dialog: {
            default: false,
            type: Boolean,
        },
    },
    data() {
        return {
            show: false,
            email: null,
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
        retrieve() {
            if (this.email != null) {
                this.$router.push({ name: 'retrieve-email', params: { email: this.email } });
            }
        },
    },
};
</script>

<style lang="scss" scoped></style>
