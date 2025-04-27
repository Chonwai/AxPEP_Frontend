<template>
    <div class="p-8">
        <h2 class="text-2xl">Retrieve Tasks</h2>
        <v-form class="mt-8" @submit.prevent="retrieve">
            <v-text-field
                v-model="email"
                :rules="[rules.required, rules.email]"
                label="Email"
                required
                outlined
            ></v-text-field>
            <v-btn color="primary" @click="retrieve">Retrieve</v-btn>
        </v-form>
    </div>
</template>

<script>
import rules from '../../../utils/rules';
export default {
    layout: 'hemopep',
    name: 'HemoPepRetrieveIndex',
    data() {
        return {
            email: '',
            rules,
        };
    },
    methods: {
        retrieve() {
            if (this.rules.email(this.email) && this.rules.required(this.email)) {
                this.$router.push({
                    name: 'hemopep-retrieve-email',
                    params: { email: this.email },
                });
            }
        },
    },
};
</script>
