<template>
    <div class="index-page-helper-component">
        <v-alert icon="mdi-alert-circle-outline" prominent dense text type="info">
            <v-row align="center">
                <v-col class="grow"> You have uploaded sequences already? </v-col>
                <v-col class="shrink">
                    <v-btn @click="showRetrieve = true">Click here to retrieve</v-btn>
                    <TaskRetrieveDialog
                        :dialog="showRetrieve"
                        :page="page"
                        v-on:dialogToggle="retrieveDialogCallback"
                    />
                </v-col>
            </v-row>
        </v-alert>
        <v-alert v-if="page == 'ampep'" border="left" colored-border elevation="2">
            AxPEP is a collection of sequence-based machine learning methods for antimicrobial
            peptide (AMP) prediction. It accepts amino acid sequences in FASTA format. It can also
            screen AMPs directly from the DNA genome sequence.
        </v-alert>
        <v-alert v-else-if="page == 'bestox'" border="left" colored-border elevation="2">
            BESTox is a convolutional neural network regression model for acute oral toxicity
            prediction. The model was trained and evaluated on the Oral Rat LD<sub>50</sub> data
            set. In a benchmark dataset, this model achieved 0.619, 0.603, 0.433 for R<sup>2</sup>
            (squared Pearson correlation coefficient), RMSE and MAE respectively.
        </v-alert>
    </div>
</template>

<script>
import TaskRetrieveDialog from './TaskRetrieveDialog';
export default {
    name: 'IndexPageHelper',
    props: {
        page: {
            default: 'ampep',
            type: String,
        },
    },
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
