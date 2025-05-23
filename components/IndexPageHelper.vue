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
        <v-alert v-if="page === 'ampep'" border="left" colored-border elevation="2">
            AxPEP is a collection of sequence-based machine learning methods for antimicrobial
            peptide (AMP) prediction. It accepts amino acid sequences in FASTA format. It can also
            screen AMPs directly from the DNA genome sequence.
        </v-alert>
        <v-alert v-else-if="page === 'acpep'" border="left" colored-border elevation="2">
            AcPEP is a server of sequence-based machine learning methods for anticancer peptide
            (ACP) prediction. This server accepts peptide amino acid sequences in FASTA format.
            Firstly, it predicts if the sequences are ACPs, and then it predicts their biological
            activities against 6 different cancer types: breast, cervix, colon, lung, prostate, and
            skin.
        </v-alert>
        <v-alert v-else-if="page === 'bestox'" border="left" colored-border elevation="2">
            BESTox is a convolutional neural network regression model for acute oral ecotoxicology
            prediction. The model was trained and evaluated on the Oral Rat LD<sub>50</sub> data
            set. In a benchmark dataset, this model achieved 0.619, 0.603, 0.433 for R<sup>2</sup>
            (squared Pearson correlation coefficient), RMSE and MAE respectively.
        </v-alert>
        <v-alert v-else-if="page === 'ecotoxicology'" border="left" colored-border elevation="2">
            EcoTox-GCN - The web server of Graph Convolutional Neural Network models for predicting
            chemical ecotoxicology for three types of aquatic organisms - Algae, Crustaceans, and
            Fish. This server accepts multiple chemicals in SMILES notation organized in the FASTA
            format.
        </v-alert>
        <v-alert v-else-if="page === 'hemopep'" border="left" colored-border elevation="2">
            BERT-HemoPep60 is a deep learning method based on transformer architecture and Domain
            Adaptive Pre-Training (DAPT) for quantitative prediction of peptide hemolytic activity
            against human red blood cells. The model employs an innovative prefix prompting approach
            that integrates experimental hemolysis data from multiple mammalian species and
            hemolysis indicators for peptide toxicity prediction.
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
