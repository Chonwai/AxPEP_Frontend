<template>
    <div class="index-page-helper-component">
        <v-alert icon="mdi-alert-circle-outline" prominent dense text type="info">
            <v-row align="center">
                <v-col class="grow"> You have uploaded sequences already? </v-col>
                <v-col class="shrink">
                    <v-btn @click="showRetrieve = true">Click here to retrieve</v-btn>
                    <TaskRetrieveDialog
                        :dialog="showRetrieve"
                        v-on:dialogToggle="retrieveDialogCallback"
                    />
                </v-col>
            </v-row>
        </v-alert>
        <v-alert border="left" colored-border color="deep-purple accent-4" elevation="2">
            AxPEP is a collection of sequence-based machine learning methods for peptide activities
            prediction. Currently, we predict peptides for anti-microbial and anti-cancer
            activities.
        </v-alert>
    </div>
</template>

<script>
import TaskRetrieveDialog from './TaskRetrieveDialog';
export default {
    name: 'IndexPageHelper',
    components: {
        TaskRetrieveDialog,
    },
    data() {
        return {
            showRetrieve: false,
        };
    },
    methods: {
        retrieveDialogCallback(toggle) {
            this.showRetrieve = toggle;
        },
    },
};
</script>
